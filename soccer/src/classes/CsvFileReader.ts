import fs from "fs";

export class CsvFileReader {
  public data: string[][] = [];

  constructor(public fileLocation: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.fileLocation, {
        encoding: "utf-8"
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      });
  }
}
