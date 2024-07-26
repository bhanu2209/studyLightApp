import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SPEECH = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.speech, styles.speechLayout]}>
      <View style={[styles.androidLarge1, styles.saveChatAsPosition]}>
        <View style={styles.saveChatAsParent}>
          <Text style={[styles.saveChatAs, styles.saveTypo]}>
            save chat as:
          </Text>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Text style={[styles.saveChatAs1, styles.pressablePosition]}>
            save chat as:
          </Text>
          <View style={[styles.groupItem, styles.groupBg]} />
          <Text style={styles.save}>{`save `}</Text>
          <View style={[styles.groupInner, styles.groupBg]} />
          <Text style={[styles.chatHistory, styles.chatHistoryTypo]}>
            Chat history:
          </Text>
          <Text style={[styles.postYourDoubt, styles.chatHistoryTypo]}>
            Post your doubt:
          </Text>
          <View style={[styles.rectangleView, styles.groupChildPosition]} />
          <Image
            style={[styles.component3variant4Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/component-3variant4.png")}
          />
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/3303893-1.png")}
          />
          <Text style={styles.writeHear}>Write hear.....</Text>
        </View>
        <Image
          style={styles.icon1}
          contentFit="cover"
          source={require("../assets/2734822-1.png")}
        />
        <Pressable
          style={[styles.pressable, styles.pressablePosition]}
          onPress={() => navigation.navigate("SpeechGenerator")}
        >
          <Image
            style={styles.icon2}
            contentFit="cover"
            source={require("../assets/2099166-1.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  speechLayout: {
    height: 800,
    width: 235,
    backgroundColor: Color.colorAliceblue_100,
  },
  saveChatAsPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  saveTypo: {
    height: 37,
    width: 138,
    textAlign: "left",
    color: Color.colorDarkslateblue_200,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
  },
  groupChildPosition: {
    borderStyle: "solid",
    left: 16,
    backgroundColor: Color.colorSteelblue_200,
    position: "absolute",
  },
  pressablePosition: {
    left: 24,
    position: "absolute",
  },
  groupBg: {
    backgroundColor: Color.colorSteelblue_200,
    position: "absolute",
  },
  chatHistoryTypo: {
    height: 14,
    left: 2,
    textAlign: "left",
    color: Color.colorDarkslateblue_200,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  iconLayout: {
    height: 15,
    width: 15,
    top: 467,
    position: "absolute",
  },
  saveChatAs: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    top: 22,
    borderRadius: Border.br_8xs,
    borderColor: Color.colorWhite,
    borderWidth: 2,
    width: 154,
    height: 30,
  },
  saveChatAs1: {
    top: 28,
    height: 37,
    width: 138,
    textAlign: "left",
    color: Color.colorDarkslateblue_200,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
  },
  groupItem: {
    top: 107,
    left: 63,
    borderRadius: Border.br_5xs,
    width: 60,
    height: 20,
  },
  save: {
    top: 108,
    left: 75,
    width: 68,
    height: 31,
    textAlign: "left",
    color: Color.colorDarkslateblue_200,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  groupInner: {
    top: 182,
    left: 10,
    borderRadius: Border.br_base,
    width: 165,
    height: 161,
  },
  chatHistory: {
    top: 159,
    width: 97,
  },
  postYourDoubt: {
    top: 436,
    width: 128,
  },
  rectangleView: {
    top: 460,
    borderRadius: Border.br_3xs,
    borderColor: Color.colorDarkslateblue_200,
    borderWidth: 1,
    width: 149,
    height: 28,
  },
  component3variant4Icon: {
    left: 146,
  },
  icon: {
    left: 22,
  },
  writeHear: {
    left: 47,
    fontSize: FontSize.size_xs,
    color: Color.colorGray_300,
    width: 96,
    height: 16,
    top: 467,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  saveChatAsParent: {
    top: 91,
    left: 30,
    width: 175,
    height: 488,
    position: "absolute",
  },
  icon1: {
    top: 16,
    left: 191,
    width: 25,
    height: 25,
    position: "absolute",
  },
  icon2: {
    width: "100%",
    height: "100%",
  },
  pressable: {
    top: 20,
    width: 22,
    height: 17,
  },
  androidLarge1: {
    overflow: "hidden",
    height: 800,
    width: 235,
    backgroundColor: Color.colorAliceblue_100,
  },
  speech: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default SPEECH;
