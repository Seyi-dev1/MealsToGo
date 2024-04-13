import React, { useContext, useRef, useState } from "react";
import { Camera, CameraType } from "expo-camera";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const CameraScreen = ({ navigation }) => {
  let cameraRef = useRef();
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  const { user } = useContext(AuthenticationContext);

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = {
        quality: 1,
        base64: true,
        skipProcessing: true,
        exif: false,
      };
      const data = await cameraRef.current.takePictureAsync(options);
      const source = data.uri;
      if (source) {
        await cameraRef.current.pausePreview();
        AsyncStorage.setItem(`${user.uid}-photo`, source);
        navigation.goBack();
      }
    }
  };

  if (!permission) {
    // Camera permissions are still loading
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text>Checking Permission</Text>
      </View>
    );
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <View style={styles.cameraContainer}>
      <Camera style={{ flex: 1 }} type={type} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={takePicture}>
            <View style={styles.shoot}>
              <Entypo name="camera" size={24} color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleCameraType()}>
            <View style={styles.flipCamera}>
              <MaterialIcons name="flip-camera-ios" size={24} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    position: "relative",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
  },
  shoot: {
    backgroundColor: "teal",
    padding: 15,
    justifyContent: "center",
    borderRadius: 50,
  },
  flipCamera: {
    backgroundColor: "teal",
    padding: 15,
    justifyContent: "center",
    borderRadius: 50,
  },
});
