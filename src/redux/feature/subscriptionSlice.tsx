
import baseApi from "../Api/baseApi";

export const subscriptionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // /subscription/plans/
    subscriptionPlans: builder.query({
      query: () => ({
        url: "/subscription/plans/",
        method: "GET",
      }),
    //   providesTags: ["Subscription"],
    })
  }),
});

export const { useSubscriptionPlansQuery } = subscriptionApi;
