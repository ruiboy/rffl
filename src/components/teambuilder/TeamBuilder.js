import React from "react";
import { Container, Typography, Grid, Paper } from '@material-ui/core';
import PlayerCard from "./PlayerCard";

const TeamBuilder = () => {

  const [players, setPlayers] = React.useState([
    {
      name: "Brodie Smith",
      aflClub: "Adelaide",
      position: "kicks",
      stats: [
        { round: "1", k: 15, h: 5, m: 2, t: 1, r: 0, g: 1, s: 45 },
        { round: "2", k: 10, h: 2, m: 1, t: 0, r: 0, g: 0, s: 20 },
      ]
    },
    {
      name: "Jack Ziebell",
      aflClub: "Kangaroos",
      stats: [
        { round: "5", k: 32, h: 5, m: 2, t: 1, r: 0, g: 1, s: 70 }
      ]
    }
  ]);

  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Paper elevation={3}>
              <Typography variant="h6">Kickers</Typography>
              {players
                .filter((player) => player.position === "kicks")
                .map((player) => (
                  <PlayerCard playerData={player} />
                ))}
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={3}>
              <Typography variant="h6">Squad</Typography>
              {players
                .filter((player) => player.position == null || player.position === "")
                .map((player) => (
                  <PlayerCard playerData={player} />
                ))}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default TeamBuilder;
