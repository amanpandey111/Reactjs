import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiOpearte = createApi({
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:3000"
    }),
    endpoints:(builder)=>{
        return{
            getAllData:builder.query({
                query:()=>{
                    return "/sources"
                },
                providesTags:['Sources']
            }),
            deleteData:builder.mutation({
                query:(id)=>{
                    console.log(id);
                    return{
                        url:`/sources/${id}`,
                        method:"DELETE"
                    }
                },
                invalidatesTags:['Sources']
            }),
            addData:builder.mutation({
                query:(adddata)=>{
                    console.log(adddata);
                    return{
                        url:`/sources`,
                        method:"POST",
                        body:adddata
                    }
                },
                invalidatesTags:['Sources']
            }),
            editData:builder.mutation({
                query:(editData)=>{
                    console.log(editData);
                    return{
                        url:`/sources/${editData.id}`,
                        method:"PUT",
                        body:editData
                    }
                },
                invalidatesTags:['Sources']
            }),
            // getAllComments:builder.query({
            //     query:()=>{

            //     }
            // })
        }
    }
})

export default apiOpearte
export const { useGetAllDataQuery, useDeleteDataMutation, useAddDataMutation, useEditDataMutation } = apiOpearte;