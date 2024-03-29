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
import { AthleteCreateNestedManyWithoutCompetitionsInput } from "./AthleteCreateNestedManyWithoutCompetitionsInput";
import { SponsorCreateNestedManyWithoutCompetitionsInput } from "./SponsorCreateNestedManyWithoutCompetitionsInput";
import { TeamCreateNestedManyWithoutCompetitionsInput } from "./TeamCreateNestedManyWithoutCompetitionsInput";
import { UserCreateNestedManyWithoutCompetitionsInput } from "./UserCreateNestedManyWithoutCompetitionsInput";

@InputType()
class CompetitionCreateInput {
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
    type: () => AthleteCreateNestedManyWithoutCompetitionsInput,
  })
  @ValidateNested()
  @Type(() => AthleteCreateNestedManyWithoutCompetitionsInput)
  @IsOptional()
  @Field(() => AthleteCreateNestedManyWithoutCompetitionsInput, {
    nullable: true,
  })
  athlete?: AthleteCreateNestedManyWithoutCompetitionsInput;

  @ApiProperty({
    required: false,
    type: () => SponsorCreateNestedManyWithoutCompetitionsInput,
  })
  @ValidateNested()
  @Type(() => SponsorCreateNestedManyWithoutCompetitionsInput)
  @IsOptional()
  @Field(() => SponsorCreateNestedManyWithoutCompetitionsInput, {
    nullable: true,
  })
  sponsors?: SponsorCreateNestedManyWithoutCompetitionsInput;

  @ApiProperty({
    required: false,
    type: () => TeamCreateNestedManyWithoutCompetitionsInput,
  })
  @ValidateNested()
  @Type(() => TeamCreateNestedManyWithoutCompetitionsInput)
  @IsOptional()
  @Field(() => TeamCreateNestedManyWithoutCompetitionsInput, {
    nullable: true,
  })
  team?: TeamCreateNestedManyWithoutCompetitionsInput;

  @ApiProperty({
    required: false,
    type: () => UserCreateNestedManyWithoutCompetitionsInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutCompetitionsInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutCompetitionsInput, {
    nullable: true,
  })
  user?: UserCreateNestedManyWithoutCompetitionsInput;
}

export { CompetitionCreateInput as CompetitionCreateInput };
