// Lecture #138

import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';
import { Summary } from './Summary';
import { WinsAnalysis } from './WinsAnalysis';

// Using new instance of class
// const csvFileReader = new CsvFileReader('football.csv');
// const matchReader = new MatchReader(csvFileReader);

// const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport());

// Using static method
const matchReader = MatchReader.fromCsv('football.csv')
const summary = Summary.winsAnalysisWithHtmlReport('Man United');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);