import mongoose from "mongoose";

const password = process.env.MONGODB_PASS

export const ConnectDB = async () => {
    await mongoose.connect(`mongodb+srv://elnobrianardi:${password}@cluster0.q0kmz.mongodb.net/blog-app`)
    console.log('DB Connected')
}