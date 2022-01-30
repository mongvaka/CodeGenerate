import { FormatType } from "./constans";
import fs from "fs";
import { createDirectories } from "./function";
export class CreateFileService {
  constructor() {}
  saveFile(
    dataToWrite: string[],
    formatType: FormatType,
    fileName: string,
    path: string
  ) {
    createDirectories(path);
    const writeStream = fs.createWriteStream(
      `${path}/${fileName}${formatType}`
    );
    dataToWrite.forEach((line) => {
      writeStream.write(`${line}\n`);
    });
    writeStream.on("error", (error) => {
      console.log("Error : ", error);
    });
    writeStream.end();
  }
}
