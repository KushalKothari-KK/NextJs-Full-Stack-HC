/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI:
      "mongodb+srv://Kush122:<password>@cluster0.tbw9awi.mongodb.net/nextJDatabase?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig;
