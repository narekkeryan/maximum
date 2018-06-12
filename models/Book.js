'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema(
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
        author: {
            type: Schema.Types.ObjectId,
            ref: 'Author'
        },
        genres: [{
            type: Schema.Types.ObjectId,
            ref: 'Genre'
        }],
        publicationDate: {
            type: Date,
            required: true
        },
        haveRead: {
            type: Boolean,
            default: false
        },
        info: {
            type: String,
            trim: true
        }
    },
    {
        timestamps: true
    }
);

const Book = module.exports = mongoose.model('Book', BookSchema);