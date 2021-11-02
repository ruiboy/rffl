import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React from 'react';

const PlayerDetails = (props) => {
  const player = props.player

  return (
    <>
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
    </>
  );
}

export default PlayerDetails;
