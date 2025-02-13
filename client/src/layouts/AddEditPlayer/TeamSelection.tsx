import { usePlayerTrackerContext } from "../../context/PlayerTrackerContext";
import { useToggle } from "../../hooks/useToggle";
import MinimalButton from "../../components/MinimalButton";
import {
  StyledTeamSelection,
  TabsWrapper,
  TeamButtonWrapper,
  TeamButton,
} from "./StyledComponents";

interface _props {
  onChange: (team: string) => void;
  selectedTeam?: string;
}

export default function TeamSelection({ onChange, selectedTeam }: _props) {
  const { players } = usePlayerTrackerContext();
  const existingTeams = players.map((p) => p.team ?? "Unnamed Team") ?? [];
  const noExistingTeams = existingTeams.length === 0;

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
          Join Existing Team
        </MinimalButton>
        <MinimalButton onClick={showCustomNameInput}>
          Make A New Team
        </MinimalButton>
      </TabsWrapper>

      {showExistingTeams ? (
        <TeamButtonWrapper>
          {existingTeams.map((team) => {
            const className = team === selectedTeam ? "selected" : "";
            return (
              <TeamButton className={className} onClick={() => onChange(team)}>
                {team}
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
