import { IUser } from "../store/slices/authSlice";
import { baseApi } from "./baseApi";

export interface LoginRequest {
    username: string;
    password: string;
}

export interface LoginResponse {
    // user: IUser;
    access_token: string;
    token_type: string;
}

export interface RegisterRequest {
    name: string;
    username: string;
    email: string;
    password: string;
}

export interface RegisterResponse {
    name: string;
    username: string;
    email: string;
    id: number;
    created_at: string;
    is_active: number;
}

export interface GetMeResponse {
    result: boolean;
    user: IUser;
}

export interface FollowUserRequest {
    id: number;
    name: string;
}

export interface FollowUserResponse {
    result: boolean;
}

export interface unFollowUserRequest {
    id: number;
    name: string;
}

export interface unFollowUserResponse {
    result: boolean;
}

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, LoginRequest>({
            query: (body) => ({
                url: "/token",
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams({
                    username: body.username,
                    password: body.password
                })
            })
        }),
        register: builder.mutation<RegisterResponse, RegisterRequest>({
            query: (body) => ({
                url: "/api/users/users",
                method: "POST",
                body
            })
        }),
        getMe: builder.query<GetMeResponse, void>({
            query: () => ({
                url: "/api/users/me",
                method: "GET"
            })
        }),
        followUser: builder.mutation<FollowUserResponse, FollowUserRequest>({
            query: ({ id }) => ({
                url: `/api/users/${id}/follow`,
                method: "POST"
            })
        }),
        unFollowUser: builder.mutation<
            unFollowUserResponse,
            unFollowUserRequest
        >({
            query: ({ id }) => ({
                url: `/api/users/${id}/follow`,
                method: "DELETE"
            })
        })
    })
});

export const {
    // useGetUserMutation,
    useLoginMutation,
    useRegisterMutation,
    useGetMeQuery,
    useFollowUserMutation,
    useUnFollowUserMutation
} = userApi;
