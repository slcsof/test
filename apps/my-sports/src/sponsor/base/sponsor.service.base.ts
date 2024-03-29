/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Sponsor,
  User,
  Athlete,
  Competition,
  Team,
} from "@prisma/client";

export class SponsorServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SponsorFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SponsorFindManyArgs>
  ): Promise<number> {
    return this.prisma.sponsor.count(args);
  }

  async findMany<T extends Prisma.SponsorFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SponsorFindManyArgs>
  ): Promise<Sponsor[]> {
    return this.prisma.sponsor.findMany(args);
  }
  async findOne<T extends Prisma.SponsorFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SponsorFindUniqueArgs>
  ): Promise<Sponsor | null> {
    return this.prisma.sponsor.findUnique(args);
  }
  async create<T extends Prisma.SponsorCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SponsorCreateArgs>
  ): Promise<Sponsor> {
    return this.prisma.sponsor.create<T>(args);
  }
  async update<T extends Prisma.SponsorUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SponsorUpdateArgs>
  ): Promise<Sponsor> {
    return this.prisma.sponsor.update<T>(args);
  }
  async delete<T extends Prisma.SponsorDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SponsorDeleteArgs>
  ): Promise<Sponsor> {
    return this.prisma.sponsor.delete(args);
  }

  async findUser(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<User[]> {
    return this.prisma.sponsor
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .user(args);
  }

  async getAthlete(parentId: string): Promise<Athlete | null> {
    return this.prisma.sponsor
      .findUnique({
        where: { id: parentId },
      })
      .athlete();
  }

  async getCompetition(parentId: string): Promise<Competition | null> {
    return this.prisma.sponsor
      .findUnique({
        where: { id: parentId },
      })
      .competition();
  }

  async getTeam(parentId: string): Promise<Team | null> {
    return this.prisma.sponsor
      .findUnique({
        where: { id: parentId },
      })
      .team();
  }
}
