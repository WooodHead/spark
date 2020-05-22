import "reflect-metadata";
import {Connection, ConnectionManager} from "typeorm";
import {User, Course, UserMeta} from "./entity";

// We have a duplicate config here because of issues with this file accessing the ormconfig.js file. 🤷🏻‍♀️
const connectionManager = new ConnectionManager(); // has issues with loading Connections if we use getConnectionManager
const connection = connectionManager.has("default") ?
    connectionManager.get("default") : connectionManager.create({
      type: "mysql",
      host: process.env.DBHOST,
      port: 3306,
      username: process.env.DBUSER,
      password: process.env.DBPASSWORD,
      database: process.env.DBNAME,
      entities: [
        User,
        Course,
        UserMeta,
      ],
    });


export default async (): Promise<Connection> => {
  try {
    // console.log("isConnected: ", connection.isConnected);
    if (!connection.isConnected) {
      return await connection.connect();
    }
    return connection;
  } catch (error) {
    console.error(`Failed to connect to mysql: \n${error}`);
    throw new Error('Failed to establish MYSQL connection');
  }
};

