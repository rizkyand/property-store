import {PropertyDTO} from "@/models/dtos/PropertyDTO";
import { Types } from 'mongoose';

export interface UserDTO{
    email:string;
    username:string;
    image:string;
    bookmarks: Types.DocumentArray<PropertyDTO>
}

export type User = UserDTO;