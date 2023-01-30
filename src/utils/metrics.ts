import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 393;
const guidelineBaseHeight = 852;

// width, marginLeft, marginRight, marginHorizontal, paddingLeft, paddingRight, paddingHorizontal
const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;

// height, marginTop, marginBottom, marginVertical, line-height, paddingTop, paddingBottom, paddingVertical
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;

// fontSize, borderRadius
const moderateScale = (size: number, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

export {horizontalScale, verticalScale, moderateScale};
