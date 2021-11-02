import React from "react";
import { Container, Typography, Grid, Paper } from '@material-ui/core';
import PlayerCard from "../player/PlayerCard";
import PositionList from "./PositionList";
import { testPlayers } from "./testData";

const TeamBuilder = () => {

  const [players, setPlayers] = React.useState(testPlayers);

  return (
    <>
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
                <PositionList heading="Hitouts" slots={1} players={players.filter((player) => player.position === "ruck")} />
                <PositionList heading="Star" slots={1} players={players.filter((player) => player.position === "star")} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <PositionList heading="Squad" slots={30} players={players.filter((player) => player.position == null || player.position === "")} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default TeamBuilder;
