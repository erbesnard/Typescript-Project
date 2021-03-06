import { MatchResult } from "../../MatchResults";
import { MatchData } from "../MatchData";
import { Analyzer } from "../Summary";

export class WinAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let teamWin = 0;
    for (let match of matches) {
      if (match[1] === this.team && match[5] === MatchResult.HomeWin) {
        teamWin++;
      } else if (match[2] === this.team && match[5] === MatchResult.AwayWin) {
        teamWin++;
      }
    }
    return `Team ${this.team} has won ${teamWin} matches this season`;
  }
}
