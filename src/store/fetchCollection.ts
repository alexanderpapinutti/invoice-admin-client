import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Customer from "my-interfaces/Customer";
import Invoice from "my-interfaces/Invoice";
import Job from "my-interfaces/Job";

type ApiResponse = {
  success: boolean;
  data?: Customer[] | Invoice[] | Job[];
};

const fetchCollectionSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
    prepareHeaders(headers) {
      headers.set("Content-Type", "application/json");

      return headers;
    },
  }),

  endpoints(build) {
    return {
      fetchCollection: build.query<ApiResponse, string>({
        query(collection) {
          return `/${collection}`;
        },
      }),
    };
  },
});

export default fetchCollectionSlice;
