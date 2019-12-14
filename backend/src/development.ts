import {databaseConnection} from "./configuration/database";
import {app} from "./server";

const PORT: number = Number(process.env.PORT) || 3001;

databaseConnection
    .then(() => app.listen(PORT))
    .catch(console.error);

console.log('Server running on port 3001');