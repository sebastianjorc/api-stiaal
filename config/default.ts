// config npm docs
import dotenv from 'dotenv';
dotenv.config();

export default {
  port: 9000,
  dbUri: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@stiaalcluster.6h9tltk.mongodb.net/StiaalDB?retryWrites=true&w=majority`,
  saltWorkFactor: 10,
  accessTokenTtl: '15m',
  refreshTokenTtl: '1y',
  publicKey: `-----BEGIN RSA PRIVATE KEY-----MIICWwIBAAKBgHxE3hxoytBcyaNn7oiqId2U25BA8mb7CkrJKUza9RfcgR7EBQSCX6BsrQgeE1BbKIEYd74F6LaOK6a8vCDIwGRMbZZtalvI6xvzXHY2W5BPjYnGdDgMD6jfJAkGYDadL9HTqA163wqDdfF8sEwPD+ouGKRAaVSl4EsABdl+miKRAgMBAAECgYAh/pTkIKaaqUdftCbErAXnn7kQlTO6iCIgozbxF1TE2kVYLTdSLHgMYq5S8idGbCmAZzkaenNWvT2jty2fqks2vjrUwPJawrtNCOkQwe7PAr2kYlp0dHVhR+k2Y2crssUATjaRUM8Cqx9z6zee5XpLd5f5DhzjkJPeNLf2t9JvgQJBAPVap3+PAF0a7Bs0d+1bBu/2o0ClZDSru+uciXDHrWSXj6A2eWnotK7zaQaJCxqv3xW2o69/6pQAdicTB9iq/O0CQQCBqTk98rjoINcGGw+bJJ8OTViHbH0J2xrMT6lxTdbfe1A0t2HtFn/zx6ijObrFLeF8obxlMHHCfUOlkaucb6u1AkEAw0n48GseWv1G2RCWNHKzvuSNZLNAYzweQ5dBPmdw+BQ62ccCNO5ogqhz/COwlvlNk7bf6pziVhNX+BoJsMfIsQJAQPbMm2E1i/iIQ6LjWtQqbTwLky6kJ4AEGUIAn6hkdGyQbxlCk0umqDntIHsYPRsT0yImBn0TQmMItbgax7Kb0QJACO0SzHmOl+9SfF4DgdrInS91XRV1i3HMX84GFWtkZxlnrzzznYup/AV8i9hM9gDPEDxsAioG94jeMTm5wox3+Q== -----END RSA PRIVATE KEY-----`,
  privateKey: process.env.PRIVATE_KEY
};
