import {Platform, StyleSheet} from 'react-native';

import {colors} from '../../constants/colors';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeContainer: {
    marginTop: verticalScale(60),
    marginLeft: horizontalScale(20),
    marginBottom: verticalScale(20),
  },
  textTitle: {
    fontFamily: 'Avenir-Book',
    color: '#000',
    fontWeight: '800',
    fontSize: moderateScale(20),
    lineHeight: verticalScale(27.32),
  },
  textSubtitle: {
    fontFamily: 'Avenir-Book',
    color: '#000',
    fontWeight: '400',
    fontSize: moderateScale(16),
    lineHeight: verticalScale(21.86),
  },
  greyTitle: {
    marginLeft: horizontalScale(20),
    fontWeight: '800',
    fontFamily: 'Avenir-Book',
    fontSize: moderateScale(14),
    color: '#9B9898',
    textTransform: 'uppercase',
  },
  cardContainer: {
    backgroundColor: colors.primary,
    alignSelf: 'center',
    width: horizontalScale(286),
    height: verticalScale(143),
    marginVertical: verticalScale(20),
    borderRadius: moderateScale(20),
    paddingVertical: verticalScale(21),
    paddingHorizontal: horizontalScale(19),
    ...Platform.select({
      android: {
        elevation: 15,
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
  cardText: {
    color: '#fff',
    fontFamily: 'Avenir-Book',
    fontWeight: '800',
    fontSize: moderateScale(16),
    lineHeight: verticalScale(21.86),
  },
  cardPoints: {
    color: '#fff',
    fontFamily: 'Avenir-Book',
    fontWeight: '800',
    fontSize: moderateScale(32),
    lineHeight: verticalScale(43.71),
    textAlign: 'center',
    marginTop: verticalScale(7),
  },
  flatlistContainer: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(20),
    backgroundColor: '#fff',
    height: verticalScale(350),
    borderRadius: moderateScale(10),
  },
  buttonsContainer: {
    marginTop: verticalScale(43),
    marginHorizontal: horizontalScale(20),
    marginBottom: verticalScale(40),
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnAll: {
    height: verticalScale(50),
    borderRadius: moderateScale(10),
    width: '100%',
  },
  btnText: {
    fontFamily: 'Avenir-Book',
    fontWeight: '800',
    fontSize: moderateScale(16),
    color: '#fff',
  },
  singleBtn: {
    height: verticalScale(50),
    width: horizontalScale(170),
  },
});
