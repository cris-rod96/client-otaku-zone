import { instance } from "../base.api";
const model = "comments";

const commentEndpoints = {
  getAllComments: () => {
    return instance.get(`${model}/list`);
  },
};

export default commentEndpoints;
