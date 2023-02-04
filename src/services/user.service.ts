import { omit } from 'lodash';
import { Error, FilterQuery } from 'mongoose';
import UserModel, { UserDocument, IUserInput } from '../models/user.model';

export async function createUser(input: IUserInput) {
  try {
    const user = await UserModel.create(input); // <--- aquí el error
    return await omit(user.toJSON(), 'password');
  } catch (e: any) {
    console.log(e+"\n\nError en service\n\n");
    throw new Error(e);
  }
}

export async function getAllUsers(){
  try{
    const users = await UserModel.find();
    return await users;
  } catch (e: any) {
    console.log(e+"\n\nError en service.getAllUser()\n\n");
    throw new Error(e);
  }
}

export async function validatePassword({ email, password}: { email: string; password: string;}) {
  const user = await UserModel.findOne({ email });
  if (!user) { return false; }
  const isValid = await user.comparePassword(password);
  if (!isValid) return false;
  return omit(user.toJSON(), 'password');
}

export async function findUser(query: FilterQuery<UserDocument>) {
  return UserModel.findOne(query).lean();
}