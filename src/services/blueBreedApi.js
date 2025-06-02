import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API = "https://blueproject-1.onrender.com/api/v1/bluebreed";

export const blueBreedApi = createApi({
    reducerPath: "blueBreedApi",
    baseQuery: fetchBaseQuery({
        baseUrl: API,
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: "/account/login",
                method: "POST",
                body: credentials,
            }),
        }),
        signin: builder.mutation({
            query: (credentials) => ({
                url: "/account/create",
                method: "POST",
                body: credentials,
            }),
        }),
        

        /* getPost: builder.query({query: () => "comments"}),
        getPosts: builder.query({query: (id) => `post/${id}`}),
        createPost: builder.mutation({
            query: (newPost) => ({
                url: "posts",
                method: "POST",
                body: newPost,
            })
        })
 */
    })
})

export const {useLoginMutation, useSigninMutation } = blueBreedApi;
