export type ProccessChunkCallback = (
  rows: Record<string, any>[]
) => Promise<void>;

export interface ICSVParserProvider {
  handle(
    csvBuffer: Buffer,
    processChunkCallback: ProccessChunkCallback
  ): Promise<void>;
}
