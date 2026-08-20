import mysql from 'mysql2/promise';

// Evita fugas de conexiones en modo desarrollo (Next.js hot-reload)
const globalForDb = globalThis as unknown as { pool: mysql.Pool | undefined };

export const pool = globalForDb.pool ?? mysql.createPool({
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER || 'app_user',
  password: process.env.DB_PASSWORD || 'app_pass',
  database: process.env.DB_NAME || 'app_db',
  waitForConnections: true,
  connectionLimit: 10,      // Suficiente para dev. Aumenta en prod si hay tráfico alto.
  queueLimit: 0,
  timezone: 'Z',            // Fuerza UTC → evita desfases en fechas
});

// En desarrollo, guarda el pool en memoria global para reutilizarlo entre recargas
if (process.env.NODE_ENV !== 'production') {
  globalForDb.pool = pool;
}

export default pool;