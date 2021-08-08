import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import  Colors  from '../constants/Colors';
import WhiteText from '../components/WhiteText'
import LungoIcon from './LungoIcon';
import { useNavigation } from '@react-navigation/native';


export default function CoffeeDetail({content, onPressHandler, id, sizes, extras }) {
    

    const altNavigation = useNavigation()

    function WhiteTextHandler() {

    }

 

return (
    <View style={styles.container} >

        <TouchableOpacity style={styles.listItem} onPress={onPressHandler}>
          
            <WhiteText content={content} />
        </TouchableOpacity>
    </View>
)
}


const styles = StyleSheet.create({
container: {
    backgroundColor: Colors.green,
    width: '100%',
    height: 70,
    marginBottom: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
    // alignSelf: 'stretch',
   
    borderRadius: 4,
   
},
text: {
    color: 'white',

},
listItem: {


}

})