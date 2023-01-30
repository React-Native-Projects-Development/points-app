import {Platform, StyleSheet} from 'react-native';

import {colors} from '../../constants/colors';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics';

export default StyleSheet.create({
  scrollview: {flex: 1},
  header: {
    height: verticalScale(150),
    backgroundColor: '#CFD6FF',
    justifyContent: 'flex-end',
    paddingHorizontal: horizontalScale(20),
  },
  headerText: {
    fontFamily: 'Avenir-Book',
    fontSize: moderateScale(24),
    fontWeight: '800',
    color: '#000',
    marginBottom: verticalScale(24),
  },
  contentContainer: {marginHorizontal: horizontalScale(20)},
  imgContainer: {
    marginTop: verticalScale(19),
    backgroundColor: '#fff',
    height: verticalScale(350),
    borderRadius: moderateScale(10),
    ...Platform.select({
      android: {
        elevation: 8,
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: verticalScale(4),
        },
        shadowRadius: moderateScale(4),
        shadowOpacity: 0.5,
      },
    }),
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: moderateScale(10),
  },
  greyText: {
    marginTop: verticalScale(32),
    fontSize: moderateScale(14),
    fontWeight: '800',
    color: '#9B9898',
  },
  descriptionText: {
    marginTop: verticalScale(19),
    fontSize: moderateScale(16),
    fontWeight: '800',
    color: '#000',
  },
  pointsDescriptionText: {
    marginTop: verticalScale(20),
    fontSize: moderateScale(14),
    fontWeight: '800',
    color: '#9B9898',
  },
  pointsText: {
    marginTop: verticalScale(32),
    fontSize: moderateScale(24),
    fontWeight: '800',
    color: '#000',
  },
  btn: {
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: colors.primary,
    marginTop: verticalScale(47),
    width: '100%',
    height: 50,
    borderRadius: moderateScale(10),
    marginBottom: verticalScale(40),
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '800',
    fontSize: moderateScale(16),
  },
});
