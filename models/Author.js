'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        nameHY: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        books: [{
            type: Schema.Types.ObjectId,
            ref: 'Book'
        }]
    },
    {
        timestamps: true
    }
);

const Author = module.exports = mongoose.model('Author', AuthorSchema);