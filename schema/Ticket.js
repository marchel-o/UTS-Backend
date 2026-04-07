const mongoose = require('mongoose')

const ticketSchema = mongoose.Schema({
    title: String,
    description: String,
    priority: {
        type: Number,
        enum: [1,2,3],
        default: 3
    }
})

module.exports = mongoose.model("Ticket", ticketSchema)