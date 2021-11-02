import { Avatar, Card, CardContent, CardHeader, Collapse, IconButton } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import { ExpandMore } from '@material-ui/icons';
import clsx from 'clsx';
import React from 'react';
import PlayerDetails from './PlayerDetails';
import { getInitials } from './util';

// most of these styles are for expand/collapse
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

const PlayerCard = (props) => {
  const player = props.player;

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="player" className={classes.avatar}>{getInitials(player)}</Avatar>
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
          <PlayerDetails player={player} />
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default PlayerCard;
