import 'dotenv/config'
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from './prisma-client'

const prismaClientSingleton = () => {
  console.log('--- Initializing Prisma Client with Driver Adapter ---');
  if (!process.env.DATABASE_URL) {
    console.warn('WARNING: DATABASE_URL is not defined in process.env!');
  }
  
  const pool = new Pool({ connectionString: process.env.DATABASE_URL })
  const adapter = new PrismaPg(pool)
  return new PrismaClient({ adapter })
}

const globalForPrisma = globalThis

const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
