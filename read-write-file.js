const { readFileSync, writeFileSync} = require("fs");

const first = "./content/first.txt";
const second = "./content/second.txt";

const readFirst = readFileSync(`${first}`, "utf8");
const readSecond = readFileSync(`${second}`, "utf8");

writeFileSync(
  "./content/result.txt", 
  `Here is the result: ${readFirst} and ${readSecond} \n`,
  { flag : "a" }
);