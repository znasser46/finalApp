import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb';

const uri = process.env.MONGO_URI;

//Creates New mongo client with settings.
export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

//Database connection
export async function connectToMongo() {
  try {
    //Connects to the database client
    await client.connect();
    //Pings the database client to confirm connection
    await client.db("admin").command({ ping: 1 });
    //console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
}

