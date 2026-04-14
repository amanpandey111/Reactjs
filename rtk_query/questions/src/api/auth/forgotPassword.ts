
const forgetPassword = (builder: any) =>
  builder.mutation({
    query: (email: string) => ({
      url: '/auth/forgot-password',
      method: 'POST',
      body: { email },
    }),
  });

export default forgetPassword;