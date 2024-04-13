import { useContext, useEffect, useState } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Avatar } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { theme } from "../../../infrastructure/Theme";
import { List } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";

export const SettingsScreen = ({ navigation }) => {
  const { onLogOut, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  useFocusEffect(() => {
    const getProfilePicture = async (currentUser) => {
      const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
      setPhoto(photoUri);
    };
    getProfilePicture(user);
  });

  return (
    <SafeAreaView style={styles.settingsScreen}>
      <View style={styles.avatar}>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!photo ? (
            <Avatar.Icon size={100} icon={"human"} backgroundColor="teal" />
          ) : (
            <Avatar.Image
              size={180}
              icon={"human"}
              sbackgroundColor="#2182BD"
              source={{ uri: photo }}
            />
          )}
        </TouchableOpacity>
        <Text style={{ marginTop: 20, fontWeight: "500" }}>{user.email}</Text>
      </View>
      <List.Section style={{ marginTop: 30 }}>
        <List.Item
          style={{ padding: theme.space[3] }}
          title="Favourites"
          left={(props) => <List.Icon {...props} color="teal" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <List.Item
          style={{ padding: theme.space[3] }}
          title="Logout"
          left={(props) => <List.Icon {...props} color="teal" icon="door" />}
          onPress={() => onLogOut()}
        />
      </List.Section>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  settingsScreen: {
    flex: 1,
  },
  avatar: {
    alignItems: "center",
    marginTop: 20,
  },
});
