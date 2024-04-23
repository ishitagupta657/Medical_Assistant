module.exports = {
  env: "dev",
  port: 3000,
  mongoose: {
    url: "mongodb+srv://<username>:<password>@cluster0.up0zfdv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  }
};
