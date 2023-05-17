/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { TeamService } from "../team.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TeamCreateInput } from "./TeamCreateInput";
import { TeamWhereInput } from "./TeamWhereInput";
import { TeamWhereUniqueInput } from "./TeamWhereUniqueInput";
import { TeamFindManyArgs } from "./TeamFindManyArgs";
import { TeamUpdateInput } from "./TeamUpdateInput";
import { Team } from "./Team";
import { AthleteFindManyArgs } from "../../athlete/base/AthleteFindManyArgs";
import { Athlete } from "../../athlete/base/Athlete";
import { AthleteWhereUniqueInput } from "../../athlete/base/AthleteWhereUniqueInput";
import { CompetitionFindManyArgs } from "../../competition/base/CompetitionFindManyArgs";
import { Competition } from "../../competition/base/Competition";
import { CompetitionWhereUniqueInput } from "../../competition/base/CompetitionWhereUniqueInput";
import { SponsorFindManyArgs } from "../../sponsor/base/SponsorFindManyArgs";
import { Sponsor } from "../../sponsor/base/Sponsor";
import { SponsorWhereUniqueInput } from "../../sponsor/base/SponsorWhereUniqueInput";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TeamControllerBase {
  constructor(
    protected readonly service: TeamService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Team })
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: TeamCreateInput): Promise<Team> {
    return await this.service.create({
      data: {
        ...data,

        accounts: {
          connect: data.accounts,
        },
      },
      select: {
        accounts: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Team] })
  @ApiNestedQuery(TeamFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Team[]> {
    const args = plainToClass(TeamFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        accounts: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Team })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: TeamWhereUniqueInput
  ): Promise<Team | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        accounts: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Team })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() data: TeamUpdateInput
  ): Promise<Team | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          accounts: {
            connect: data.accounts,
          },
        },
        select: {
          accounts: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Team })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: TeamWhereUniqueInput
  ): Promise<Team | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          accounts: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/athlete")
  @ApiNestedQuery(AthleteFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Athlete",
    action: "read",
    possession: "any",
  })
  async findManyAthlete(
    @common.Req() request: Request,
    @common.Param() params: TeamWhereUniqueInput
  ): Promise<Athlete[]> {
    const query = plainToClass(AthleteFindManyArgs, request.query);
    const results = await this.service.findAthlete(params.id, {
      ...query,
      select: {
        accounts: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        starts: true,
        updatedAt: true,
        votes: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/athlete")
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "update",
    possession: "any",
  })
  async connectAthlete(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: AthleteWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      athlete: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/athlete")
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "update",
    possession: "any",
  })
  async updateAthlete(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: AthleteWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      athlete: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/athlete")
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "update",
    possession: "any",
  })
  async disconnectAthlete(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: AthleteWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      athlete: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/competitions")
  @ApiNestedQuery(CompetitionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Competition",
    action: "read",
    possession: "any",
  })
  async findManyCompetitions(
    @common.Req() request: Request,
    @common.Param() params: TeamWhereUniqueInput
  ): Promise<Competition[]> {
    const query = plainToClass(CompetitionFindManyArgs, request.query);
    const results = await this.service.findCompetitions(params.id, {
      ...query,
      select: {
        accounts: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/competitions")
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "update",
    possession: "any",
  })
  async connectCompetitions(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: CompetitionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      competitions: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/competitions")
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "update",
    possession: "any",
  })
  async updateCompetitions(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: CompetitionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      competitions: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/competitions")
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "update",
    possession: "any",
  })
  async disconnectCompetitions(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: CompetitionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      competitions: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/sponsors")
  @ApiNestedQuery(SponsorFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Sponsor",
    action: "read",
    possession: "any",
  })
  async findManySponsors(
    @common.Req() request: Request,
    @common.Param() params: TeamWhereUniqueInput
  ): Promise<Sponsor[]> {
    const query = plainToClass(SponsorFindManyArgs, request.query);
    const results = await this.service.findSponsors(params.id, {
      ...query,
      select: {
        athlete: {
          select: {
            id: true,
          },
        },

        competition: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        team: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/sponsors")
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "update",
    possession: "any",
  })
  async connectSponsors(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: SponsorWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sponsors: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/sponsors")
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "update",
    possession: "any",
  })
  async updateSponsors(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: SponsorWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sponsors: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/sponsors")
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "update",
    possession: "any",
  })
  async disconnectSponsors(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: SponsorWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sponsors: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/users")
  @ApiNestedQuery(UserFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async findManyUsers(
    @common.Req() request: Request,
    @common.Param() params: TeamWhereUniqueInput
  ): Promise<User[]> {
    const query = plainToClass(UserFindManyArgs, request.query);
    const results = await this.service.findUsers(params.id, {
      ...query,
      select: {
        athlete: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        firstName: true,
        id: true,
        lastName: true,
        roles: true,
        starts: true,

        team: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        username: true,
        vote: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/users")
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "update",
    possession: "any",
  })
  async connectUsers(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/users")
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "update",
    possession: "any",
  })
  async updateUsers(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/users")
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "update",
    possession: "any",
  })
  async disconnectUsers(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
