
const login = (builder: any) =>
  builder.mutation({
    query: (credentials: { email: string; password: string }) => ({
      url: '/auth/login',
      method: 'POST',
      body: credentials,
    }),
    invalidatesTags: ['Auth'],
  });

export default login;