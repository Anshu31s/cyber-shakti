require('dotenv').config();
const url = process.env.DATABASE_URL;
if (url) {
  console.log('DATABASE_URL length:', url.length);
  console.log('DATABASE_URL start (hex):', Buffer.from(url.slice(0, 10)).toString('hex'));
  console.log('DATABASE_URL end (hex):', Buffer.from(url.slice(-10)).toString('hex'));
}
const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');
const { PrismaClient } = require('./lib/prisma-client');

async function main() {
  console.log('--- Database Connection Test (Driver Adapter) ---');
  if (!process.env.DATABASE_URL) {
    console.error('ERROR: DATABASE_URL is missing!');
    return;
  }

  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });

  try {
    console.log('Testing connection...');
    const result = await prisma.$queryRaw`SELECT 1 as connected`;
    console.log('Success! Result:', result);
  } catch (err) {
    console.error('Connection failed:', err);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

main();
