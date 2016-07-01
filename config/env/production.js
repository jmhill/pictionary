var env = process.env.NODE_ENV;

module.exports = {
  db: env.MONGODB_URI
}