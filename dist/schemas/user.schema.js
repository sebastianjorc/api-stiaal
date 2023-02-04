"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserSchema = void 0;
const zod_1 = require("zod");
exports.createUserSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        avatarPath: (0, zod_1.string)({
            required_error: 'AvatarPath is required'
        }),
        username: (0, zod_1.string)({
            required_error: 'Username is required'
        }),
        password: (0, zod_1.string)({
            required_error: 'Password is required'
        }).min(6, 'Password too short - should be minimum 6 chars'),
        passwordConfirmation: (0, zod_1.string)({
            required_error: 'passwordConfirmation is required'
        }),
        email: (0, zod_1.string)({
            required_error: 'Email is required'
        }).email('Not a valid email')
    }).refine((data) => data.password === data.passwordConfirmation, {
        message: 'Passwords do not match',
        path: ['passwordConfirmation']
    })
});
//export type GetAllUser = TypeOf<typeof createUserSchema>;
//# sourceMappingURL=user.schema.js.map