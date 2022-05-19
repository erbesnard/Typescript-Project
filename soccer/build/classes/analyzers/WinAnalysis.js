"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinAnalysis = void 0;
const MatchResults_1 = require("../../MatchResults");
class WinAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let teamWin = 0;
        for (let match of matches) {
            if (match[1] === this.team && match[5] === MatchResults_1.MatchResult.HomeWin) {
                teamWin++;
            }
            else if (match[2] === this.team && match[5] === MatchResults_1.MatchResult.AwayWin) {
                teamWin++;
            }
        }
        return `Team ${this.team} has won ${teamWin} matches this season`;
    }
}
exports.WinAnalysis = WinAnalysis;
