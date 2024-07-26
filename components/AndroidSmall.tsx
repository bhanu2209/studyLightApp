import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import TextGenerator from "./TextGenerator";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const AndroidSmall = ({ onClose }) => {
  const [icon1Visible, setIcon1Visible] = useState(false);
  const navigation = useNavigation();

  const openIcon1 = useCallback(() => {
    setIcon1Visible(true);
  }, []);

  const closeIcon1 = useCallback(() => {
    setIcon1Visible(false);
  }, []);

  return (
    <>
      <View style={styles.androidSmall1}>
        <View style={styles.saveChatAsParent}>
          <Text style={[styles.saveChatAs, styles.saveTypo]}>
            save chat as:
          </Text>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Text style={[styles.saveChatAs1, styles.saveTypo]}>
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
        <Pressable
          style={[styles.pressable, styles.pressablePosition]}
          onPress={openIcon1}
        >
          <Image
            style={styles.icon1}
            contentFit="cover"
            source={require("../assets/2734822-1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.pressable1, styles.pressablePosition]}
          onPress={() => navigation.navigate("TextGenerator")}
        >
          <Image
            style={styles.icon1}
            contentFit="cover"
            source={require("../assets/2099166-1.png")}
          />
        </Pressable>
      </View>

      <Modal animationType="fade" transparent visible={icon1Visible}>
        <View style={styles.icon1Overlay}>
          <Pressable style={styles.icon1Bg} onPress={closeIcon1} />
          <TextGenerator onClose={closeIcon1} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  saveTypo: {
    height: 37,
    width: 138,
    textAlign: "left",
    color: Color.colorDarkslateblue_200,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  groupChildPosition: {
    borderStyle: "solid",
    backgroundColor: Color.colorSteelblue_200,
    left: 16,
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
  pressablePosition: {
    top: 18,
    position: "absolute",
  },
  saveChatAs: {
    top: 0,
    left: 0,
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
    left: 24,
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
    top: 112,
    left: 17,
    width: 175,
    height: 488,
    position: "absolute",
  },
  icon1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  icon1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon1: {
    width: "100%",
    height: "100%",
  },
  pressable: {
    left: 182,
    width: 25,
    height: 25,
  },
  pressable1: {
    width: 22,
    height: 17,
    left: 16,
    top: 18,
  },
  androidSmall1: {
    backgroundColor: Color.colorGainsboro_100,
    width: 219,
    height: 800,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default AndroidSmall;
