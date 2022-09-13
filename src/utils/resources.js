const url = process.env.REACT_APP_APIURL;

const tvMaze = {
  async search(query) {
    try {
      let results = await fetch(`${url}/search/shows?q=${query}`);
      let shows = await results.json();
      return shows;
    } catch (error) {
      throw error.message;
    }
  },

  async getEpisode(id) {
    try {
      let results = await fetch(`${url}/episodes/${id}`);
      let episode = await results.json();
      return episode;
    } catch (error) {
      throw error.message;
    }
  },

  async getFullSchedule() {
    try {
      let response = await fetch(`${url}/schedule/full`, {
        cache: "default",
      });

      let schedule = await response.json();
      return schedule;
    } catch (error) {
      throw error.message;
    }
  },

  async getEpisodesByDate(date) {
    try {
      let response = await fetch(`${url}/schedule/web?date=${date}`, {
        cache: "default",
      });

      let episodeList = await response.json();

      return episodeList;
    } catch (error) {
      throw error.message;
      
    }
  },
};

export default tvMaze;
