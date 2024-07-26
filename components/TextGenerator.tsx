import React, { useState, useCallback } from "react";
import { View, StyleSheet, Text, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import AndroidSmall from "./AndroidSmall";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const TextGenerator = ({ onClose }) => {
  const [icon2Visible, setIcon2Visible] = useState(false);
  const navigation = useNavigation();

  const openIcon2 = useCallback(() => {
    setIcon2Visible(true);
  }, []);

  const closeIcon2 = useCallback(() => {
    setIcon2Visible(false);
  }, []);

  return (
    <>
      <View style={styles.textGenerator}>
        <View style={[styles.textGeneratorChild, styles.icon7Layout]} />
        <Image
          style={styles.rightArrowIcon}
          contentFit="cover"
          source={require("../assets/right-arrow.png")}
        />
        <Text style={styles.search}>Search.....</Text>
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("ProfilePage")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/3135715-1.png")}
          />
        </Pressable>
        <Image
          style={[styles.icon1, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/3135715-4.png")}
        />
        <Image
          style={[styles.textGeneratorItem, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Pressable style={styles.pressable1} onPress={openIcon2}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/17093924-2.png")}
          />
        </Pressable>
        <Pressable
          style={styles.pressable2}
          onPress={() => navigation.navigate("Interface")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/2099166-1.png")}
          />
        </Pressable>
        <Image
          style={[styles.textGeneratorInner, styles.rectangleIconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-67.png")}
        />
        <Image
          style={[styles.rectangleIcon, styles.rectangleIconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-68.png")}
        />
        <Image
          style={[styles.icon4, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/6873405-1.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.textChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-6.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.textChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-6.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.textChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-10.png")}
        />
        <Image
          style={[styles.textGeneratorChild3, styles.textChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-11.png")}
        />
        <Image
          style={[styles.textGeneratorChild4, styles.textChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-11.png")}
        />
        <Image
          style={[styles.textGeneratorChild5, styles.textChildPosition]}
          contentFit="cover"
          source={require("../assets/vector-7.png")}
        />
        <Image
          style={[styles.textGeneratorChild6, styles.textChildPosition]}
          contentFit="cover"
          source={require("../assets/vector-8.png")}
        />
        <Pressable
          style={[styles.rectangleParent, styles.instanceChildLayout]}
          onPress={() => navigation.navigate("Interface")}
        >
          <View style={[styles.instanceChild, styles.instanceChildLayout]} />
          <View style={[styles.ellipseParent, styles.groupChildLayout]}>
            <Image
              style={[styles.groupChild, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-14.png")}
            />
            <Image
              style={[styles.homeIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/home.png")}
            />
          </View>
          <Image
            style={[styles.voiceIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/voice.png")}
          />
          <Image
            style={[styles.icon5, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/10413931-1.png")}
          />
          <Image
            style={[styles.icon6, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/2896405-1.png")}
          />
          <Image
            style={[styles.icon7, styles.icon7Layout]}
            contentFit="cover"
            source={require("../assets/3304407-1.png")}
          />
        </Pressable>
      </View>

      <Modal animationType="fade" transparent visible={icon2Visible}>
        <View style={styles.icon2Overlay}>
          <Pressable style={styles.icon2Bg} onPress={closeIcon2} />
          <AndroidSmall onClose={closeIcon2} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  icon7Layout: {
    height: 36,
    position: "absolute",
  },
  iconLayout1: {
    height: 40,
    width: 40,
    position: "absolute",
  },
  rectangleIconLayout: {
    height: 126,
    width: 232,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  textChildLayout: {
    width: 136,
    borderRadius: Border.br_3xs,
    position: "absolute",
    maxHeight: "100%",
  },
  textChildPosition: {
    top: 183,
    width: 136,
    borderRadius: Border.br_3xs,
    left: 98,
    position: "absolute",
  },
  instanceChildLayout: {
    width: 393,
    position: "absolute",
  },
  groupChildLayout: {
    height: 62,
    width: 68,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    width: 50,
    position: "absolute",
  },
  iconPosition: {
    top: 31,
    width: 50,
    height: 47,
    position: "absolute",
  },
  textGeneratorChild: {
    top: 670,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorGainsboro_100,
    width: 289,
    left: 36,
  },
  rightArrowIcon: {
    top: 671,
    left: 276,
    height: 35,
    width: 40,
    position: "absolute",
  },
  search: {
    top: 679,
    left: 69,
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: "#464866",
    textAlign: "left",
    position: "absolute",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  pressable: {
    left: 293,
    width: 47,
    height: 47,
    top: 23,
    position: "absolute",
  },
  icon1: {
    top: 214,
    left: 311,
  },
  textGeneratorItem: {
    left: 56,
    top: 23,
    height: 40,
  },
  icon2Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  icon2Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  pressable1: {
    top: 32,
    width: 37,
    height: 28,
    left: 98,
    position: "absolute",
  },
  pressable2: {
    left: 14,
    top: 15,
    width: 22,
    height: 17,
    position: "absolute",
  },
  textGeneratorInner: {
    top: 128,
    left: 76,
  },
  rectangleIcon: {
    top: 304,
    left: 79,
  },
  icon4: {
    top: 290,
    left: 36,
  },
  vectorIcon: {
    top: 165,
    left: 116,
  },
  textGeneratorChild3: {
    top: 367,
    left: 124,
  },
  textGeneratorChild4: {
    top: 390,
    left: 166,
  },
  textGeneratorChild5: {
    maxHeight: "100%",
  },
  textGeneratorChild6: {
    height: 0,
  },
  instanceChild: {
    top: 29,
    borderRadius: Border.br_6xs,
    backgroundColor: Color.colorWhite,
    height: 53,
    left: 0,
  },
  groupChild: {
    left: 0,
  },
  homeIcon: {
    top: 1,
    left: 8,
    height: 56,
  },
  ellipseParent: {
    left: 16,
  },
  voiceIcon: {
    top: 30,
    left: 106,
    height: 53,
  },
  icon5: {
    left: 181,
  },
  icon6: {
    left: 249,
  },
  icon7: {
    top: 35,
    left: 333,
    width: 36,
  },
  rectangleParent: {
    top: 715,
    left: -17,
    height: 83,
  },
  textGenerator: {
    backgroundColor: "rgba(75, 173, 233, 0.51)",
    width: 360,
    height: 800,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default TextGenerator;
