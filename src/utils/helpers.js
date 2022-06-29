const helpers = {
  formatDate(date) {
    let formattedDate = new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      year: "numeric",
      month: "short",
    });
    return formattedDate;
  },

  getTime(date) {
    let formattedDate = new Date(date).toLocaleString("en-US", {
      hour: "numeric",
      hour12: true,
    });
    return formattedDate;
  },

  filterFavoriteEpisodes(schedule, favs) {
    let favEpisodes = schedule.filter((schtv) => {
      let showIsFav = favs.find((fav) => {
        let airdate = new Date(schtv.airstamp);
        return (
          fav.show.id === schtv._embedded.show.id &&
          airdate >= new Date(Date.now())
        );
      });
      if (showIsFav) return true;
      else return false;
    });

    return favEpisodes;
  },

  renewSchedule(schedule) {
    let length = schedule.length;

    if (length < 1) return true;

    let lastDate = new Date(schedule[length - 1].airstamp);
    if (lastDate < new Date(Date.now())) return true;

    return false;
  },

  getUpcomingEpisodes(favEpisodes) {
    let episodes = [...favEpisodes];
    let nextEpisodes = [];

    if (episodes.length > 0) {
      episodes = episodes.sort(function (a, b) {
        return new Date(b.airstamp) + new Date(a.airstamp);
      });

      for (let episode of episodes) {
        let episodeIsAdded =
          nextEpisodes.findIndex(
            (item) => episode._embedded.show.id === item._embedded.show.id
          ) > -1;
        if (!episodeIsAdded) {
          nextEpisodes.push(episode);
        }
      }
    }

    return nextEpisodes;
  },
};

export default helpers;
