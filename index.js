const axios = require("axios");

const handleApiCall = () => {
  setInterval(async () => {
    const timestamp = Math.floor(Date.now() / 1000);
    await axios
      .post(
        "https://api.hamsterkombat.io/clicker/tap",
        {
          count: 500,
          availableTaps: 2000,
          timestamp,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer your autorization token here",
          },
        }
      )
      .then(({data}) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, 1000 );// you can add what ever time you want in level 2 every 200 seconds 100 token is getting available to you

};
handleApiCall();
