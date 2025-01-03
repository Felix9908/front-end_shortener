import { client }    from './createRestApiClient';
import { addParams } from "./index";

const base = "users/";
const userService = () => ({
    getUsers: ({filter, skip, take, order, role}) => client.request({
      method: 'GET',
      url: base + addParams({filter, skip, take, order, role})
    }),
    setUserRole: (id, role) => client.request({
      method: 'PUT',
      url: base + "role/" + id,
      data: {role}
    }),
    removeUserRole: (id, role) => client.request({
      method: 'DELETE',
      url: base + "role/" + id,
      data: {role}
    }),
    changePassword: (id, password) => client.request({
      method: 'PATCH',
      url: base + "change-password/" + id,
      data: {password}
    }),
    changeUserStatus: (id) => client.request({
      method: 'DELETE',
      url: base + id
    }),
    getCurrentUser: (token = "") => client.request({
        method: 'GET',
        url: base + "current"
      }, token
    ),
    getProfile: () => client.request({
      method: 'GET',
      url: base + "profile"
    }),
    findOne: (id) => client.request({method: 'GET', url: base + id}),
    editProfile: (data) => client.request({
      method: 'PUT',
      url: base + "profile",
      data
    }),
    editCode: (data) => client.request({
      method: 'PUT',
      url: base + "code",
      data
    }),
    editAvatar: (data) => client.request({
      method: 'PUT',
      url: base + "avatar",
      data: {data}
    }),
    getAvatar: () => client.request({
      method: 'GET',
      responseType: 'blob',
      url: base + "avatar"
    }),
    addUser: (data) => client.request({
      method: 'POST',
      url: base,
      data
    }),
    addUserFromAdmin: (data) => client.request({
      method: 'POST',
      url: base + "admin/add-user",
      data
    }),
    updateUserFromAdmin: (data) => client.request({
      method: 'PUT',
      url: base + "admin/update-user",
      data
    }),
    login: (data) => client.request({
      method: 'POST',
      url: "login",
      data
    })
  }
)

export default userService()