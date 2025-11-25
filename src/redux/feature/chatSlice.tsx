"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Replace with your base URL
// const API_URL = "http://10.10.12.111:8001/ai/api";
const API_URL = "http://10.10.12.46:8000";

export const aiApi = createApi({
  reducerPath: "chatApi",
  tagTypes: ["Session"],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    generateOffer: builder.mutation({
      query: (data) => ({
        url: "/offers/generate",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Session"],
    }),

    chatCreate: builder.mutation({
      query: (data) => ({
        url: "/chat",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Session"],
    }),

    chatList: builder.query({
      query: (sessionId) => ({
        url: `/session/${sessionId}/chats`,
        method: "GET",
      }),
      providesTags: ["Session"],
    }),

    userAllSessions: builder.query({
      query: (email) => ({
        url: `/user/${email}/sessions`,
        method: "GET",
        // /user/sharifmahamud577951@gmail.com/sessions
      }),
      providesTags: ["Session"],
    }),
  }),
});

export const {
  useGenerateOfferMutation,
  useChatCreateMutation,
  useChatListQuery,
  useUserAllSessionsQuery
} = aiApi;
