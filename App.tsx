const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Interface from "./screens/Interface";
import Component from "./screens/Component";
import SpeechGenerator from "./screens/SpeechGenerator";
import SpeechGenerator1 from "./screens/SpeechGenerator1";
import TextGenerator from "./components/TextGenerator";
import AndroidSmall from "./components/AndroidSmall";
import ProSolving from "./screens/ProSolving";
import Profile from "./screens/Profile";
import EditProfile from "./screens/EditProfile";
import TODO from "./screens/TODO";
import StudyMaterials from "./screens/StudyMaterials";
import StudyMaterials1 from "./screens/StudyMaterials1";
import Component1 from "./screens/Component1";
import Component2 from "./screens/Component2";
import Ellipse from "./screens/Ellipse";
import SPEECH from "./components/SPEECH";
import FrameComponentSet from "./screens/FrameComponentSet";
import ProfilePage from "./screens/ProfilePage";
import PostSolution from "./screens/PostSolution";
import PostSolution1 from "./screens/PostSolution1";
import PostSolution2 from "./screens/PostSolution2";
import Component3 from "./screens/Component3";
import Component6Variant from "./screens/Component6Variant";
import Main from "./screens/Main";
import Hourglass from "./screens/Hourglass";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Interface"
              component={Interface}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component"
              component={Component}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SpeechGenerator"
              component={SpeechGenerator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SpeechGenerator1"
              component={SpeechGenerator1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TextGenerator"
              component={TextGenerator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidSmall"
              component={AndroidSmall}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProSolving"
              component={ProSolving}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditProfile"
              component={EditProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TODO"
              component={TODO}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StudyMaterials"
              component={StudyMaterials}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StudyMaterials1"
              component={StudyMaterials1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component1"
              component={Component1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component2"
              component={Component2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Ellipse"
              component={Ellipse}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SPEECH"
              component={SPEECH}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FrameComponentSet"
              component={FrameComponentSet}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfilePage"
              component={ProfilePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PostSolution"
              component={PostSolution}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PostSolution1"
              component={PostSolution1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PostSolution2"
              component={PostSolution2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component3"
              component={Component3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Component6Variant"
              component={Component6Variant}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Main"
              component={Main}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Hourglass"
              component={Hourglass}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
