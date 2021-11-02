import produce from "immer";
import React, { createContext, useReducer } from "react";
import { testPlayers } from "./testData";

export const TeamBuilderContext = createContext();

const initialState = {
  players: testPlayers
}

// Use immer to produce a reducer.  This will help us with immutable changes of arrays & nested structures - 
// basically we just modify the 'draft' state, and let immer work out how to return a new state tree with
// that change.  Thanks immer!
const reducer = produce((draft, action) => {
  switch (action.type) {
    case "SET_POSITION":
      const name = action.payload.name;
      const position = action.payload.position;
      const player = draft.players.find(p => p.name === name);
      player.position = position;
      break
    default:
      throw new Error();
  }
});


export const TeamBuilderContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TeamBuilderContext.Provider value={[state, dispatch]}>
      {props.children}
    </TeamBuilderContext.Provider>
  );
};