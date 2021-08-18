import React, {useContext} from "react";
import { StyleSheet, View} from "react-native";
import { CoffeeContext } from "../context/CoffeeContext";
import Colors from "../constants/Colors";
import ModalDropdown from "react-native-modal-dropdown";


export default function Sugar({ content, optionsSugar }) {
const { sugar, setSelectedSugar } = useContext(CoffeeContext);


const normal = sugar.subselections.find((sugar) => {
  return sugar.name === "Normal";
});

const lot = sugar.subselections.find((sugar) => {
  return sugar.name === "A lot"
})

const sugarContent = sugar.subselections.map((type) => {
  if (type._id === lot._id ) {
    return lot.name
  }
  if (type._id === normal._id) {
    return normal.name
  }
})



function onSelectHandler(name) {
  setSelectedSugar(sugarContent[name])
}

  return (
    <View style={styles.container}>
   
      <ModalDropdown
        defaultValue={content}
        defaultTextStyle={styles.text}
        dropdownStyle={styles.dropdown}
        dropdownTextStyle={styles.dropdownText}
        isFullWidth={true}
        options={sugarContent}
        extraData={optionsSugar}
        onSelect={onSelectHandler}
        // onDropdownWillHide={() => false}
        // onDropdownWillShow={() => true}
      />
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.green,
    fontFamily: "avenirNext",
    width: "100%",
    height: 70,
    alignItems: "stretch",
    justifyContent: "center",
    borderRadius: 4,
  },
  text: {
    
    margin: 20,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 20,
    letterSpacing: 0.374,
    color: "white",
    backgroundColor: Colors.green,
  },
  dropdownText: {
    color: "white",
    backgroundColor: "#9BC88B",
    marginHorizontal: 20,
    marginVertical: 5,
    height: 60,
  },

  dropdown: {
    backgroundColor: Colors.green,
    
  },
});
