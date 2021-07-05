import React,  { useState } from 'react'
import axios from "axios";
import JokeItem from "./components/styled/JokeItem";
import {
   Wrapper,
   Row,
    Header, 
    Image,
     Search, 
     Form,
    Button,
   }from "./components/styled/index";
   import { Joke } from "./common/types";

import owl from './images/owl.svg'

const BASE_URL = "https://v2.jokeapi.dev/joke/Any";

const App = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const [jokes, setJokes] = useState<Joke[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       setSearch(e.target.value);
  };
  const getJokes = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const ENDPOINT = `${BASE_URL}?contains=${search}&amount=10`;

    const { data } = await axios.get(ENDPOINT);
    if (data.error) {
      setError(true);
      setJokes([]);
    } else {
      setError(false);
      setJokes(data.jokes);
    }

    setSearch("");
  };
  

    return(
     <div>
       <Wrapper>
         <Row>
           <Header>Joker</Header>
           <Image src={owl} alt="Baykus" />
         </Row>
        <Form onSubmit={getJokes}>
          <Search type="text"
          placeholder="Search.."
          value={search}
          onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </Form>
          {/* Jokes */}
          <div>
          {error && <p>Sorry, no jokes found.</p>}
          {jokes.length > 0 &&
            jokes.map((joke) => <JokeItem key={joke.id} joke={joke} />)}
        </div>
        </Wrapper>
     </div>
    )
}

export default App
