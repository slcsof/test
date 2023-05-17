import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AthleteService } from "./athlete.service";
import { AthleteControllerBase } from "./base/athlete.controller.base";

@swagger.ApiTags("athletes")
@common.Controller("athletes")
export class AthleteController extends AthleteControllerBase {
  constructor(
    protected readonly service: AthleteService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
