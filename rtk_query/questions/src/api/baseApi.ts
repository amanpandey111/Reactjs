// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const baseApi = createApi({
  reducerPath: 'hrmsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/rest/api',
    credentials: 'include',
  }),
  tagTypes: ['Employee', 'Department', 'Position', 'LeaveRequest', 'AttendanceRecord'],
  endpoints: () => ({}),
})

export default baseApi;