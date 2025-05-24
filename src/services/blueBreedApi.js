import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API = "https://";

export const blueBreedApi = createApi({
    reducerPath: "blueBreedApi",
    baseQuery: fetchBaseQuery({
        baseUrl: API,
    }),
    endpoints: (builder) => ({
        getPost: builder.query({query: () => "comments"}),
        getPosts: builder.query({query: (id) => `post/${id}`}),
        createPost: builder.mutation({
            query: (newPost) => ({
                url: "posts",
                method: "POST",
                body: newPost,
            })
        })

    })
})

export const {useGetPostQuery, useCreatePostMutation, useCreatePostsMutation} = blueBreedApi;