import express from "express"
import { connectMongo } from "./src/config/db/mongoConfig.js"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000


app.get("/", (req, res) => {
    res.send("API is running...")
})

app.listen(PORT, () => {
    console.log(`Server is running or port ${PORT}`)
    connectMongo()
})