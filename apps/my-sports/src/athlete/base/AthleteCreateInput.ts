/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AccountWhereUniqueInput } from "../../account/base/AccountWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { CompetitionCreateNestedManyWithoutAthletesInput } from "./CompetitionCreateNestedManyWithoutAthletesInput";
import { SponsorCreateNestedManyWithoutAthletesInput } from "./SponsorCreateNestedManyWithoutAthletesInput";
import { IsJSONValue } from "@app/custom-validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { TeamCreateNestedManyWithoutAthletesInput } from "./TeamCreateNestedManyWithoutAthletesInput";
import { UserCreateNestedManyWithoutAthletesInput } from "./UserCreateNestedManyWithoutAthletesInput";

@InputType()
class AthleteCreateInput {
  @ApiProperty({
    required: true,
    type: () => AccountWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AccountWhereUniqueInput)
  @Field(() => AccountWhereUniqueInput)
  accounts!: AccountWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => CompetitionCreateNestedManyWithoutAthletesInput,
  })
  @ValidateNested()
  @Type(() => CompetitionCreateNestedManyWithoutAthletesInput)
  @IsOptional()
  @Field(() => CompetitionCreateNestedManyWithoutAthletesInput, {
    nullable: true,
  })
  competitions?: CompetitionCreateNestedManyWithoutAthletesInput;

  @ApiProperty({
    required: false,
    type: () => SponsorCreateNestedManyWithoutAthletesInput,
  })
  @ValidateNested()
  @Type(() => SponsorCreateNestedManyWithoutAthletesInput)
  @IsOptional()
  @Field(() => SponsorCreateNestedManyWithoutAthletesInput, {
    nullable: true,
  })
  sponsors?: SponsorCreateNestedManyWithoutAthletesInput;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  starts?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => TeamCreateNestedManyWithoutAthletesInput,
  })
  @ValidateNested()
  @Type(() => TeamCreateNestedManyWithoutAthletesInput)
  @IsOptional()
  @Field(() => TeamCreateNestedManyWithoutAthletesInput, {
    nullable: true,
  })
  teams?: TeamCreateNestedManyWithoutAthletesInput;

  @ApiProperty({
    required: false,
    type: () => UserCreateNestedManyWithoutAthletesInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutAthletesInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutAthletesInput, {
    nullable: true,
  })
  users?: UserCreateNestedManyWithoutAthletesInput;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  votes?: InputJsonValue;
}

export { AthleteCreateInput as AthleteCreateInput };
