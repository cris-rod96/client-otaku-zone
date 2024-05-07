import { instance } from "../base.api";
const model = "animes";

const animeEndpoints = {
  getAllAnimes: () => {
    return instance.get(`${model}/list`);
  },
};

export default animeEndpoints;
