const ElasticSearch = require('elasticsearch');
const { ELASTIC_URL } = require('./utils');

const client = new ElasticSearch.Client({
    hosts: [ELASTIC_URL]
});

module.exports = client;