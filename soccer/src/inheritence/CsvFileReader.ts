import fs from "fs";

export abstract class CsvFileReader<T> {
  public data: T[] = [];

  constructor(public fileLocation: string) {}

  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.fileLocation, {
        encoding: "utf-8"
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map(this.mapRow);
  }
}
