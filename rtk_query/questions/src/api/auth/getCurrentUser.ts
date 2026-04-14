const getCurrentUser = (builder: any) => builder.query({
  query: () => ({
    url: '/get/current-user/23',
    method: 'GET',
  }),
  provideTags: ['Auth'],
})
export default getCurrentUser;
