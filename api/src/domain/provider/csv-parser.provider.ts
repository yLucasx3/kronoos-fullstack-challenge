export type OnDataCallback = (rows: Record<string, any>[]) => Promise<void>;
export type OnEndCallback = (currentBatchLength: number) => Promise<void>;

export interface ICSVParserProvider {
  handle(csvBuffer: Buffer, onDataCallback: OnDataCallback): Promise<void>;
}
