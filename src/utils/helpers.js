const helpers = {
  formatDate(date){
        let formattedDate = new Date(date).toLocaleDateString("en-us", {
          day: "numeric",
          year: "numeric",
          month: "short",
        });
        return formattedDate;
  }
};

export default helpers;
