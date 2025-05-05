import { apiSlice } from "../api/api";


export const addressApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    findMatchedAddresses: builder.mutation({
      query: (addresses) => ({
        url: '/findAddress',
        method: 'POST',
        body: { address: addresses },
      }),
    }),
  }),
});

export const { useFindMatchedAddressesMutation } = addressApi;
