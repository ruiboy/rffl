import { Container, Grid } from '@mui/material';
import React, { useContext } from "react";
import { TeamBuilderContext } from '../../context/TeamBuilderContext';
import PositionList from "./PositionList";

const TeamBuilderContent = () => {
  // Subscribe to state and access dispatch function
  const [state] = useContext(TeamBuilderContext);

  const players = state.players;

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <PositionList heading="Goals" slots={3} players={players.filter((player) => player.position === "goals")} />
              <PositionList heading="Kicks" slots={4} players={players.filter((player) => player.position === "kicks")} />
              <PositionList heading="Handballs" slots={4} players={players.filter((player) => player.position === "handballs")} />
            </Grid>
            <Grid item xs={6}>
              <PositionList heading="Marks" slots={1} players={players.filter((player) => player.position === "marks")} />
              <PositionList heading="Tackles" slots={1} players={players.filter((player) => player.position === "tackles")} />
              <PositionList heading="Ruck" slots={1} players={players.filter((player) => player.position === "ruck")} />
              <PositionList heading="Star" slots={1} players={players.filter((player) => player.position === "star")} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <PositionList heading="Squad" slots={30} players={players.filter((player) => player.position == null || player.position === "")} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default TeamBuilderContent;
