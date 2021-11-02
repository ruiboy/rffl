import React from "react";
import { TeamBuilderContextProvider } from '../../context/TeamBuilderContext';
import TeamBuilderContent from "./TeamBuilderContent";

const TeamBuilder = () => {
  return (
    <TeamBuilderContextProvider>
      <TeamBuilderContent />
    </TeamBuilderContextProvider>
  );
}

export default TeamBuilder;
