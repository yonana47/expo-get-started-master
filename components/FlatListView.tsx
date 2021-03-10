import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  Button,
  FlatList,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const FlatListView = () => {
  return (
    <FlatList
      data={[
        { key: "Devin" },
        { key: "Dan" },
        { key: "Dominic" },
        { key: "Jackson" },
        { key: "James" },
      ]}
      renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
    />
  );
};

export default FlatListView;
