import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";
import logo from "./assets/logo.png";
import MapView from 'react-native-maps';
import Carousel from 'react-native-snap-carousel';
const DATA = [
  {
    id: 1,
    title: "レンタルスペース",
    imagePath:
      "https://images.unsplash.com/photo-1608319331919-6c7cb6e34b7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    path: "fixme",
  },
  {
    id: 2,
    title: "会議室",
    imagePath:
      "https://images.unsplash.com/photo-1608319331919-6c7cb6e34b7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    path: "fixme",
  },
  {
    id: 3,
    title: "音楽スタジオ",
    imagePath:
      "https://images.unsplash.com/photo-1608319331919-6c7cb6e34b7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    path: "fixme",
  },
  {
    id: 4,
    title: "音楽スタジオ",
    imagePath:
      "https://images.unsplash.com/photo-1608319331919-6c7cb6e34b7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    path: "fixme",
  },
  {
    id: 5,
    title: "音楽スタジオ",
    imagePath:
      "https://images.unsplash.com/photo-1608319331919-6c7cb6e34b7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    path: "fixme",
  },
];

const Item = ({ title, imagePath }: { title: string; imagePath: string }) => (
  <View style={styles.category_inner}>
    <Image style={styles.category__image} source={{ uri: imagePath }} />
    <View style={styles.category__titleContiner}>
      <Text style={styles.category__title}>{title}</Text>
    </View>
  </View>
);
const App = () => {
  const renderItem = ({
    item,
  }: {
    item: {
      id: number;
      title: string;
      imagePath: string;
      path: string;
    };
  }) => <Item title={item.title} imagePath={item.imagePath} />;
  return (
    <SafeAreaView>
      <View style={styles.hero}>
        <Image
          source={{
            uri:
              "https://images.unsplash.com/photo-1608319331919-6c7cb6e34b7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
          }}
          style={styles.hero__image}
        />
        <View style={styles.hero__textContainer}>
          <Text style={styles.hero__text}>レンタルスペース</Text>
          <TouchableOpacity
            onPress={() => console.log("show list")}
            style={styles.hero__button}
          >
            <Text style={styles.hero__buttonText}>一覧を見る</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.sectionTitle}>会場タイプからさがす</Text>
      <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          style={styles.category__container}
      />
      <Text style={styles.sectionTitle}>用途からさがす</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        style={styles.category__container}
      />
      <MapView style={styles.map} />
      <Carousel ref={c => {this._carousel = c}}/>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 20,
    color: "#333333",
    marginTop: 24,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    paddingTop: 22,
  },
  hero: {
    position: "relative",
    height: 250,
  },
  hero__image: {
    position: "absolute",
    resizeMode: "cover",
    height: "100%",
    width: "100%",
  },
  hero__textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  hero__text: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  hero__button: {
    color: "white",
    borderWidth: 1,
    backgroundColor: "transparent",
    borderColor: "white",
    marginTop: 16,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 32,
    paddingRight: 32,
    fontSize: 16,
    borderRadius: 16,
  },
  hero__buttonText: {
    fontSize: 14,
    color: "white",
  },
  category__container: {
    marginTop: 16,
  },
  category_inner: {
    width: 120,
    height: 80,
    position: "relative",
    marginRight: 12,
  },
  category__image: {
    width: "100%",
    height: "100%",
    position: "absolute",
    resizeMode: "cover",
  },
  category__titleContiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  category__title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  map: {
    width: 200,
    height: 200,
  },
});
