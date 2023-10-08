import { IsOptional, IsString, IsUrl, Matches} from "class-validator";

export class CreateUserDto {
  @IsString()
  id: string;

  @IsString()
  login: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsUrl()
  avatar_url: string;

  @IsString()
  @IsUrl()
  url: string;
}
