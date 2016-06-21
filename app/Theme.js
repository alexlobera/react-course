import {spacing, typography} from 'material-ui/styles';
import {pink, pinkA200, pink900, pink700, pinkA400, pinkA100, green100, fullWhite, grey600, green500, green700, deepOrange500, cyan500, cyan600, cyan700, grey900} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';

const Theme = {
  spacing: spacing.default,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: pink900,
    primary2Color: pink900,
    primary3Color: grey600,
    accent1Color: pinkA200,
    accent2Color: pinkA400,
    accent3Color: pinkA100,
    textColor: fullWhite,
    alternateTextColor: '#303030',
    canvasColor: '#303030',
    borderColor: fade(fullWhite, 0.3),
    disabledColor: fade(fullWhite, 0.3),
    pickerHeaderColor: fade(fullWhite, 0.12),
    clockCircleColor: fade(fullWhite, 0.12),
  }
};

export default Theme;