import mongoose from "mongoose";
import app from "./app";
import config from "./app/config/config";

const main = async () => {
  try {
    console.log("server");
    await mongoose.connect(config.url as string);
    app.listen(config.port, () => {
      console.log("The server is running on port", config.port);
    });
  } catch (error) {
    console.log(error);
  }
};
main();
