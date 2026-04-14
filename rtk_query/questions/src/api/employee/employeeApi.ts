import baseApi from "../baseApi";

export const employeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // ✅ GET ALL EMPLOYEES
    getEmployees: builder.query<any[], void>({
      query: () => ({
        url: '/employees',
        method: 'GET',
      }),
      providesTags: ['Employee'],
    }),

    // ✅ GET SINGLE EMPLOYEE
    getEmployee: builder.query<any, number>({
      query: (id) => ({
        url: `/employees/${id}`,
        method: 'GET',
      }),
      providesTags: (result, error, id) => [
        { type: 'Employee', id },
      ],
    }),

    // ✅ CREATE EMPLOYEE
    createEmployee: builder.mutation<any, any>({
      query: (data) => ({
        url: '/employees',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Employee'],
    }),

    // ✅ UPDATE EMPLOYEE
    updateEmployee: builder.mutation<any, any>({
      query: ({ id, ...data }) => ({
        url: `/employees/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Employee', id },
        'Employee',
      ],
    }),

    // ✅ DELETE EMPLOYEE
    deleteEmployee: builder.mutation<{ success: boolean }, number>({
      query: (id) => ({
        url: `/employees/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Employee'],
    }),
  }),
});

export const {
  useGetEmployeesQuery,
  useGetEmployeeQuery,
  useCreateEmployeeMutation,
  useUpdateEmployeeMutation,
  useDeleteEmployeeMutation,
} = employeeApi;