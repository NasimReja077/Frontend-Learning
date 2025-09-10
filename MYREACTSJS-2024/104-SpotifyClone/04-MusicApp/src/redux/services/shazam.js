import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamApi = createApi({
     reducerPath: 'shazamApi',
     baseQuery: fetchBaseQuery({
          baseUrl: 'https://genius-song-lyrics1.p.rapidapi.com',
          prepareHeaders: (headers) => {
               headers.set('x-rapidapi-key','41df87e8ecmsh485ea5aea718304p1e7b26jsnb2cc0c3229d4');
               return headers;
          },
     }),
     endpoints: (builder) =>({
          getTopCharts: builder.query({
               query: () => '/chart/albums',
          }),
     }),
});

export const{ useGetTopChartsQuery } = shazamApi;