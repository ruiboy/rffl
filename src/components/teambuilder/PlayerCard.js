import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {
  Card, CardHeader, CardContent, Collapse, Avatar, IconButton,
  TableContainer, Table, TableHead, TableBody, TableRow, TableCell
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { ExpandMore } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function PlayerCard(playerData) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [player] = React.useState(
    {
      name: "Brodie Smith",
      aflClub: "Adelaide",
      stats: [
        { round: "1", k: 15, h: 5, m: 2, t: 1, g: 1, s: 45 },
        { round: "2", k: 10, h: 2, m: 1, t: 0, g: 0, s: 20 },
      ]
    }
  )

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="player" className={classes.avatar}>
            {player.name.substring(0, 1)}
          </Avatar>
        }
        action={
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMore />
          </IconButton>
        }
        title={player.name}
        subheader={player.aflClub}
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <TableContainer >
            <Table size="small" padding="none" aria-label="Player stats">
              <TableHead>
                <TableRow>
                  <TableCell>Rd</TableCell>
                  <TableCell>K</TableCell>
                  <TableCell>H</TableCell>
                  <TableCell>M</TableCell>
                  <TableCell>T</TableCell>
                  <TableCell>G</TableCell>
                  <TableCell>St</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {player.stats.map((row) => (
                  <TableRow key={row.round}>
                    <TableCell>{row.round}</TableCell>
                    <TableCell>{row.k}</TableCell>
                    <TableCell>{row.h}</TableCell>
                    <TableCell>{row.m}</TableCell>
                    <TableCell>{row.t}</TableCell>
                    <TableCell>{row.g}</TableCell>
                    <TableCell>{row.s}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default PlayerCard;
