import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API = "https://blueproject-1.onrender.com/api/v1/bluebreed";

export const blueBreedApi = createApi({
    reducerPath: "blueBreedApi",
    baseQuery: fetchBaseQuery({
        baseUrl: API,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token")
            if (token) {
                headers.set("Authorization", `Bearer ${token}`)
            }
            return headers;
        }
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
        addToCart: builder.mutation({
            query: (credentials) => ({
                url: "/user/cart/add",
                method: "POST",
                body: credentials,
            }),
        }),

        getCart: builder.query({
            query: () => "/user/cart/mycart/all",
            providesTags: ["Cart"]
        }),
        getProductsByCategory: builder.query({
            query: ({categoryId}) => `product/bycategory/all?categoryId=${categoryId}`,
            providesTags: ["Products"]
        }),
        order: builder.mutation({
            query: (credentials) => ({
                url: "/user/order/new",
                method: "POST",
                body: credentials
            })
        }),
        getSimilarProducts: builder.mutation({
            query: ({productId}) => `/product/similar?productId=${productId}`
        })
        

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

export const {useLoginMutation, useSigninMutation, useAddToCartMutation, useGetCartQuery, useGetProductsByCategoryQuery, useOrderMutation, useGetSimilarProductsMutation } = blueBreedApi;
