const config = {};

config.development = {
  name: 'development',
  httpPort: 8080,
  httpsPort: 8081,
  database: 'mongodb://tamal:reddit2@ds119930.mlab.com:19930/reddit-clone-20',
  secret: 'coolcake'
};

config.production = {
  name: 'production',
  httpPort: 8080,
  httpsPort: 443,
  database: 'mongodb://127.0.0.1:27017/sports-nerd-1',
  secret: 'whateverIlike'
};

// Change before deploying
let envToExport = config.production;

module.exports = envToExport;
