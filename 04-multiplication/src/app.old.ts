import fs from "node:fs";
import { yarg } from "./config/plugins/args.plugin.js";
// const msg: string = "Hola Mundo";
// console.log(msg);

export const writeFile = () => {
  const { b: base, l: limit, s: show } = yarg;

  let outputMessage: string = "";
  const headerMessage = `
==============================
        Tabla del ${base}
==============================\n
`;

  for (let i = 1; i <= limit; i++) {
    const content = `${base} x ${i} = ${base * i}\n`;
    outputMessage += content;
  }

  outputMessage = headerMessage + outputMessage;

  if (show) {
    console.log(outputMessage);
  }

  const outputPathDir = "outputs";

  fs.mkdirSync(outputPathDir, { recursive: true });
  fs.writeFileSync(`${outputPathDir}/tabla-${base}.txt`, outputMessage);
};

// writeFile();
