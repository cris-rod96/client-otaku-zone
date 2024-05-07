import { instance } from "../base.api";
const model = "authors";

const authorEndpoints = {
  getAllAuthors: () => {
    return instance.get(`${model}/list`);
  },
};

export default authorEndpoints;
