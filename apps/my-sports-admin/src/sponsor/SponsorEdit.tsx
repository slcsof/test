import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PlayerTitle } from "../player/PlayerTitle";
import { CompetitionTitle } from "../competition/CompetitionTitle";
import { TeamTitle } from "../team/TeamTitle";
import { UserTitle } from "../user/UserTitle";

export const SponsorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="athlete.id" reference="Player" label="Athlete">
          <SelectInput optionText={PlayerTitle} />
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
    </Edit>
  );
};
