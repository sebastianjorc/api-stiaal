import { object, string, TypeOf } from 'zod';

export const createUserSchema = object({
  body: object({
    avatarPath: string({
      required_error: 'AvatarPath is required'
    }),
    username: string({
      required_error: 'Username is required'
    }),
    password: string({
      required_error: 'Password is required'
    }).min(6, 'Password too short - should be minimum 6 chars'),
    passwordConfirmation: string({
      required_error: 'passwordConfirmation is required'
    }),
    email: string({
      required_error: 'Email is required'
    }).email('Not a valid email')
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: 'Passwords do not match',
    path: ['passwordConfirmation']
  })
});

export type CreateUserInput = TypeOf<typeof createUserSchema>;
//export type GetAllUser = TypeOf<typeof createUserSchema>;
