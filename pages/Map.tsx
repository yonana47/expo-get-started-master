import React from "react";
import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";

const Map = () => {
  return (
    <View>
      <MapView style={styles.map} />
    </View>
  );
};
export default Map;

const styles = StyleSheet.create({
  map: {
    width: 200,
    height: 200,
  },
});
