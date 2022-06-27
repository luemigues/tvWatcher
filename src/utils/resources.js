import axios from "axios";
const url = process.env.REACT_APP_APIURL;

const tvMaze = {
  async search(query) {
    try {
      let results = await axios.get(`${url}/search/shows?q=${query}`);
      return results.data;
    } catch (error) {
      throw error.message;
    }
  },

  async getEpisode(id) {
    try {
      let results = await axios.get(`${url}/episodes/${id}`);
      return results.data;
    } catch (error) {
      throw error.message;
    }
  },
};

export default tvMaze;
