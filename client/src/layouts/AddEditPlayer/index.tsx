import { isEmpty } from "lodash";
import { Faction, Player } from "../../types";
import {
  FactionButton,
  FactionButtonWrapper,
  StyledAddEditPlayer,
} from "./StyledComponents";
import { useCallback, useState } from "react";
import Button from "../../components/Button";
import { v4 as uuidv4 } from "uuid";
import { usePlayerTrackerContext } from "../../context/PlayerTrackerContext";
import { useGetAllWikiItemsByType } from "../../hooks/useGetAllWikiItemsByType";
import { useGetAllWikiItems } from "../../hooks/useGetAllWikiItems";
import MinimalButton from "../../components/MinimalButton";
import { SanityDocument } from "@sanity/client";
import TeamSelection from "./TeamSelection";

interface _props {
  player?: Player;
  handleAfterSubmit: () => void;
}

export default function AddEditPlayer({ player, handleAfterSubmit }: _props) {
  const { documents: factions } = useGetAllWikiItemsByType("faction");

  const [name, setName] = useState<string>();
  const [team, setTeam] = useState<string>();
  const [faction, setFaction] = useState<Faction>();

  const { addNewPlayer } = usePlayerTrackerContext();

  const isNew = player === undefined;

  const handleSave = useCallback(() => {
    if (isEmpty(name) || name === undefined)
      return alert("Please enter a player name");
    if (isEmpty(team) || team === undefined)
      return alert("Please enter a new team name or select an existing team");
    if (isEmpty(faction) || faction === undefined)
      return alert("Please choose a faction");

    const newPlayer: Player = {
      goldAmount: 0,
      healthAmount: 100,
      id: uuidv4(),
      name,
      team,
      faction,
    };

    addNewPlayer(newPlayer);
    handleAfterSubmit();
  }, [name, team, faction]);

  return (
    <StyledAddEditPlayer>
      <h3>{isNew ? "Add New" : "Edit"} Player</h3>

      <div>
        <p>Player Name:</p>
        <input
          type="text"
          placeholder="Player Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <TeamSelection onChange={setTeam} selectedTeam={team} />

      <FactionButtonWrapper>
        <p>Choose a faction:</p>
        {(factions ?? []).map((f) => {
          const className = f === faction ? "selected" : "";

          return (
            <FactionButton
              onClick={() => setFaction(f as Faction)}
              className={className}
            >
              {f.name}
            </FactionButton>
          );
        })}
      </FactionButtonWrapper>

      <Button onClick={handleSave} text="Save" />
    </StyledAddEditPlayer>
  );
}
