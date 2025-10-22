import admin from "firebase-admin";
import { readFileSync } from "fs";
import { join } from "path";

const serviceAccount = JSON.parse(
  readFileSync(join(process.cwd(), "./serviceAccountKey.json"))
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const auth = admin.auth();
