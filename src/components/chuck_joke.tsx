import Joke from "../joke";
interface ChuckJokeProps {
  joke: Joke;
}

const ChuckJoke: React.FC<ChuckJokeProps> = ({ joke }) => (
  <p>
    {joke.id}.{joke.joke}
  </p>
);
export default ChuckJoke;
