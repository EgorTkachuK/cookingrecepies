import { Difficulty0, Difficulty1, Difficulty3 } from '../styled.components/styles';

const MeasureDifficulty = ({ value }) => {
  if (value === 0) return <Difficulty0>Easy</Difficulty0>;
  if (value === 1) return <Difficulty1>Medium</Difficulty1>;
  if (value === 3) return <Difficulty3>Hard</Difficulty3>;
  return null;
};

export default MeasureDifficulty;