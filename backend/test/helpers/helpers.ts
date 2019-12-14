import {databaseConnection} from "../../src/configuration/database";

export const clearDb = async () => {
    const connection = await databaseConnection;
    const entities = connection.entityMetadatas;

    for (const entity of entities) {
        const repository = await connection.getRepository(entity.name);
        await repository.query(`DELETE FROM ${entity.tableName};`);
    }
};
