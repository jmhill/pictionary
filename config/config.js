/**
 * Config
 * @module
 * 
 * Dynamically retrieves configuration object based on
 * process.env.NODE_ENV
 * 
 * Individual configuration objects are returned from files in
 * /config/env, where the name of the file matches the environment setting
 * (development, production, or test)
 */

module.exports = require('./env/' + process.env.NODE_ENV + '.js');
