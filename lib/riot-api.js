import axios from "axios";

export default class RiotApi {
  constructor(token, region) {
    this.token = token;
    this.region = region;
  }

  async getSummonerByName(summonerName) {
    const summoner = await axios
      .get(
        `https://${this.region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`,
        {
          headers: {
            "X-Riot-Token": this.token,
          },
        }
      )
      .then((response) => response.data);

    return summoner;
  }

  async getSummonerByAccountId(accountId) {
    const summoner = await axios
      .get(
        `https://${this.region}.api.riotgames.com/lol/summoner/v4/summoners/by-account/${accountId}`,
        {
          headers: {
            "X-Riot-Token": this.token,
          },
        }
      )
      .then((response) => response.data);

    return summoner;
  }
}
