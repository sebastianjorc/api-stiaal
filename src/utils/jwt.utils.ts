import jwt from 'jsonwebtoken';
import config from 'config';
import dotenv from 'dotenv';
dotenv.config();

const privateKey ="-----BEGIN RSA PRIVATE KEY-----MIICXAIBAAKBgQCqQnYDczpsL09pOdozbDyLYPi39m7RJRtMqxxYVmGaWvcQiYqQdndBSGA0gU4k5vzEaYOjeAChuE32RcLKiG3RExeqm8qKTSgtvqZtRMiB9Yt0qO505wkBG6oXMgn6GVudzPJjbCPEXgl2CU1/zABXXeavcyUJs1OTT1tiTTZv5wIDAQABAoGARHh95V1NvXw5P2QYsF1y68qPu8vLPSjjFa4qtAvpLJ4wheIKa5Z41zQ4HGVz+7s5I/QbEH6OIntwPv5HHBRJtQQkt5JKAFalGi8Sm7CYQrq+qjBdLMoeyS7jO85HTE+fXvW5aESToBHqXmN68daroP8IAS0caaKTm6USYT+In2ECQQD9AR1nCtIa7HShbvfA1+SRPlK1tkRYttTAe0GrpzRzvNmZmpeBfkFWZIkeR4zrizxeBcA3dA9H0EIyHoDlFRw9AkEArEaJkEU7Abswx05HDi2UxrOT9ACyaIWBHcqvR337i8lI8wnMynpDOAfrRK6iUdCvMky1rnxEca2u+b7l0T9K8wJBALysXSnfpumPFjbhEv+LwJcT3AhIoVVrGuNjx4hjy7jXx4pF/+AAsGbl2F9tSkjJb75KGZsBAPgz9Xl8x/COOp0CQFDEHRgzLM/J97to2m0uN3LUnAeoD/xqorbZ4EUPLlBBxN6UeJtwqHTrWYRwrw7WXFyjlAXCor/84myZ79qi5rsCQAQDSZiKI5Ai6fN2cN7bqhwbGFM+fetz/3OSvp3le8S5xxzyv6HtJ6i9wh3eSzyXLuKt4ABc0HRTMS/re1NkDl8=-----END RSA PRIVATE KEY-----";//config.get<string>('privateKey');
const publicKey = config.get<string>('publicKey');

export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
  return jwt.sign(object, privateKey, {
    ...(options && options),
    algorithm: 'RS256'
  });
}

export function verifyJwt(token: string) {
  try {
    const decoded = jwt.verify(token, publicKey);
    return {
      valid: true,
      expired: false,
      decoded
    };
  } catch (e: any) {
    return {
      valid: false,
      expired: e.message === 'jwt expired',
      decoded: null
    };
  }
}
