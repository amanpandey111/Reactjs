import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:5000"
    }),
    endpoints:(builder)=>{
        return{
            getAllQuiz:builder.query({
                query:()=>{
                    return "/options"
                }
            })
        }
    }
})

export default apiSlice
export const { useGetAllQuizQuery } = apiSlice