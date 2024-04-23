module.exports = {
  env: "dev",
  port: 3000,
  mongoose: {
    url: "mongodb+srv://medicalassitant:QR6rbWf03uzYl6I4@cluster0.up0zfdv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  }
};
