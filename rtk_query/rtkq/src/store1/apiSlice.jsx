//! this is first way
// import { createApi } from "@reduxjs/toolkit/query/react";
// import axios from "axios";

// const apiSlice = createApi({
//     endpoints: function (builder) {
//         return{
//             getAllTodos: builder.query({
//                 queryFn: async() => {
//                     const response = await axios.get("https://dummyjson.com/todos");
//                     // console.log(response.data.todos);
//                     return { data: response?.data?.todos }
//                 }
//             })
//         }
//     }
// })

// export default apiSlice;
// export const { useGetAllTodosQuery } = apiSlice;

//! this is second way
// import { createApi } from "@reduxjs/toolkit/query/react";
// import axios from "axios";

// const apiSlice = createApi({
//     baseQuery:async()=>{
//         const response = await axios.get("https://dummyjson.com/todos");
//         return { data: response?.data?.todos }
//     },
//     endpoints: function (builder) {
//         return{
//             getAllTodos: builder.query({
//                 query : () => {
//                     return "https://dummyjson.com/todos"
//                 }
//             })
//         }
//     }
// })

// export default apiSlice;
// export const { useGetAllTodosQuery } = apiSlice;

//! third and optimistic way
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
    reducerPath:'todoGet',
    refetchOnFocus:true,
    refetchOnReconnect:true,
    tagTypes:['AddTodo','GetAllTodoTag'],
    // keepUnusedDataFor:60, 
    baseQuery:fetchBaseQuery({
        baseUrl: "https://dummyjson.com"
    }),
    endpoints: function (builder) {
        return{
            getAllTodos: builder.query({
                query : () => {
                    return "/todos"
                },
                providesTags:['GetAllTodoTag'],
                transformResponse:(data)=>{
                    // console.log(data.todos);
                    return data.todos
                }
            }),

            getTodo: builder.query({
                query: (id) => {
                    console.log("called trigger function");
                    return `/todos/${id}`
                },
                // invalidatesTags: ['GetAllTodoTag']
            }),

            addTodo: builder.mutation({
                query: (params)=> ({
                    url: `/todos/add`,
                    method: 'POST',
                    body: params,
                }),
                onQueryStarted: (params, {dispatch}) => {
                    console.log(params);
                    dispatch(
                        apiSlice.util.updateQueryData(
                            "getAllTodos",
                            undefined,
                            function(todos){
                                // console.log(todos);
                                // const newTodos = todos.filter((todo)=>todo.id !== id);
                                // let newTodos = todos.push(params);
                                // console.log(newTodos);
                                // return todos
                                todos.push(params)
                            }
                        )
                    )
                },
                // invalidatesTags: ['GetAllTodoTag']
            })
        }
    }
})

export default apiSlice;
export const { useGetAllTodosQuery, useLazyGetTodoQuery, useAddTodoMutation } = apiSlice;