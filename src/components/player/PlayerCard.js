import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar, Card, CardContent, CardHeader, Collapse, IconButton } from '@mui/material';
import { red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import React from 'react';
import PlayerDetails from './PlayerDetails';
import PlayerTeamActions from './PlayerTeamActions';
import { getInitials } from './util';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const PlayerCard = (props) => {
  const player = props.player;

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="player" sx={{ bgcolor: red[500] }}>{getInitials(player)}</Avatar>
        }
        action={
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        }
        title={player.name}
        subheader={player.aflClub}
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <PlayerDetails player={player} />
          <PlayerTeamActions player={player} />
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default PlayerCard;
