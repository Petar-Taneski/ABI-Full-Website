'use client'
import React from 'react';
import { IndividualProgramCard } from './IndividualProgramCard';

export const Cards = ({ programs }) => {
  return programs.map((individualProgram) => (
    <IndividualProgramCard key={individualProgram.ID} individualProgram={individualProgram} />
  ));
};
