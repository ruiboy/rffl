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

const getInitials = (player) => {
    return player.name.split(/\s+/).map((s) => s.substring(0,1));
}

const PlayerCard = (playerData) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  // TODO why the hell do i have to refer to playerData.playerData ????
  const [player] = React.useState(playerData.playerData)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="player" className={classes.avatar}>
            {getInitials(player)}
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
                  <TableCell>R</TableCell>
                  <TableCell>G</TableCell>
                  <TableCell>*</TableCell>
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
                    <TableCell>{row.r}</TableCell>
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
