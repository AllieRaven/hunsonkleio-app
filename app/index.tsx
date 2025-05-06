import { Text, View, StyleSheet, FlatList } from "react-native";

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
  function Item(item){
    return <text>jujubas</text>
  }

  function Cabecalho(){
    return(
      <Text style ={{fontSize: 50}}>Lista de Usuários</Text>
    )
  }
  function Rodape(){
    return(
      <Text style ={{fontSize: 20}}>Total de Usuários: {usuarios.length}</Text>
    )
  }
  return (
      <FlatList
      data = {usuarios}
      renderItem = {({item}) => <Item item ={item}/>}
      ListHeaderComponent={()=> <Cabecalho />}
      ListFooterComponent={() => <Rodape />}
      />
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})