import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from '../../../utils/Colors'
import CustomText from "../../../screens/IntroScreen/components/UI/CustomText";

export const SubSlide = ({ subtitle, des, last, NextSlide, EnterApp }) => {
  const bgColor = last ? "#2CB9B0" : "rgba(12,13,52,0.05)";
  const labelCover = last ? "#ffffff" : Colors.text;
  const onPressHandler = last ? EnterApp : NextSlide;
  // const onPressHandler = last ? navigation.navigate('Login') : NextSlide;

  return (
    <View style={styles.subSlideContainer}>
      <CustomText style={styles.subTitle}>{subtitle}</CustomText>
      <View style={{ width: '90%' }}>
        <Text style={styles.des}>{des}</Text>
      </View>
      <TouchableOpacity onPress={onPressHandler}>
        <View style={[styles.buttonContainer, { backgroundColor: bgColor }]}>
          <Text style={[styles.buttonLabel, { color: labelCover }]}>
            {/* {last ? "Start App" : "Next"} */}
            Continue
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  subSlideContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  subTitle: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center'

  },
  des: {
    top: 10,
    fontSize: 15,
    lineHeight: 25,
    color: Colors.text,
    marginBottom: 20,
    textAlign: 'center'

  },
  buttonContainer: {
    marginTop: 10,
    borderRadius: 15,
    height: 50,
    width: 245,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: "500",
  },
});
