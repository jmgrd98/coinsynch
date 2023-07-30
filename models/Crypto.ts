import {Schema, model, models} from "mongoose";

const CryptoSchema = new Schema({
    id: {
        type: String,
        unique: true
    },
    rank: {
        type: Number,
        unique: true,
    },
    symbol: {
        type: String,
        unique: true,
    },
    name: {
        type: String,
    },
    supply: {
        type: Number,
    },
    maxSupply: {
        type: Number,
    },
    marketCapUsd: {
        type: Number,
    },
    volumeUsd24Hr: {
        type: Number,
    },
    priceUsd: {
        type: Number,
    },
    changePercent24Hr: {
        type: Number,
    },
    vwap24Hr: {
        type: Number,
    },
    explorer: {
        type: String,
    }
});


const Crypto = models.Crypto || model("Crypto", CryptoSchema);

export default Crypto;