import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Path, Mask, Rect, G, Defs, ClipPath } from "react-native-svg";


export default function LungoIcon(){
  return (  <View style={styles.icon}>
 <Svg  width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<G clip-path="url(#clip0)">
<Rect x="-1" width="48" height="46" fill="#219653"/>
<Path d="M12.6 20H33.3999L30.1999 46.3999H15.8L12.6 20Z" fill="#F2994A"/>
<Path d="M13.4 27.2H32.6L31.8615 35.1999H14.1385L13.4 27.2Z" fill="#FFFDFA"/>
<Path d="M11 20H34.9999L32.7846 16H13.2154L11 20Z" fill="#FFFDFA"/>
</G>
<Defs>
<ClipPath id="clip0">
<Rect width="46" height="46" rx="23" fill="white"/>
</ClipPath>
</Defs>
</Svg>
  </View>
  
 )

}

const styles = StyleSheet.create({
icon: {
    borderRadius: 25,
    overflow: "hidden",
}
})