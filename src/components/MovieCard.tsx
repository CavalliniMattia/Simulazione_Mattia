import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

type MovieProps = {
  imdbID: string;
  Title: string;
  Poster: string;
};

const MovieCard = ({ imdbID, Title, Poster }: MovieProps) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={Poster} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md"></Heading>
          <Text>{Title}</Text>
        </Stack>
      </CardBody>
      <Button variant="solid" colorScheme="blue">
        {" "}
        <Link to={`/movies/${imdbID}`}>Dettagli</Link>
      </Button>
    </Card>
  );
};

export default MovieCard;
