import { instance } from "../base.api";
const model = "studios";

const studioEndpoints = {
  getAllStudios: () => {
    return instance.get(`${model}/list`);
  },
};
export default studioEndpoints;
