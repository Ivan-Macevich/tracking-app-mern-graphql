import mongoose, { mongo } from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    description: {
        type: String,
        required: true
    },
    paymentType: {
        type: String,
        enum: ['CASH', 'CARD'],
        required: true
    },
    category: {
        type: String,
        enum: ['SAVING', "EXPENSE", "INVESTMENT"],
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        default: 'Unknown'
    },
    date: {
        type: Date,
        default: Date.now()
    }
  },
  { timestamps: true }
);

const Transaction = mongoose.model('Transaction', transactionSchema)
export default Transaction