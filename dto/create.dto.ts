import { IsNumber, IsString, Max, Min } from "class-validator";

export class CreateDto{
  @Min(1)
  @Max(20)
  @IsNumber()
  id: number;
  @IsString()
  todo: string
}