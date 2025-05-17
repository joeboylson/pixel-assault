import { usePlayerTrackerContext } from "../../context/PlayerTrackerContext";
import { useToggle } from "../../hooks/useToggle";
import MinimalButton from "../../components/MinimalButton";
import {
  StyledTeamSelection,
  TabsWrapper,
  TeamButtonWrapper,
  TeamButton,
} from "./StyledComponents";
import { uniq } from "lodash";

interface _props {
  onChange: (team: string) => void;
  selectedTeam?: string;
}

export default function TeamSelection({ onChange, selectedTeam }: _props) {
  const {
    players,
    teams: existingTeams,
    isEmpty: noExistingTeams,
  } = usePlayerTrackerContext();

  const {
    disable: showCustomNameInput,
    enable: showExistingTeamsOptions,
    value: showExistingTeams,
  } = useToggle(!noExistingTeams);

  const tabClassName = showExistingTeams ? "highlight-left" : "highlight-right";

  return (
    <StyledTeamSelection>
      <TabsWrapper className={tabClassName}>
        <MinimalButton
          onClick={showExistingTeamsOptions}
          disabled={noExistingTeams}
        >
          Join Team
        </MinimalButton>
        <MinimalButton onClick={showCustomNameInput}>
          Make New Team
        </MinimalButton>
      </TabsWrapper>

      {showExistingTeams ? (
        <TeamButtonWrapper>
          {existingTeams.map((team) => {
            const className = team === selectedTeam ? "selected" : "";
            const playersOnTeam = (players.filter((p) => p.team === team) ?? [])
              .length;

            return (
              <TeamButton className={className} onClick={() => onChange(team)}>
                Join Team {team} ({playersOnTeam} players)
              </TeamButton>
            );
          })}
        </TeamButtonWrapper>
      ) : (
        <input
          type="text"
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter a new team name"
        />
      )}
    </StyledTeamSelection>
  );
}
