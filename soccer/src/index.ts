import { MatchReader } from "./classes/MatchReader";
import { Summary } from "./classes/Summary";
import { ConsoleReport } from "./classes/outputTargets/ConsoleReport";
import { WinAnalysis } from "./classes/analyzers/WinAnalysis";

const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load();

const summary = new Summary(new WinAnalysis("Man United"), new ConsoleReport());

summary.buildAndPrintReport(matchReader.matches);

const summaryHtml = Summary.winsAnalysisWithHtmlReport("Man United");
summaryHtml.buildAndPrintReport(matchReader.matches);
