
const logout = (builder: any) =>
  builder.mutation({
    query: () => ({
      url: '/auth/logout',
      method: 'POST',
    }),
    invalidatesTags: ['Auth'],
  });

export default logout;