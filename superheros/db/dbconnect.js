import mongoose from "mongoose";

const connection = {};

async function dbConnect() {
  // if connected as get 1 then return directly
  if (connection.isConnected) {
    return;
  }
  const db = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  connection.isConnected = db.connections[0].readyState;
  // readyState property of mongoose
}

export default dbConnect;
