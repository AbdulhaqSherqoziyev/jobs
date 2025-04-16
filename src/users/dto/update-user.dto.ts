import { IsEmail,  IsOptional } from "class-validator";

export class UpdateUserDto {
@IsOptional()
full_name?:string


@IsOptional()
@IsEmail()
email?:string


@IsOptional()
password?:string
}
