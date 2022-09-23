import RiotApi from "./lib/riot-api.js";

export default class PoguisJS {
  token;
  region;
  riotApi;

  init(token, region) {
    this.token = token;
    this.region = region;
    this.riotApi = new RiotApi(token, region);
  }

  async getSummonerByName(summonerName) {
    const summoner = await this.riotApi.getSummonerByName(summonerName);

    return summoner;
  }

  async getSummonerByAccountId(accountId) {
    const summoner = await this.riotApi.getSummonerByAccountId(accountId);

    return summoner;
  }
}
