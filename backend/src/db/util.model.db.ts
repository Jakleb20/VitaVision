import mongoose, {mongo} from "mongoose"

const DB_URL = "mongodb+srv://jakleb20:Oywnmc5qjTs30SFE@vitavision.xdk6caz.mongodb.net/?retryWrites=true&w=majority&appName=VitaVision";

export const connectDB = async () => {
    await mongoose.connect(DB_URL).then( () => {
        console.log("### connected to mongoose db!");
    })
}