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
} from "react-native";
import * as Font from "expo-font";
import { RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";

const image = require("../assets/background.png");

let customFonts = {
  "Inter-Black": require("../assets/Fonts/SourceSansPro-Regular.ttf"),
};

const cronometrer = require("../assets/cronometro.png");
const tareas= require("../assets/tareas.png");
const apuntes= require("../assets/apuntes.png")

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      email: "",
      password: "",
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }
    return (
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <SafeAreaView style={styles.droidSafeArea} />



          <TouchableOpacity style={[styles.optinsconatiner, {marginTop:45}]}
          onPress={()=>this.props.navigation.navigate("Cronometro")}
          >
            <LinearGradient
              // Button Linear Gradient
              colors={["#ffffff", "#e6e6e6"]}
              style={styles.button}
              start={{ x: 0, y: 0.5 }}
            />
            <Image source={cronometrer} style={styles.buttonimage} />
            <View>
              <Text style={styles.text1}>Comienza a estudiar</Text>
              <Text style={styles.text2}>Temporiza tus lapsos de estudio</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optinsconatiner}>
            <LinearGradient
              // Button Linear Gradient
              colors={["#ffffff", "#e6e6e6"]}
              style={styles.button}
              start={{ x: 0, y: 0.5 }}
            />
            <Image source={tareas} style={styles.buttonimage} />
            <View>
              <Text style={styles.text1}>Organiza tus tareas</Text>
              <Text style={styles.text2}>Crea una lista con tus tareas</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optinsconatiner}>
            <LinearGradient
              // Button Linear Gradient
              colors={["#ffffff", "#e6e6e6"]}
              style={styles.button}
              start={{ x: 0, y: 0.5 }}
            />
            <Image source={apuntes} style={styles.buttonimage} />
            <View>
              <Text style={styles.text1}>Organiza tus tareas</Text>
              <Text style={styles.text2}>Crea una lista con tus tareas</Text>
            </View>
          </TouchableOpacity>

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

  optinsconatiner: {
    width: 310,
    height: 100,
    backgroundColor: "#e6e6e6",
    borderRadius: 20,
    alignItems: "center",
    flexDirection: "row",
    elevation: 15,
    marginBottom:20,
  },
  button: {
    position: "absolute",
    alignItems: "center",
    borderRadius: 20,
    width: "100%",
    height: "100%",
  },
  buttonimage: {
    width: 80,
    height: 80,
    marginLeft: 5,
    marginRight: 5,
  },

  text1: {
    fontFamily: "Inter-Black",
    fontSize: 22,
  },
  text2: {
    fontFamily: "Inter-Black",
    fontSize: 12,
  },
});
