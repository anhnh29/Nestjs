import { IsEmail, IsNotEmpty, IsNumberString } from 'class-validator';

export class CreateEmployee {
  id: number;
  address: string;
  phone: number;
  birthDate: string;
  gender: string;
  @IsEmail()
  email: string;
  @IsNotEmpty()
  fullName: string;
}

export class ValidateParam {
  @IsNumberString()
  id: number;
}
