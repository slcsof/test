import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AthleteTitle } from "../athlete/AthleteTitle";
import { CompetitionTitle } from "../competition/CompetitionTitle";
import { TeamTitle } from "../team/TeamTitle";
import { UserTitle } from "../user/UserTitle";

export const SponsorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="athlete.id" reference="Athlete" label="Athlete">
          <SelectInput optionText={AthleteTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="competition.id"
          reference="Competition"
          label="Competition"
        >
          <SelectInput optionText={CompetitionTitle} />
        </ReferenceInput>
        <ReferenceInput source="team.id" reference="Team" label="Team">
          <SelectInput optionText={TeamTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="user"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
