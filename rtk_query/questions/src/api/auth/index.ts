import baseApi from "../baseApi";

import login from "./login";
import logout from "./logout";
import getCurrentUser from "./getCurrentUser";
import resetPassword from "./resetPassword";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: login(builder),
    logout: logout(builder),
    getCurrentUser: getCurrentUser(builder),
    resetPassword: resetPassword(builder),
  })
})

export const { useGetCurrentUserMutation, useResetPasswordMutation, useLoginMutation, useLogoutMutation } = authApi;
