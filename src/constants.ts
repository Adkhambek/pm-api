require("dotenv").config();

export interface InterfaceMongoDB {
  username: undefined | string;
  password: undefined | string;
  clasterInfo: string;
}

export const PORT = process.env.PORT || 3000;
export const mongoDB: InterfaceMongoDB = {
  username: process.env.MD_USERNAME,
  password: process.env.MD_PASSWORD,
  clasterInfo: "cluster0.lanoahy",
};
export const SECRET_KEY = "myVerySecretKey-04.05.2022";
