import React, { useContext, useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { CoffeeContext } from "../context/CoffeeContext";
import Colors from "../constants/Colors";
import { List, Divider } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

export default function Milk() {
  const { milk, setSelectedMilk } = useContext(CoffeeContext);
  const [expanded, setExpanded] = useState(true);
  const [checkedSoy, setCheckedSoy] = useState(false);
  const [checkedOat, setCheckedOat] = useState(false);
  const [checkedCow, setCheckedCow] = useState(false);

  const handlePress = () => {
    setExpanded(!expanded);
  };

  const soy = milk.subselections.find((el) => {
    return el.name === "Soy";
  });

  const oat = milk.subselections.find((el) => {
    return el.name === "Oat";
  });
  const cow = milk.subselections.find((el) => {
    return el.name === "Cow";
  });

  const milkContent = milk.subselections.map((type) => {
    if (type._id === soy._id) {
      return soy.name;
    }
    if (type._id === oat._id) {
      return oat.name;
    }
    if (type._id === cow._id) {
      return cow.name;
    }
  });

  function onSelectHandlerSoy() {
    setCheckedSoy(!checkedSoy);
    setCheckedOat(false);
    setCheckedCow(false);
    setSelectedMilk(milkContent[0]);
    if (checkedSoy) {
      setSelectedMilk("no milk");
    }
  }
  function onSelectHandlerOat() {
    setCheckedOat(!checkedOat);
    setCheckedCow(false);
    setCheckedSoy(false);
    setSelectedMilk(milkContent[1]);
    if (checkedOat) {
      setSelectedMilk("no milk");
    }
  }
  function onSelectHandlerCow() {
    setCheckedCow(!checkedCow);
    setCheckedOat(false);
    setCheckedSoy(false);
    setSelectedMilk(milkContent[2]);
    if (checkedCow) {
      setSelectedMilk("no milk");
    }
  }

  return (
    <View style={styles.container}>
      <List.Section style={styles.section}>
        <List.Accordion
          title={milk.name}
          titleStyle={styles.listText}
          expanded={!expanded}
          onPress={handlePress}
          style={styles.accordion}
          left={(props) => (
            <Image
              source={require("../assets/milk_icon.png")}
              size={46}
              {...props}
            />
          )}
          right={(props) => <List.Icon {...props} />}
        >
          <Divider style={styles.divider} />
          <List.Item
            title={milkContent[0]}
            style={styles.item}
            titleStyle={styles.listText}
            right={(props) => (
              <Ionicons
                {...props}
                name={
                  !checkedSoy ? "ellipse-outline" : "checkmark-circle-outline"
                }
                size={32}
                style={styles.icon}
              />
            )}
            onPress={onSelectHandlerSoy}
          />
          <List.Item
            title={milkContent[1]}
            style={styles.item}
            titleStyle={styles.listText}
            right={(props) => (
              <Ionicons
                {...props}
                name={
                  !checkedOat ? "ellipse-outline" : "checkmark-circle-outline"
                }
                size={32}
                style={styles.icon}
              />
            )}
            onPress={onSelectHandlerOat}
          />
          <List.Item
            title={milkContent[2]}
            style={styles.item}
            titleStyle={styles.listText}
            onPress={onSelectHandlerCow}
            right={(props) => (
              <Ionicons
                {...props}
                name={
                  !checkedCow ? "ellipse-outline" : "checkmark-circle-outline"
                }
                size={32}
                style={styles.icon}
              />
            )}
          />
        </List.Accordion>
      </List.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  divider: {
    backgroundColor: "white",
    height: 2,
    marginBottom: 10,
    marginHorizontal: 12,
  },
  section: {
    backgroundColor: Colors.green,
    padding: 8,
    borderRadius: 4,
  },
  listText: {
    fontFamily: "avenirNext",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 20,
    letterSpacing: 0.374,
    color: "white",
  },
  item: {
    color: "white",
    backgroundColor: "#9BC88B",
    marginVertical: 6,
    marginHorizontal: 12,
    borderRadius: 8,
  },
  accordion: {
    backgroundColor: Colors.green,
  },
  icon: {
    color: "white",
    alignSelf: "center",
  },
});
