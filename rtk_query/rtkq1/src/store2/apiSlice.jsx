import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:3001"
    }),
    endpoints:(builder)=>{
        return{
            getAllSections:builder.query({
                query:()=>{
                    return "/sources"
                },
                providesTags:['Sources']
            }),
            addData:builder.mutation({
                query:(adddata)=>{
                    console.log(adddata);
                    return{
                        url: "/sources",
                        method:"POST",
                        body:adddata
                    }
                },
                invalidatesTags:['Sources']
            }),
            deleteData:builder.mutation({
                query:(id)=>{
                    console.log(id);
                    return{
                        url:`/sources/${id}`,
                        method:"DELETE",
                    }
                },
                invalidatesTags:['Sources']
            }),
            updateData: builder.mutation({
                query:(data) => {
                    console.log(data);
                    return{
                        url:`/sources/${data.id}`,
                        method:"PUT",
                        body:data
                    }
                },
                invalidatesTags:['Sources']
            })
        }
    },
})

export default apiSlice;
export const { useGetAllSectionsQuery, useAddDataMutation, useDeleteDataMutation, useUpdateDataMutation } = apiSlice;