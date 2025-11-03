import { useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import { useFlash } from "../../../src/contexts/FlashContext";
import {View, StyleSheet, Text, FlatList} from "react-native";
import SearchBar from "../../../src/components/SearchBar";
import DeckCard from "../../../src/components/DeckCard";
import FloatingButton from "../../../src/components/FloatingButton";


export default function DecksScreen(){
   const router = useRouter();
   const {decks} = useFlash();
   const [query, setQuery] = useState("");


   const filtered = useMemo(() => {
       const q = query.trim().toLowerCase();
       if(!q) return decks;
       return decks.filter((d) => d.title.toLowerCase().includes(q));
   }, [decks,query]);


   return (
   <View style={styles.container}>
     <SearchBar value={query} onChangeText={setQuery} placeholder="Search decks..." />
     {filtered.length === 0 ? (
       <View style={styles.empty}>
         <Text>No decks found. Create one with +</Text>
       </View>
     ) : (
       <FlatList
         data={filtered}
         keyExtractor={(item) => item.id}
         renderItem={({ item }) => (
           <DeckCard
             deck={item}
             onPress={() => router.push({ pathname: `/ (tabs)/(decks)/deck/${item.id}`.replace(" ", "") })}
           />
         )}
       />
     )}


     <FloatingButton onPress={() => router.push("/create-deck")} />
   </View>
 );
}




const styles = StyleSheet.create({
   container:{
       flex:1,
       padding:12,
   },
   empty:{
       flex:1,
       alignItems: "center",
       justifyContent:"center",
       marginTop:24,
   }
});
