import {
  ICSVParserProvider,
  ProccessChunkCallback,
} from "@/domain/provider/csv-parser.provider";
import csvParser from "csv-parser";
import { Readable } from "stream";

export class CSVParserProvider implements ICSVParserProvider {
  batch: Record<string, any>[] = [];
  rowCount: number = 0;

  constructor(private batchSize: number) {}

  async handle(
    csvBuffer: Buffer,
    processChunkCallback: ProccessChunkCallback
  ): Promise<void> {
    const stream = Readable.from(csvBuffer)
      .pipe(csvParser())
      .on("data", async (row) => {
        this.batch.push(row);
        this.rowCount++;

        if (this.batch.length === this.batchSize) {
          stream.pause();

          await processChunkCallback(this.batch)
            .then(() => {
              this.batch = [];
              stream.resume();
            })
            .catch((error) => console.error("Error processing batch: ", error));
        }
      })
      .on("end", () => {
        if (this.batch.length > 0) {
          processChunkCallback(this.batch).then(() =>
            console.log(
              "1.CSV processing completed. Total rows processed:",
              this.rowCount
            )
          );
        } else {
          console.log(
            "2.CSV processing completed. Total rows processed:",
            this.rowCount
          );
        }
      })
      .on("error", (error) => console.log("Error processing csv: ", error));
  }
}
