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


const image = require("../assets/background.png");


let customFonts = {
  "Inter-Black": require("../assets/Fonts/SourceSansPro-Regular.ttf"),
};

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      email:"",
      password:"",
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
    const { email, password } = this.state;
    return (
      <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <SafeAreaView style={styles.droidSafeArea} />

        <View style={styles.cuadrado}>
          <Text>Pantalla Profile</Text>
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

 

});
