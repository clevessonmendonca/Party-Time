const mongoose = require('mongoose')

async function main() {
    try {
        mongoose.set("strictQuery", true)

        await mongoose.connect(
            "mongodb+srv://clevesson:RS37FFkyv8lsN4Ai@cluster0.4dlb0td.mongodb.net/?retryWrites=true&w=majority"
        )

        console.log("Connected in DB")
    } catch (error) {
        console.error(`Error in DB: ${error}`)
    }
}

module.exports = main