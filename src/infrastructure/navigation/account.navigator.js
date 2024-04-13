import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import AccountScreen from "../../features/account/screens/account.screen";
import LoginScreen from "../../features/account/screens/login.screen";
import RegisterScreen from "../../features/account/screens/register.screen";
import { useContext } from "react";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import background from "../../../assets/home_bg.jpg";
import { theme } from "../Theme";

const AuthenticationStack = createNativeStackNavigator();

export const AcountNavigator = () => {
  const { isBooting } = useContext(AuthenticationContext);
  return !isBooting ? (
    <AuthenticationStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthenticationStack.Screen name="Main" component={AccountScreen} />
      <AuthenticationStack.Screen name="Login" component={LoginScreen} />
      <AuthenticationStack.Screen name="Register" component={RegisterScreen} />
    </AuthenticationStack.Navigator>
  ) : (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        style={styles.image}
        resizeMode="cover"
      >
        <View style={styles.bgCover}>
          <Text style={styles.heading}>Meals To Go🍕</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

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
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 33,
    fontFamily: theme.fonts.heading,
    fontWeight: "700",
    backgroundColor: "rgba(250,250,250,0.6)",
    padding: 20,
    borderRadius: 10,
  },
});
