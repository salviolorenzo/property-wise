export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  },
  realtyMole: {
    apiKey: process.env.RAPIDAPI_API_KEY,
    baseUrl: process.env.REALTY_MOLE_API_BASE_URL,
  },
  realtyInUs: {
    apiKey: process.env.RAPIDAPI_API_KEY,
    baseUrl: process.env.REALTY_IN_US_API_BASE_URL,
  },
});
