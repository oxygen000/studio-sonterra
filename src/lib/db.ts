// src/lib/dbConnect.ts
import mongoose, { Mongoose } from 'mongoose';

const MONGO_URL = process.env.MONGO_URL as string;

if (!MONGO_URL) {
  throw new Error('Please define the MONGO_URL environment variable');
}

// Define a type for the global mongoose cache object
interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// Use the appropriate type for the global object, avoiding 'any'
let cached: MongooseCache = (global as { mongoose?: MongooseCache }).mongoose;

if (!cached) {
  cached = (global as { mongoose?: MongooseCache }).mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  // If the connection is already established, return the cached connection
  if (cached.conn) {
    return cached.conn;
  }

  // If the connection is not established, create a new one
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGO_URL, opts).then((mongoose) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
