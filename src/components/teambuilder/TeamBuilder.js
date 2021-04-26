import React, { useEffect, useRef, useState } from "react";
import { useForm } from "../util/useForm";
import { Container, TextField, Typography, makeStyles, } from '@material-ui/core';
import PlayerCard from "./PlayerCard";

function TeamBuilder() {

  const [players, setPlayers] = React.useState([
    {
      name: "Brodie Smith",
      aflClub: "Adelaide",
      position: "kicks",
      stats: [
        { round: "1", k: 15, h: 5, m: 2, t: 1, g: 1, s: 45 },
        { round: "2", k: 10, h: 2, m: 1, t: 0, g: 0, s: 20 },
      ]
    },
    {
      name: "Jack Ziebell",
      aflClub: "Kangaroos",
      stats: [
        { round: "5", k: 32, h: 5, m: 2, t: 1, g: 1, s: 70 }
      ]
    }
  ])

  const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
  }));

  return (
    <>
      <Container maxWidth="sm">
        <div>
          <form>
            <Typography variant="h6">Kickers</Typography>
            <PlayerCard />
          </form>
        </div>
      </Container>
    </>
  );
}

export default TeamBuilder;
