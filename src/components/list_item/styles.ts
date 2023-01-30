import {StyleSheet} from 'react-native';

import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics';

export default StyleSheet.create({
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(8),
  },
  imgContainer: {
    width: horizontalScale(55),
    height: horizontalScale(55),
    borderRadius: moderateScale(10),
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  descriptionContainer: {
    marginLeft: horizontalScale(11),
    width: horizontalScale(144),
  },
  productNameText: {
    color: '#000',
    fontFamily: 'Avenir-Book',
    fontWeight: '800',
    fontSize: moderateScale(14),
  },
  dateText: {
    color: '#000',
    marginTop: verticalScale(7),
    fontWeight: '400',
    fontSize: moderateScale(12),
  },
  pointsText: {
    fontWeight: '800',
    fontSize: moderateScale(16),
    color: '#000',
    fontFamily: 'Avenir-Book',
    marginLeft: horizontalScale(25),
    flexGrow: 1,
  },
  iconContainer: {
    marginLeft: horizontalScale(17.23),
    marginRight: horizontalScale(10),
    color: '#000',
    fontWeight: '800',
    fontFamily: 'Avenir-Book',
  },
});
