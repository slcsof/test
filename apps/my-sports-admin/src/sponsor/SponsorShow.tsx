import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { PLAYER_TITLE_FIELD } from "../player/PlayerTitle";
import { COMPETITION_TITLE_FIELD } from "../competition/CompetitionTitle";
import { TEAM_TITLE_FIELD } from "../team/TeamTitle";

export const SponsorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Athlete" source="player.id" reference="Player">
          <TextField source={PLAYER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Competition"
          source="competition.id"
          reference="Competition"
        >
          <TextField source={COMPETITION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Team" source="team.id" reference="Team">
          <TextField source={TEAM_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
