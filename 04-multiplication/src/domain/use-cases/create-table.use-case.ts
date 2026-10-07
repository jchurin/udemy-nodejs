interface CreateTableUseCase {
  execute: ({ base, limit }: CreateTableOptions) => string;
}

interface CreateTableOptions {
  base: number;
  limit: number;
}

export class CreateTable implements CreateTableUseCase {
  constructor /**
   * DI - Dependency Injection
   */() {}

  execute({ base, limit }: CreateTableOptions): string {
    let outputMessage = "";
    for (let i = 1; i <= limit; i++) {
      const content = `${base} x ${i} = ${base * i}\n`;
      outputMessage += content;
    }
    return outputMessage;
  }
}
