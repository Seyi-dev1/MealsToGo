import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import background from "../../../../assets/home_bg.jpg";
import { theme } from "../../../infrastructure/Theme";
import { Button } from "react-native-paper";
import LottieView from "lottie-react-native";

const AccountScreen = ({ navigation }) => {
  const animation = useRef(null);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        style={styles.image}
        resizeMode="cover"
      >
        <View style={styles.bgCover}>
          <View style={styles.animation}>
            <LottieView
              autoPlay
              ref={animation}
              style={{
                width: 300,
                height: 300,
              }}
              loop={false}
              source={require("../../../../assets/Animation - 1712582840939.json")}
            />
          </View>
          <View style={styles.accountContainer}>
            <Text style={styles.heading}>Meals To Go</Text>
            <Button
              icon="lock-open-outline"
              mode="contained"
              style={styles.button}
              buttonColor={theme.colors.brand.primary}
              onPress={() => navigation.navigate("Login")}
            >
              Login
            </Button>
            <Button
              icon="email"
              mode="contained"
              style={styles.button}
              buttonColor={theme.colors.brand.primary}
              onPress={() => navigation.navigate("Register")}
            >
              Register
            </Button>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  bgCover: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.2)",
    justifyContent: "center",
    justifyContent: "center",
    alignItems: "center",
    // padding: 0,
  },
  accountContainer: {
    backgroundColor: "rgba(255,255,255,0.7)",
    padding: theme.space[4],
    borderRadius: 10,
  },
  button: {
    borderRadius: 5,
    marginBottom: 20,
    width: 250,
    padding: 4,
  },
  heading: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: theme.fonts.heading,
  },
  animation: {
    position: "absolute",
    top: -40,
  },
});
