import { Text, View, StyleSheet } from "react-native";

const usuarios = [
{
  id:1,
  nome:"Paula Precheca Acesa",
  email: "princesinha.do.bts_07@hotmail.com"
},
{
  id:2,
  nome: "Pedro Mulambo",
  email: "osuaburra.fotofake@yahoo.com"
}
];

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {
      usuarios.map(item =>(
        <Text>{item.email}</Text>
      ))
      }
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})