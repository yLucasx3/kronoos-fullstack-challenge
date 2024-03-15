import { ITransactionRowFromCsvProps } from "@/adapters/dtos/transaction.dto";
import {
  ICSVParserProvider,
  OnDataCallback,
  OnEndCallback,
} from "@/domain/provider/csv-parser.provider";
import csvParser from "csv-parser";
import { Readable } from "stream";

export class CSVParserProvider implements ICSVParserProvider {
  chunkSize: number = 1024 * 1024 * 1; // 100MB;
  currentChunk: number = 1;
  currentChunkSize: number = 0;
  chunkData: Record<string, any>[] = [];

  async handle(
    csvBuffer: Buffer,
    onDataCallback: OnDataCallback
  ): Promise<void> {
    const readableStream = Readable.from(csvBuffer);

    readableStream
      .pipe(csvParser())
      .on("data", async (row) => {
        this.chunkData.push(row);
        this.currentChunkSize += Buffer.byteLength(`${JSON.stringify(row)}\n`);

        if (this.currentChunkSize >= this.chunkSize) {
          console.log(this.currentChunk);
          this.currentChunk++;
          this.currentChunkSize = 0;
          this.chunkData = [];
        }
      })
      .on("end", () => {
        console.log(this.chunkData.length);
        console.log("CSV uploaded with successfully.");
      })
      .on("error", (error) => console.log(error));
  }
}
