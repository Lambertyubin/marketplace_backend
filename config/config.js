const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 6500,
  jwtSecret: process.env.JWT_SECRET || "My-topsecret_here",
  mongoUri:
    process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    "mongodb://" +
      (process.env.IP || "localhost") +
      ":" +
      (process.env.MONGO_PORT || "27017") +
      "/mern_marketplace",

  stripe_connect_test_client_id: "My_stripe_connect_test_client",
  stripe_test_secret_key: "My_stripe_test_secret_key",
  stripe_test_api_key: "My_stripe_test_api_key",
};

export default config;
