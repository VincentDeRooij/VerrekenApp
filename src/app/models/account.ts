import { User } from "../models/user"; // imports the reference of the user interface

export interface Account
{
    user: User;
    balance: number;
} 