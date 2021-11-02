import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { TeamBuilderContext } from '../../context/TeamBuilderContext';

const PlayerTeamActions = (props) => {
  // access dispatch function
  const [state, dispatch] = useContext(TeamBuilderContext);

  const player = props.player

  const setPosition = (name, position) => {
    dispatch({
      type: "SET_POSITION",
      payload: { name, position }
    });
  };

  return (
    <>
      <Button onClick={() => setPosition(player.name, "kicks")}>K</Button>
      <Button onClick={() => setPosition(player.name, "handballs")}>H</Button>
      <Button onClick={() => setPosition(player.name, "marks")}>M</Button>
      <Button onClick={() => setPosition(player.name, "tackles")}>T</Button>
      <Button onClick={() => setPosition(player.name, "goals")}>G</Button>
      <Button onClick={() => setPosition(player.name, "ruck")}>R</Button>
      <Button onClick={() => setPosition(player.name, "star")}>Star</Button>
      <Button onClick={() => setPosition(player.name, null)}>Remove</Button>
    </>
  );
}

export default PlayerTeamActions;
