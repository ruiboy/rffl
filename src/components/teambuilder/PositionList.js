import { Box, Typography } from '@material-ui/core';
import React from "react";
import PlayerCard from "../player/PlayerCard";

const PositionList = (props) => {
  const heading = props.heading;
  const players = props.players;

  return (
    <Box>
      <Typography variant="h6">{heading}</Typography>
      {players.map((player) => (
        <PlayerCard key={player.name} player={player} />
      ))}
    </Box>
  );
}

export default PositionList;
