import fs from "node:fs";

interface SaveFileUseCase {
  execute: ({ fileContent, filePath, fileName }: Options) => boolean;
}

interface Options {
  fileContent: string;
  filePath?: string;
  fileName?: string;
}

export class SaveFile implements SaveFileUseCase {
  constructor /**
   * repository: StorageRepository
   */() {}

  execute({ fileContent, filePath = "outputs", fileName = "table" }: Options) {
    try {
      fs.mkdirSync(filePath, { recursive: true });
      fs.writeFileSync(`${filePath}/${fileName}.txt`, fileContent);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
