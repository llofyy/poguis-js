import RiotApi from "./lib/riot-api.js";

export default class PoguisJS {
  riotApi;

  init(token, region) {
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

  async getSummonerByPuuid(puuid) {
    const summoner = await this.riotApi.getSummonerByPuuid(puuid);

    return summoner;
  }

  async getSummonerById(id) {
    const summoner = await this.riotApi.getSummonerById(id);

    return summoner;
  }
}
