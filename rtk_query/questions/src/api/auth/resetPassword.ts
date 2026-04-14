
const resetPassword = (builder: any) =>
  builder.mutation({
    query: (data: { token: string; password: string }) => ({
      url: '/auth/reset-password',
      method: 'POST',
      body: data,
    }),
  });

export default resetPassword;