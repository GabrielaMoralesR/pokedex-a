import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import PokemonCard from "../components/PokemonCard";


export default function Index() {
  const [results, setResult] = useState<any[]>([]);


  useEffect(() => {
      console.log("Entre entre en pantalla");
      getPokemons();
    },[]);

    const getPokemons = async () => {
      const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
      const response = await fetch(URL,{
        method: "GET"
      })
      console.log(response);
      const data = await response.json();
      console.log(data.results);
      setResult(data.results);
    };
  return (
    <ScrollView>
      {results.map((item)=>{
        return (<PokemonCard
            key={item.name}
            name={item.name}
            url={item.url}
          />)
      })
    
    }
    </ScrollView>
  );
}


