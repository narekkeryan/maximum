'use strict';

const _isEmpty = require('lodash/isEmpty');
const Author = require('./models/Author');

require('./database')();

class Library {
    static async createAuthor(event, context, callback) {
        try {
            const author = await Author.create(JSON.parse(event.body));
            callback(null, { body: author });
        } catch (error) {
            callback(null, { statusCode: 400, body: error })
        }
    }

    static async authors(event, context, callback) {
        const authors = await Author.find({});
        callback(null, { body: authors });
        // TODO: FIND BY PARAM
    }
}

module.exports = Library;
/*

 module.exports.helloWorld = (event, context, callback) => {
 const response = {
 statusCode: 200,
 headers: {
 'Access-Control-Allow-Origin': '*', // Required for CORS support to work
 },
 body: JSON.stringify({
 message: 'Go Serverless v1.0! Your function executed successfully!',
 input: event,
 }),
 };

 callback(null, response);
 };
 */
