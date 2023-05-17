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
  Account,
  Competition,
  Athlete,
  Team,
  User,
} from "@prisma/client";

export class AccountServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.AccountFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountFindManyArgs>
  ): Promise<number> {
    return this.prisma.account.count(args);
  }

  async findMany<T extends Prisma.AccountFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountFindManyArgs>
  ): Promise<Account[]> {
    return this.prisma.account.findMany(args);
  }
  async findOne<T extends Prisma.AccountFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountFindUniqueArgs>
  ): Promise<Account | null> {
    return this.prisma.account.findUnique(args);
  }
  async create<T extends Prisma.AccountCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountCreateArgs>
  ): Promise<Account> {
    return this.prisma.account.create<T>(args);
  }
  async update<T extends Prisma.AccountUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountUpdateArgs>
  ): Promise<Account> {
    return this.prisma.account.update<T>(args);
  }
  async delete<T extends Prisma.AccountDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountDeleteArgs>
  ): Promise<Account> {
    return this.prisma.account.delete(args);
  }

  async findCompetition(
    parentId: string,
    args: Prisma.CompetitionFindManyArgs
  ): Promise<Competition[]> {
    return this.prisma.account
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .competition(args);
  }

  async getAthlete(parentId: string): Promise<Athlete | null> {
    return this.prisma.account
      .findUnique({
        where: { id: parentId },
      })
      .athlete();
  }

  async getTeam(parentId: string): Promise<Team | null> {
    return this.prisma.account
      .findUnique({
        where: { id: parentId },
      })
      .team();
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.account
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
