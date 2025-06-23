"use strict";
// Lecture #138
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
// Using new instance of class
// const csvFileReader = new CsvFileReader('football.csv');
// const matchReader = new MatchReader(csvFileReader);
// const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport());
// Using static method
const matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
const summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
