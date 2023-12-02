import { Pool, QueryResult } from 'pg';
import logger from '@/utils/logger';

type QueryReducerArray = [string, any[], number];

const pool = new Pool({
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: 5432,
    connectionTimeoutMillis: 2000,
    idleTimeoutMillis: 2000,
    query_timeout: 2000,
    statement_timeout: 2000,
});

/**
 * Gets a query with a named parameters and converts it
 * in a format expected from the pg library - $param with array args
 * @param parameterizedSql: the named query
 * @param params: object with the named params
 * @returns values: array of values
 * @returns text: the modified sql query as the pg library expects it 
 */
const queryConvert = (parameterizedSql: string, params: any) => {
    const [text, values] = Object.entries(params).reduce(
        ([sql, array, index], [key, value]) => [sql.replace(`:${key}`, `$${index}`), [...array, value], index + 1] as QueryReducerArray,
        [parameterizedSql, [], 1] as QueryReducerArray
    );
    return { text, values };
}

/**
 * Accepts a query along with named parameters.
 * Tracks the performance of every sql query and logs it.
 * @returns isEmpty: is there a result from the query?
 * @returns response: the query rows. 
 */
export const dbQuery = async (sqlQuery: string, args: object) => {
    const start = Date.now();
    const connection = await pool.connect();
    let result: QueryResult;

    try {
        const { text, values } = queryConvert(sqlQuery, args);
        result = await connection.query(text, values);
    } finally {
        connection.release();
    }

    const response: any[] = result.rows;
    const isEmpty = response.length === 0;

    const duration = Date.now() - start + 'ms';
    logger.info('Executed DB query', { sqlQuery, duration, rows: result.rowCount })

    return {
        response,
        isEmpty
    }
}