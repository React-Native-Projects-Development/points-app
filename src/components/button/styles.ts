import {StyleSheet} from 'react-native';

import {colors} from '../../constants/colors';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics';

export default StyleSheet.create({
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    height: verticalScale(50),
    borderRadius: moderateScale(10),
    width: horizontalScale(170),
  },
});
