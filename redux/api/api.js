import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:3001/api/v1/` }),
  tagTypes: ["chat", "users"],
  endpoints: (builder) => ({
    getMyChats: builder.query({
      query: () => ({ url: "chat/my", credentials: "include" }),
      providesTags: ["chat"],
    }),
    searchUser: builder.query({
      query: (name) => ({
        url: `user/search?name=${name}`,
        credentials: "include",
      }),
      providesTags: ["users"],
    }),

    sendRequest: builder.mutation({
      query: (data) => ({
        url: "/user/sendrequest",
        method: "PUT",
        credentials: "include",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
    getNotifications:builder.query({
      query:()=>({
        url:`user/notifications`,
        credentials: "include",
      }),
      keepUnusedDataFor: 0,
    }),
    acceptRequest: builder.mutation({
      query: (data) => ({
        url: "/user/accept",
        method: "PUT",
        credentials: "include",
        body: data,
      }),
      invalidatesTags: ["chat"],
    }),
  }),
});

export default api;
export const {
  useGetMyChatsQuery,
  useLazySearchUserQuery,
  useSendRequestMutation,
  useGetNotificationsQuery,
  useAcceptRequestMutation,
} = api;
