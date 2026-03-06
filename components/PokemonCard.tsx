import { Image, Text, View } from "react-native";

interface PokemonCardProps {
  name: string;
  url: string;
}

export default function PokemonCard({ name, url }: PokemonCardProps) {
  // Separar la URL por "/"
  const parts = url.split("/").filter((item) => item !== "");

  // Tomar el último valor, que es el id
  const id = parts.pop();

  // Crear la URL de la imagen
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <View style={{ marginBottom: 20, alignItems: "center" }}>
      <Image
        source={{ uri: imageUrl }}
        style={{ width: 100, height: 100 }}
      />
      <Text>{name}</Text>
    </View>
  );
}