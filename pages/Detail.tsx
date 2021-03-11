import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Detail = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>スペース詳細</Text>
    </View>
  );
};
export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
  },
});
