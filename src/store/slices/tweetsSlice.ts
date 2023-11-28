import { createSlice } from "@reduxjs/toolkit";
import { TweetType, tweetApi } from "../../api/tweetApi";

export interface TweetsSliceState {
    tweets: TweetType[];
}

const initialState: TweetsSliceState = {
    tweets: []
};

const tweetsSlice = createSlice({
    name: "tweets",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // builder.addMatcher(
        //     userApi.endpoints.getUser.matchFulfilled,
        //     (state, { payload }) => {
        //         state.user = payload;
        //     }
        // );

        builder.addMatcher(
            tweetApi.endpoints.getTweets.matchFulfilled,
            (state, { payload }) => {
                state.tweets = payload.tweets;
            }
        );

        builder.addMatcher(
            tweetApi.endpoints.likeTweet.matchFulfilled,
            (state, { payload, meta }) => {
                const tweetId = state.tweets.findIndex(
                    (tweet) => tweet.id === meta.arg.originalArgs.id
                );
                if (tweetId >= 0) {
                }
            }
        );
    }
});

export const authReducer = tweetsSlice.reducer;
export const {} = tweetsSlice.actions;
export default tweetsSlice;
