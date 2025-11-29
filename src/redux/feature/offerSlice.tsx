// "use client";

// import baseApi from "../Api/baseApi";

// export const offerApi = baseApi.injectEndpoints({
//     endpoints: (builder) => ({

// // "Pending", "Accepted", "Done"
// // /supplychain/task/status/?status=Pending
//         allOffer: builder.query({
//             query: ({status}) => ({
//                 url: `/supplychain/task/status/?status=${status}`,
//                 method: "GET",
//             }),
//             providesTags: ["Supplier"],
//         }),



//     }),
// });

// export const { useAllOfferQuery } = offerApi;
// api/offerApi.ts
"use client";
import baseApi from "../Api/baseApi";

export const offerApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        allOffer: builder.query({
            query: (status: string) => ({
                url: `/supplychain/task/status/?status=${status}`,
                method: "GET",
            }),
            providesTags: ["Supplier"],
        }),
        offerDetails: builder.query({
            query: (id: string) => ({
                url: `/supplychain/tasks/${id}/`,
                method: "GET",
            }),
            providesTags: ["Supplier"],
        })
    }),


});

export const { useAllOfferQuery , useOfferDetailsQuery } = offerApi;