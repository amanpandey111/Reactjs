// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const apiSlice = createApi({
//     baseQuery:fetchBaseQuery({
//         baseUrl:"https://dummyjson.com"
//     }),
//     endpoints:(builder)=>{
//         return{
//             getAllTodo:builder.query({
//                 query:()=>{
//                     return "/todos"
//                 },
//                 providesTags:['todos']
//             }),
//             deleteTodo:builder.mutation({
//                 query:(id)=>{
//                     console.log("deleting",id);
//                     return{
//                         url:`/todos/${id}`,
//                         method:"DELETE"
//                     }
//                 },
//                 onQueryStarted:(id,{dispatch, queryFulfilled})=>{
//                     console.log("object");
//                     const action = dispatch(
//                         apiSlice.util.updateQueryData(
//                             "getAllTodo",
//                             undefined,
//                             function(todos){
//                                 console.log(todos);
//                                 const newTodos = todos.filter((todo)=>todo.id !== id);
//                                 console.log(todos);
//                                 return newTodos
//                             }
//                         )
//                     )
                    
//                     queryFulfilled.catch(()=>{
//                         action.undo()  // if the delete fails, undo the optimistic update
//                     })
//                 },
//                 invalidatesTags:['todos']
//             })
//         }
//     }
// })

// export default apiSlice
// export const { useGetAllTodoQuery, useDeleteTodoMutation } = apiSlice


import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "https://dummyjson.com"
    }),
    endpoints: (builder) => {
        return {
            getAllTodo: builder.query({
                query: () => {
                    return "/todos";
                },
                providesTags: ['todos']
            }),
            deleteTodo: builder.mutation({
                query: (id) => {
                    return {
                        url: `/todos/${id}`,
                        method: "DELETE"
                    };
                },
                onQueryStarted(id, { dispatch, queryFulfilled }) {
                    const patchResult = dispatch(
                        apiSlice.util.updateQueryData(
                            "getAllTodo",
                            undefined, 
                            (draft) => {
                                if (draft && draft.todos) {
                                    console.log(draft);
                                    console.log(draft.todos);
                                    draft.todos = draft.todos.filter((todo) => todo.id !== id);
                                }
                            }
                        )
                    );
                },
            }),
            editTodo: builder.mutation({
                query:(todo)=>{
                    let myid = String(todo.id)
                    console.log(typeof todo.id);
                    return{
                        url:`/todos/${myid}`,
                        method:"PUT",
                        body:todo
                    }
                }
            }),
            getTodo: builder.query({
                query:(id)=>{
                    return `/todos/${id}`
                }
            }),
            addTodo: builder.mutation({
                query:(todo)=>{
                    return{
                        url:"/todos/add",
                        method:"POST",
                        body:todo
                    }
                }
            })
        };
    }
});

export default apiSlice;
export const { useGetAllTodoQuery, useDeleteTodoMutation, useEditTodoMutation,useLazyGetTodoQuery, useAddTodoMutation } = apiSlice;