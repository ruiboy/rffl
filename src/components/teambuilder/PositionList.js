import { Box, Item, Stack, Typography } from '@mui/material';
import React from "react";
import PlayerCard from "../player/PlayerCard";

// A list of players in a position - eg 4 kickers or 1 star.

const PositionList = (props) => {
  const heading = props.heading;
  const players = props.players;

  return (
    <Box>
      <Typography variant="h6">{heading}</Typography>
      <Stack spacing={1}>
        {players.map((player) => (
            <PlayerCard key={player.name} player={player} />
        ))}
      </Stack>
    </Box>
  );
}

export default PositionList;
