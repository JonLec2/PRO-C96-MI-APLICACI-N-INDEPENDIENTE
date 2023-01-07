import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as Font from "expo-font";
import { RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";

import { FancyAlert } from "react-native-expo-fancy-alerts";

const image = require("../assets/background.png");

let customFonts = {
  "Inter-Black": require("../assets/Fonts/SourceSansPro-Regular.ttf"),
  SourceSansItalic: require("../assets/Fonts/SourceSansPro-Italic.ttf"),
};

export default class Cronometro1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      email: "",
      password: "",
      tiempo: "dad",
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  createThreeButtonAlert = () =>
    Alert.alert(
      "¿Estas listo para comenzar?" + this.state.tiempo,
      "My Alert Msg",
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed"),
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]
    );

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }
    return (
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.container1}>
            <Text style={styles.text1}>
              Elige el tiempo que deseas estudiar
            </Text>
            <Text style={styles.text2}>Tiempo de estudio / descanso</Text>

            <TouchableOpacity
              style={styles.Selecetbutton2}
              onPress={()=>console.log("do")}
            >
              <Text style={styles.textbutton2}>25/5</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.Selecetbutton2}
              onPress={()=>console.log("Ho")}
            >
              <Text style={styles.textbutton2}>35/5</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.Selecetbutton2}
              onPress={()=>console.log("He")}
            >
              <Text style={styles.textbutton2}>50/10</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.Selecetbutton}
              onPress={()=>this.createThreeButtonAlert}
            >
              <LinearGradient
                // Button Linear Gradient
                colors={["#ffffff", "#e6e6e6"]}
                style={styles.buttongradient}
                start={{ x: 0, y: 0.5 }}
              />
              <View>
                <Text style={styles.textbutton}>
                  Personaliza tu propio tiempo de estudio
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
    alignItems: "center",
  },

  droidSafeArea: {
    marginTop:
      Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
  },

  container1: {
    width: RFValue(300),
    height: RFValue(573),
    backgroundColor: "#ffffff60",
    borderRadius: 20,
    alignItems: "center",
    marginTop: 40,
  },

  text1: {
    fontSize: RFValue(23),
    fontFamily: "Inter-Black",
    textAlign: "center",
    color: "#fff",
    marginTop: 20,
    marginBottom: 5,
  },

  text2: {
    fontSize: RFValue(18),
    fontFamily: "SourceSansItalic",
    textAlign: "center",
    color: "#fff",
    marginBottom: 35,
  },

  Selecetbutton: {
    width: RFValue(230),
    height: RFValue(70),
    backgroundColor: "#e6e6e6",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    elevation: 15,
    marginBottom: 30,
  },
  buttongradient: {
    position: "absolute",
    alignItems: "center",
    borderRadius: 20,
    width: "100%",
    height: "100%",
  },

  textbutton: {
    fontFamily: "Inter-Black",
    fontSize: 18,
    textAlign: "center",
    paddingHorizontal: 30,
  },

  Selecetbutton2: {
    width: RFValue(139),
    height: RFValue(40),
    backgroundColor: "#e6e6e6",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    elevation: 15,
    marginBottom: 30,
    backgroundColor: "#fff",
  },

  textbutton2: {
    fontFamily: "Inter-Black",
    fontSize: 22,
  },
});
