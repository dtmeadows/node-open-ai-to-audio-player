import { promises as fs } from "fs";
import path from "path";
import os from "os";
export const withTempFile = (fn: {
  (speechFile: string): Promise<void>;
  (arg0: string): any;
}) => withTempDir((dir) => fn(path.join(dir, "file")));

export const withTempDir = async (fn: {
  (dir: any): Promise<void>;
  (arg0: string): any;
}) => {
  const dir = await fs.mkdtemp((await fs.realpath(os.tmpdir())) + path.sep);
  try {
    return await fn(dir);
  } finally {
    fs.rm(dir, { recursive: true });
  }
};
