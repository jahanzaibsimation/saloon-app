import React from "react";
import {
  View,
  Text,
  Animated,
  StyleSheet,
  Dimensions,
  StatusBar,
} from "react-native";
import slides from "../../../../dummyData/IntroSlides";
//PropTypes check
import PropTypes from "prop-types";
import { Image } from "native-base";

const TICKER_HEIGHT = 50;
const { height, width } = Dimensions.get("window");

export const Ticker = ({ scrollX }) => {
  const inputRange = [0, width, width * 2];
  const translateY = scrollX.interpolate({
    inputRange,
    outputRange: [0, -TICKER_HEIGHT, -TICKER_HEIGHT * 2],
  });
  return (

    <Image
      style={{ alignSelf: 'center' }}
      height={100}
      width={250}
      resizeMode='contain'
      alt='salonsymphony'
      resizeMethod='auto'
      source={require('../../../../assets/logos/SalonSymphony-Logo-White-Full.png')}
    />


  );
};

Ticker.propTypes = {
  scrollX: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  tickerContainer: {
    position: "absolute",
    width,
    top:
      Platform.OS === "android"
        ? StatusBar.currentHeight + 10
        : height > 667
          ? 50
          : 35,
    alignItems: "center",
    overflow: "hidden",
    height: TICKER_HEIGHT,
  },
  tickerText: {
    textAlign: "center",
    fontSize: 30,
    lineHeight: TICKER_HEIGHT,
    textTransform: "uppercase",
    fontWeight: "800",
    color: "#2CB9B0",
    // fontFamily: "Roboto-Medium",
  },
});
