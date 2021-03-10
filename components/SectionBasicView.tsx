import React from "react";
import { StyleSheet, Text, FlatList, View, SectionList } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  scrollHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "rgba(247, 247, 247, 1.0)",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const data = [
  { title: "D", data: ["Devin", "Dan", "Daminic"] },
  { title: "J", data: ["Jackson", "James", "Jillian", "Jimmy"] },
];

const SectionBasicView = () => {
  return (
    <SectionList
      sections={data}
      renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      renderSectionHeader={({ section }) => (
        <Text style={styles.scrollHeader}>{section.title}</Text>
      )}
      keyExtractor={(item, index) => item}
    />
  );
};

export default SectionBasicView;
