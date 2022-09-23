import "dotenv/config";
import PoguisJS from "..";
import { riotSummoner } from "../mock";

describe("Poguis", () => {
  let poguis;

  beforeEach(() => {
    const poguisJS = new PoguisJS();
    poguis = poguisJS;
    poguisJS.init(process.env.token, "br1");
  });

  it("should return summoner info by summoner name", async () => {
    const getSummonerByName = await poguis.getSummonerByName(riotSummoner.name);

    expect(getSummonerByName.id).toEqual(riotSummoner.id);
  });

  it("should return summoner info by account id", async () => {
    const getSummonerByAccountId = await poguis.getSummonerByAccountId(
      riotSummoner.accountId
    );

    expect(getSummonerByAccountId.id).toEqual(riotSummoner.id);
  });
});
