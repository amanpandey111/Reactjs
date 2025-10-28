import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiComments = createApi({
    baseQuery:fetchBaseQuery({baseUrl:"https://jsonplaceholder.typicode.com/"}),
    endpoints:(builder)=>{
        return{
            getAllComments:builder.query({
                query:(page=1)=>{
                    return `comments?_page=${page}_limit=${100}`
                }
            })
        }
    }
})

export default apiComments
export const { useGetAllCommentsQuery } = apiComments