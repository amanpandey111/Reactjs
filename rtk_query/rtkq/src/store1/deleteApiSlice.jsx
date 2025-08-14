//! this is the not recommended way
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const deleteApiSlice = createApi({
//     reducerPath:'todoDelete',
//     baseQuery:fetchBaseQuery({
//         baseUrl: "https://dummyjson.com"
//     }),
//     endpoints: function (builder) {
//         return{
//             deleteTodo: builder.mutation({   //! when we want to get(retrieve data), post, put, patch, delete
//                 query : (id) => {
//                     return{
//                         url: `/todos/${id}`,
//                         method: "DELETE"
//                     }
//                 },
//                 transformResponse:(data)=>{
//                     // console.log(data.todos);
//                     return data.todos
//                 }
//             }),
//         }
//     }
// })

// export default deleteApiSlice;
// export const { useDeleteTodoMutation } = deleteApiSlice;


//! better way to build second api 
// import apiSlice from "./apiSlice";

// const deleteApiSlice = apiSlice.injectEndpoints({
//     endpoints: (builder) => {
//         return {
//             deleteTodo: builder.mutation({
//                 query:(id) => ({
//                     url: `/todos/${id}`,
//                     method: 'DELETE'
//                 }),
//                 onQueryStarted: (id, {dispatch}) => {
//                     console.log("object");
//                     dispatch(
//                         apiSlice.util.updateQueryData(
//                             "getAllTodos",
//                             undefined,
//                             function(todos){
//                                 console.log(todos);
//                                 const newTodos = todos.filter((todo)=>todo.id !== id);
//                                 console.log(todos);
//                                 return newTodos
//                             }
//                         )
//                     )
//                 }
//             }),
//         }
//     }
// });

// export const { useDeleteTodoMutation } = deleteApiSlice;

//! Now lesrn optimidtic updates, setting header : undo if something went wrong
import apiSlice from "./apiSlice";

const deleteApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => {
        return {
            deleteTodo: builder.mutation({
                query:(id) => ({
                    url: `/todos/${id}`, //! url: `/todos/${id}hvjh` will do undo if it fails
                    method: 'DELETE'
                }),
                onQueryStarted: (id, {dispatch, queryFulfilled}) => {
                    console.log("object");
                    const action = dispatch(
                        apiSlice.util.updateQueryData(
                            "getAllTodos",
                            undefined,
                            function(todos){
                                console.log(todos);
                                const newTodos = todos.filter((todo)=>todo.id !== id);
                                console.log(todos);
                                return newTodos
                            }
                        )
                    )
                    queryFulfilled.catch(()=>{
                        action.undo()  // if the delete fails, undo the optimistic update
                    })
                }
            }),
        }
    }
});

export const { useDeleteTodoMutation } = deleteApiSlice;