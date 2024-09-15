import { SslCommerzPayment } from "sslcommerz";

if (!process.env.SSL_STORE_ID || !process.env.SSL_SECRET_KEY) {
  throw new Error("SSL_STORE_ID and SSL_SECRET_KEY are required");
}

const storeId = process.env.SSL_STORE_ID;
const storePassword = process.env.SSL_SECRET_KEY;
const live = process.env.NODE_ENV === "production";

export const sslcommerz = new SslCommerzPayment(storeId, storePassword, live);
