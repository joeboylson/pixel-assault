import { isEmpty } from "lodash";
import { Faction, Player } from "../../types";
import { useCallback, useMemo, useState } from "react";
import Button from "../../components/Button";
import { v4 as uuidv4 } from "uuid";
import { usePlayerTrackerContext } from "../../context/PlayerTrackerContext";
import { useGetAllWikiItemsByType } from "../../hooks/useGetAllWikiItemsByType";
import TeamSelection from "./TeamSelection";
import { getFactionBackground, getFactionIcon } from "../../utils/faction";

import {
  FactionButton,
  FactionButtonWrapper,
  StyledAddEditPlayer,
} from "./StyledComponents";

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

  const FactionBackgroundSrc = useMemo(() => {
    const factionSlug = faction?.slug?.current ?? "";
    return getFactionBackground(factionSlug);
  }, [faction]);

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
        <p>What do we call you?</p>
        <input
          type="text"
          placeholder="Your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <TeamSelection onChange={setTeam} selectedTeam={team} />

      <FactionButtonWrapper backgroundsrc={FactionBackgroundSrc}>
        <p>
          <b>Choose a faction:</b>
        </p>
        {(factions ?? []).map((_f) => {
          const f = _f as Faction;
          const className = f === faction ? "selected" : "";
          const iconSrc = getFactionIcon(f.slug?.current ?? "");

          return (
            <FactionButton
              onClick={() => setFaction(f as Faction)}
              className={className}
              key={f._id}
            >
              <div>
                <img src={iconSrc} alt="" />
                {f.name}
              </div>
            </FactionButton>
          );
        })}
      </FactionButtonWrapper>

      <Button onClick={handleSave} text="Save" />
    </StyledAddEditPlayer>
  );
}
