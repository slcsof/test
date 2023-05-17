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

import { AccountTitle } from "../account/AccountTitle";
import { AthleteTitle } from "../athlete/AthleteTitle";
import { SponsorTitle } from "../sponsor/SponsorTitle";
import { TeamTitle } from "../team/TeamTitle";
import { UserTitle } from "../user/UserTitle";

export const CompetitionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="accounts.id"
          reference="Account"
          label="Accounts"
        >
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="athlete"
          reference="Athlete"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AthleteTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="sponsors"
          reference="Sponsor"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SponsorTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="team"
          reference="Team"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TeamTitle} />
        </ReferenceArrayInput>
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
