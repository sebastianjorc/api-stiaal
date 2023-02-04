"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJwt = exports.signJwt = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("config"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const privateKey = "-----BEGIN RSA PRIVATE KEY-----MIICXAIBAAKBgQCqQnYDczpsL09pOdozbDyLYPi39m7RJRtMqxxYVmGaWvcQiYqQdndBSGA0gU4k5vzEaYOjeAChuE32RcLKiG3RExeqm8qKTSgtvqZtRMiB9Yt0qO505wkBG6oXMgn6GVudzPJjbCPEXgl2CU1/zABXXeavcyUJs1OTT1tiTTZv5wIDAQABAoGARHh95V1NvXw5P2QYsF1y68qPu8vLPSjjFa4qtAvpLJ4wheIKa5Z41zQ4HGVz+7s5I/QbEH6OIntwPv5HHBRJtQQkt5JKAFalGi8Sm7CYQrq+qjBdLMoeyS7jO85HTE+fXvW5aESToBHqXmN68daroP8IAS0caaKTm6USYT+In2ECQQD9AR1nCtIa7HShbvfA1+SRPlK1tkRYttTAe0GrpzRzvNmZmpeBfkFWZIkeR4zrizxeBcA3dA9H0EIyHoDlFRw9AkEArEaJkEU7Abswx05HDi2UxrOT9ACyaIWBHcqvR337i8lI8wnMynpDOAfrRK6iUdCvMky1rnxEca2u+b7l0T9K8wJBALysXSnfpumPFjbhEv+LwJcT3AhIoVVrGuNjx4hjy7jXx4pF/+AAsGbl2F9tSkjJb75KGZsBAPgz9Xl8x/COOp0CQFDEHRgzLM/J97to2m0uN3LUnAeoD/xqorbZ4EUPLlBBxN6UeJtwqHTrWYRwrw7WXFyjlAXCor/84myZ79qi5rsCQAQDSZiKI5Ai6fN2cN7bqhwbGFM+fetz/3OSvp3le8S5xxzyv6HtJ6i9wh3eSzyXLuKt4ABc0HRTMS/re1NkDl8=-----END RSA PRIVATE KEY-----"; //config.get<string>('privateKey');
const publicKey = config_1.default.get('publicKey');
function signJwt(object, options) {
    return jsonwebtoken_1.default.sign(object, privateKey, Object.assign(Object.assign({}, (options && options)), { algorithm: 'RS256' }));
}
exports.signJwt = signJwt;
function verifyJwt(token) {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, publicKey);
        return {
            valid: true,
            expired: false,
            decoded
        };
    }
    catch (e) {
        return {
            valid: false,
            expired: e.message === 'jwt expired',
            decoded: null
        };
    }
}
exports.verifyJwt = verifyJwt;
//# sourceMappingURL=jwt.utils.js.map