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
import { PlayerListRelationFilter } from "../../player/base/PlayerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { SponsorListRelationFilter } from "../../sponsor/base/SponsorListRelationFilter";
import { TeamListRelationFilter } from "../../team/base/TeamListRelationFilter";
import { UserListRelationFilter } from "../../user/base/UserListRelationFilter";

@InputType()
class CompetitionWhereInput {
  @ApiProperty({
    required: false,
    type: () => AccountWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AccountWhereUniqueInput)
  @IsOptional()
  @Field(() => AccountWhereUniqueInput, {
    nullable: true,
  })
  accounts?: AccountWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => PlayerListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PlayerListRelationFilter)
  @IsOptional()
  @Field(() => PlayerListRelationFilter, {
    nullable: true,
  })
  athlete?: PlayerListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => SponsorListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SponsorListRelationFilter)
  @IsOptional()
  @Field(() => SponsorListRelationFilter, {
    nullable: true,
  })
  sponsors?: SponsorListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => TeamListRelationFilter,
  })
  @ValidateNested()
  @Type(() => TeamListRelationFilter)
  @IsOptional()
  @Field(() => TeamListRelationFilter, {
    nullable: true,
  })
  team?: TeamListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => UserListRelationFilter,
  })
  @ValidateNested()
  @Type(() => UserListRelationFilter)
  @IsOptional()
  @Field(() => UserListRelationFilter, {
    nullable: true,
  })
  user?: UserListRelationFilter;
}

export { CompetitionWhereInput as CompetitionWhereInput };
