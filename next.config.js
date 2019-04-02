const withProgressBar = require('next-progressbar');
const withTypescript = require('@zeit/next-typescript');
let config = {};
config = withProgressBar(config);
config = withTypescript(config);
module.exports = config;
