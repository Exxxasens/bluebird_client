import { BaseQueryApi } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import {
    createApi,
    FetchArgs,
    fetchBaseQuery
} from "@reduxjs/toolkit/query/react";
import { RootStore } from "../store";
import { logout } from "../store/slices/authSlice";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:7777",
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootStore).auth.token;
        console.log(token);
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    }
});

const baseQueryWithErrorHandler = async (
    args: string | FetchArgs,
    api: BaseQueryApi,
    extraOptions: {}
) => {
    let result = await baseQuery(args, api, extraOptions);
    if (result.error && result.error.data) {
        if (result.error.status === 401) {
            // api.dispatch(logout());
        }
    }

    return result;
};

export const baseApi = createApi({
    baseQuery: baseQueryWithErrorHandler,
    tagTypes: ["User", "Tweet"],
    endpoints: (builder) => ({})
});
