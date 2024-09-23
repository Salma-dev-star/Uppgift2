import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Index() {

  const [countingnum, setcountingnum] = useState(0)

  function addnum() {
    setcountingnum(countingnum+1);
  }

  function removenum() {
    if(countingnum <= 0) {
      setcountingnum(0)
    } else { setcountingnum(countingnum-1)}
   
  }


  function reset() {
    setcountingnum(0)
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{flex:1}}>

        <Text style= {{fontSize: 50}}>{countingnum}</Text>
        
      </View>
      <Button title = "plus" onPress={addnum}></Button>
      <Button title = "minus" onPress={removenum}></Button>
      <View style={{flex:1}}></View> 
      <View style={{flex:1}}>
        {countingnum !=0 &&
        <Button title = "reset" onPress={reset}></Button> 
        }

      
      </View>
    
    </View>
  );
}
