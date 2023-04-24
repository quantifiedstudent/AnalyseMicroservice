import * as fs from "fs";


export default function GetPrivateToken(): string {
    try {
      const token = fs.readFileSync("./src/PrivateToken.txt", "utf-8");
      return token;
    } catch (err) {
      throw err;
    }
  }