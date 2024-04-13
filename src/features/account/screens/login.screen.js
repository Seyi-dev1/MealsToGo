import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import background from "../../../../assets/home_bg.jpg";
import { theme } from "../../../infrastructure/Theme";
import { Button } from "react-native-paper";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { TextInput } from "react-native-paper";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        style={styles.image}
        resizeMode="cover"
      >
        <View style={styles.bgCover}>
          <View style={styles.loginContainer}>
            <Text style={styles.heading}>Meals To Go</Text>
            <TextInput
              style={styles.input}
              label="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              textContentType="emailAddress"
              keyboardType="email-address"
              autoCapitalize="none"
              selectionColor={theme.colors.brand.primary}
              activeUnderlineColor={theme.colors.brand.primary}
            />
            <TextInput
              style={styles.input}
              label="password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              textContentType="password"
              secureTextEntry
              autoCapitalize="none"
              selectionColor={theme.colors.brand.primary}
              activeUnderlineColor={theme.colors.brand.primary}
            />

            {error.includes("auth/invalid-credential") && (
              <Text style={styles.error}>Invalid email or password</Text>
            )}

            {!isLoading ? (
              <Button
                icon="lock-open-outline"
                mode="contained"
                style={styles.button}
                buttonColor={theme.colors.brand.primary}
                onPress={() => onLogin(email, password)}
              >
                Login
              </Button>
            ) : (
              <ActivityIndicator animating={true} color={MD2Colors.blueA100} />
            )}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  bgCover: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    padding: 20,
  },
  loginContainer: {
    backgroundColor: "rgba(255,255,255,0.8)",
    padding: theme.space[4],
    borderRadius: 10,
  },
  input: {
    marginBottom: 20,
    backgroundColor: "transparent",
  },
  error: {
    textAlign: "center",
    color: "tomato",
  },
  button: {
    borderRadius: 5,
    padding: 6,
    marginTop: 20,
  },
  heading: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: theme.fonts.heading,
  },
});
