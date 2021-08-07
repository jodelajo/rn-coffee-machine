import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import  Colors  from '../constants/Colors';
import WhiteText from '../components/WhiteText'
import LungoIcon from './LungoIcon';
import { useNavigation } from '@react-navigation/native';


export default function CoffeeDetail({title}) {

    const altNavigation = useNavigation()

return (
    <View style={styles.container} >

        <TouchableOpacity style={styles.listItem} onPress={()=> altNavigation.navigate("Size")}>
           
            <WhiteText content={title}/>
        </TouchableOpacity>
    </View>
)
}


const styles = StyleSheet.create({
container: {
    backgroundColor: Colors.green,
    width: '100%',
    height: '20%',
    marginBottom: 10,
    // alignSelf: 'stretch',
    justifyContent: 'space-evenly',
    borderRadius: 4,
   
},
text: {
    color: 'white',

},
listItem: {


}

})