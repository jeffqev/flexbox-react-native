import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
const bg = require("./assets/img/bg.jpg");
const actividad1 = require("./assets/img/actividad1.jpg");
const actividad2 = require("./assets/img/actividad2.jpg");
const actividad3 = require("./assets/img/actividad3.jpg");
const actividad4 = require("./assets/img/actividad4.jpg");
const actividad5 = require("./assets/img/actividad5.jpg");
const mejores1 = require("./assets/img/mejores1.jpg");
const mejores2 = require("./assets/img/mejores2.jpg");
const mejores3 = require("./assets/img/mejores3.jpg");

export default function App() {
  return (
    <>
      <ScrollView>
        <View style={{ flexDirection: "row" }}>
          <Image style={styles.banner} source={bg} />
        </View>

        <View style={styles.container}>
          <Text style={styles.tittle}> Que hacer en paris</Text>
          <ScrollView horizontal>
            <View>
              <Image style={styles.city} source={actividad1} />
            </View>
            <View>
              <Image style={styles.city} source={actividad2} />
            </View>
            <View>
              <Image style={styles.city} source={actividad3} />
            </View>
            <View>
              <Image style={styles.city} source={actividad4} />
            </View>
            <View>
              <Image style={styles.city} source={actividad5} />
            </View>
          </ScrollView>

          <Text style={styles.tittle}> Que hacer en paris</Text>
          <View>
            <View>
              <Image style={styles.best} source={mejores1} />
            </View>
            <View>
              <Image style={styles.best} source={mejores2} />
            </View>
            <View>
              <Image style={styles.best} source={mejores3} />
            </View>
          </View>

          <Text style={styles.tittle}> Hospedajes LA </Text>
          <View style={styles.lodgment}>
            <View style={styles.lodgmentItem}>
              <Image
                style={styles.lodgmentImage}
                source={require("./assets/img/hospedaje1.jpg")}
              />
            </View>
            <View style={styles.lodgmentItem}>
              <Image
                style={styles.lodgmentImage}
                source={require("./assets/img/hospedaje2.jpg")}
              />
            </View>
            <View style={styles.lodgmentItem}>
              <Image
                style={styles.lodgmentImage}
                source={require("./assets/img/hospedaje3.jpg")}
              />
            </View>
            <View style={styles.lodgmentItem}>
              <Image
                style={styles.lodgmentImage}
                source={require("./assets/img/hospedaje4.jpg")}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },

  tittle: {
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 20,
  },

  container: {
    marginHorizontal: 10,
  },
  city: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
  best: {
    width: "100%",
    height: 200,
    marginVertical: 5,
  },
  lodgment: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  lodgmentItem: {
    flexBasis: "49%",
  },
  lodgmentImage: {
    width: "100%",
    height: 200,
    marginVertical: 5,
  },
});
