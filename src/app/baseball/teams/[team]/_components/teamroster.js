"use client" //Will be using state for this component

import styles from "./teamroster.module.css";

import { useState } from "react";

const TeamRoster = ({ team }) => {
  return (
    <div>{team.name} Team Roster</div>
  );
}

export default TeamRoster