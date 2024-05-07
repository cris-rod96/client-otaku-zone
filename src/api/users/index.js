import { instance } from "../base.api";

const model = "users";

const userEndpoints = {
  getAllUsers: () => {
    return instance.get(`${model}/list`);
  },
};
export default userEndpoints;
