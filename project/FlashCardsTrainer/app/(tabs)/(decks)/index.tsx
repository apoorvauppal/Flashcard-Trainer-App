// import React from 'react';
// import { View, Text } from 'react-native';


// export default function DecksScreen(){
//     return(
//         <View style = {{flex:1, 
//         justifyContent: "center",
//         alignItems:"center"}}>
//             <Text style = {{fontSize:24}}>Decks List</Text>
//         </View>
//     );
// }

import { useContext } from "react";
import { Text, View } from "react-native";
import { FlashContext } from "../../../src/contexts/FlashContext";

export default function DecksScreen() {
  const { decks } = useContext(FlashContext);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Decks:</Text>
      {Object.values(decks).map((deck) => (
        <Text key={deck.id}>• {deck.title}</Text>
      ))}
    </View>
  );
}
