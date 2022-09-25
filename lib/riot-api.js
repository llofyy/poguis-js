import axios from "axios";
import urls from "./urls.js";

const { summonersUrl } = urls;

export default class RiotApi {
  constructor(token, region) {
    this.token = token;
    this.region = region;
  }

  async getSummonerByName(summonerName) {
    const summoner = await axios
      .get(`https://${this.region}${summonersUrl}/by-name/${summonerName}`, {
        headers: {
          "X-Riot-Token": this.token,
        },
      })
      .then((response) => response.data);

    return summoner;
  }

  async getSummonerByAccountId(accountId) {
    const summoner = await axios
      .get(`https://${this.region}${summonersUrl}/by-account/${accountId}`, {
        headers: {
          "X-Riot-Token": this.token,
        },
      })
      .then((response) => response.data);

    return summoner;
  }

  async getSummonerByPuuid(puuid) {
    const summoner = await axios
      .get(`https://${this.region}${summonersUrl}/by-puuid/${puuid}`, {
        headers: {
          "X-Riot-Token": this.token,
        },
      })
      .then((response) => response.data);

    return summoner;
  }

  async getSummonerById(id) {
    const summoner = await axios
      .get(`https://${this.region}${summonersUrl}/${id}`, {
        headers: {
          "X-Riot-Token": this.token,
        },
      })
      .then((response) => response.data);

    return summoner;
  }
}
