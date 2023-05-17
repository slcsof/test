/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Account } from "../../account/base/Account";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Athlete } from "../../athlete/base/Athlete";
import { Competition } from "../../competition/base/Competition";
import { Sponsor } from "../../sponsor/base/Sponsor";
import { User } from "../../user/base/User";

@ObjectType()
class Team {
  @ApiProperty({
    required: true,
    type: () => Account,
  })
  @ValidateNested()
  @Type(() => Account)
  accounts?: Account;

  @ApiProperty({
    required: false,
    type: () => [Athlete],
  })
  @ValidateNested()
  @Type(() => Athlete)
  @IsOptional()
  athlete?: Array<Athlete>;

  @ApiProperty({
    required: false,
    type: () => [Competition],
  })
  @ValidateNested()
  @Type(() => Competition)
  @IsOptional()
  competitions?: Array<Competition>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [Sponsor],
  })
  @ValidateNested()
  @Type(() => Sponsor)
  @IsOptional()
  sponsors?: Array<Sponsor>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [User],
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  users?: Array<User>;
}

export { Team as Team };
