'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GenreSchema = new Schema(
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
            type: Schema.Types.Object,
            ref: 'Book'
        }]
    },
    {
        timestamps: true
    }
);