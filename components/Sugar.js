import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { CoffeeContext } from "../context/CoffeeContext";
import Colors from "../constants/Colors";
import { List, Divider } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

export default function Sugar() {
  const { sugar, setSelectedSugar } = useContext(CoffeeContext);
  const [expanded, setExpanded] = useState(true);
  const [checkedAlot, setCheckedAlot] = useState(false);
  const [checkedNormal, setCheckedNormal] = useState(false);

  const handlePress = () => {
    setExpanded(!expanded);
  };

  const normal = sugar.subselections.find((sugar) => {
    return sugar.name === "Normal";
  });

  const lot = sugar.subselections.find((sugar) => {
    return sugar.name === "A lot";
  });

  const sugarContent = sugar.subselections.map((type) => {
    if (type._id === lot._id) {
      return lot.name;
    }
    if (type._id === normal._id) {
      return normal.name;
    }
  });

  function onSelectHandlerAlot() {
    setCheckedAlot(!checkedAlot);
    setCheckedNormal(false);
    setSelectedSugar(sugarContent[0]);
  }
  function onSelectHandlerNormal() {
    setCheckedNormal(!checkedNormal);
    setCheckedAlot(false);
    setSelectedSugar(sugarContent[1]);
  }

  return (
    <View style={styles.container}>
      <List.Section style={styles.section}>
        <List.Accordion
          title={sugar.name}
          titleStyle={styles.listText}
          expanded={!expanded}
          onPress={handlePress}
          style={styles.accordion}
          right={(props) => <List.Icon {...props} />}
        >
          <Divider style={styles.divider} />
          <List.Item
            title={sugarContent[0]}
            style={styles.item}
            titleStyle={styles.listText}
            right={(props) => (
              <Ionicons
                {...props}
                name={
                  !checkedAlot ? "ellipse-outline" : "checkmark-circle-outline"
                }
                size={32}
                style={styles.icon}
              />
            )}
            onPress={onSelectHandlerAlot}
          />
          <List.Item
            title={sugarContent[1]}
            style={styles.item}
            titleStyle={styles.listText}
            onPress={onSelectHandlerNormal}
            right={(props) => (
              <Ionicons
                {...props}
                name={
                  !checkedNormal
                    ? "ellipse-outline"
                    : "checkmark-circle-outline"
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

    // backgroundColor: Colors.green,
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
