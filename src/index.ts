import mongoose from "mongoose";
import { PORT, mongoDB, InterfaceMongoDB } from "./constants";
import * as serverService from "./services/server.service";
const { username, password, clasterInfo } = mongoDB as InterfaceMongoDB;

(async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${username}:${password}@${clasterInfo}.mongodb.net/managerApp`
    );
    serverService.server.listen(PORT, function () {
      console.log("Server is running...");
    });
  } catch (error) {
    console.log(error);
  }
})();

process.on("SIGINT", async () => {
  await mongoose.disconnect();
  process.exit();
});
