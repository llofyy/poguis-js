import "dotenv/config";
import RiotApi from "../lib/riot-api";
import { riotSummoner } from "../mock";

describe("Riot Api", () => {
  let riotApi;

  beforeEach(() => {
    riotApi = new RiotApi(process.env.token, "br1");
  });

  describe("Summoner", () => {
    it("should return summoner info by summoner name", async () => {
      const getSummonerByName = await riotApi.getSummonerByName(
        riotSummoner.name
      );

      expect(getSummonerByName.id).toEqual(riotSummoner.id);
    });

    it("should return summoner info by account id", async () => {
      const getSummonerByAccountId = await riotApi.getSummonerByAccountId(
        riotSummoner.accountId
      );

      expect(getSummonerByAccountId.id).toEqual(riotSummoner.id);
    });
  });
});
