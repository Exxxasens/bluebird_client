import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "../../api/userApi";

export interface IUser {
    id: number;
    name: string;
    followers: {
        id: number;
        name: string;
    }[];
    following: {
        id: number;
        name: string;
    }[];
}

export interface AuthState {
    token: string | null;
    user: IUser | null;
}

function getToken() {
    return window.localStorage.getItem("token");
}

function setToken(token: string) {
    return window.localStorage.setItem("token", token);
}

const initialState: AuthState = {
    token: getToken(),
    user: null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout(state) {
            state.token = null;
            setToken("");
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            userApi.endpoints.login.matchFulfilled,
            (state, { payload }) => {
                state.token = payload.access_token;
                setToken(payload.access_token);
            }
        );
        builder.addMatcher(
            userApi.endpoints.getMe.matchFulfilled,
            (state, { payload }) => {
                state.user = payload.user;
            }
        );
        builder.addMatcher(
            userApi.endpoints.followUser.matchFulfilled,
            (state, { payload, meta }) => {
                if (payload.result) {
                    state.user?.following.push({
                        id: meta.arg.originalArgs.id,
                        name: meta.arg.originalArgs.name
                    });
                }
            }
        );
        builder.addMatcher(
            userApi.endpoints.unFollowUser.matchFulfilled,
            (state, { payload, meta }) => {
                if (payload.result) {
                    if (state.user) {
                        state.user.following = state.user.following.filter(
                            (user) => user.id !== meta.arg.originalArgs.id
                        );
                    }
                }
            }
        );
    }
});

export const authReducer = authSlice.reducer;
export const { logout } = authSlice.actions;
export default authSlice;
