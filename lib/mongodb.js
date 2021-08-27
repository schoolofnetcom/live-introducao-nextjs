import mongoose from 'mongoose';

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}


async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }

    cached.promise = mongoose.connect("mongodb://root:root@localhost:27017/next_app?authSource=admin", opts).then((mongoose) => {
      return mongoose
    })
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;


// import mongoose from 'mongoose';

// async function dbConnect() {
//     return mongoose.connect('mongodb://root:root@localhost:27017/next_app?authSource=admin', {
//         useNewUrlParser: true
//     });
// };

// export default dbConnect;