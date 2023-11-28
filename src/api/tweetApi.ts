import { baseApi } from "./baseApi";

export interface CreateTweetRequest {
    content: string;
}

export interface CreateTweetResponse {
    result: boolean;
    tweet_id: number;
}

export interface TweetType {
    id: number;
    content: string;
    attachments: [];
    author: {
        id: number;
        name: string;
    };
    likes: {
        id: number;
        name: string;
    }[];
}

export interface GetTweetsResponse {
    result: boolean;
    tweets: TweetType[];
}

export interface RemoveTweetRequest {
    id: number;
}

export interface RemoveTweetResponse {
    result: boolean;
}

export interface LikeTweetRequest {
    id: number;
}

export interface LikeTweetResponse {
    result: boolean;
}

export interface DislikeTweetRequest {
    id: number;
}

export interface DislikeTweetResponse {
    result: boolean;
}

export const tweetApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createTweet: builder.mutation<CreateTweetResponse, CreateTweetRequest>({
            query: (body) => ({
                url: `/api/tweets?tweet_content=${body.content}`,
                method: "POST",
                body: []
            }),
            invalidatesTags: ["Tweet"]
        }),
        getTweets: builder.query<GetTweetsResponse, void>({
            query: () => ({
                url: "/api/tweets",
                method: "GET"
            }),
            providesTags: (result, error, arg) =>
                result
                    ? [
                          ...result.tweets.map(({ id }) => ({
                              type: "Tweet" as const,
                              id
                          })),
                          "Tweet"
                      ]
                    : ["Tweet"]
        }),
        removeTweet: builder.mutation<RemoveTweetResponse, RemoveTweetRequest>({
            query: ({ id }) => ({
                url: `/api/tweets/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Tweet"]
        }),
        likeTweet: builder.mutation<LikeTweetResponse, LikeTweetRequest>({
            query: ({ id }) => ({
                url: `/api/tweets/${id}/likes`,
                method: "POST"
            }),
            invalidatesTags: ["Tweet"]
        }),
        dislikeTweet: builder.mutation<
            DislikeTweetResponse,
            DislikeTweetRequest
        >({
            query: ({ id }) => ({
                url: `/api/tweets/${id}/likes`,
                method: "DELETE"
            }),
            invalidatesTags: ["Tweet"]
        })
    })
});

export const {
    useCreateTweetMutation,
    useGetTweetsQuery,
    useRemoveTweetMutation,
    useLikeTweetMutation,
    useDislikeTweetMutation
} = tweetApi;
