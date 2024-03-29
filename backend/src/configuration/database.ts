import 'reflect-metadata';
import {createConnection, Connection, ConnectionOptions} from 'typeorm';
import {join} from 'path';

const parentDir = join(__dirname, '..');

const connectionOpts: ConnectionOptions = {
    type: 'postgres',
    host: process.env.DB_HOST || '127.0.0.1',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'mysecretpassword',
    database: process.env.DB_NAME || 'bars-tracker',
    entities: [
        `${parentDir}/entities/*.ts`,
    ],
    synchronize: true,
};

const connection: Promise<Connection> = createConnection(connectionOpts);

export const databaseConnection = connection;
