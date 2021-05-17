import {Dimensions} from 'react-native';

//Screen Constatnts
const SCREEN_HEIGHT = 640;

const SCREEN_WIDTH = 360;

const {height, width} = Dimensions.get('window');
console.log('@@@ height ===============', height);

/**
 * Function to scale a value based on the size of the screen size and the original
 * size used on the design.
 */
// eslint-disable-next-line import/no-anonymous-default-export
export default function (units = 1) {
  return (width / SCREEN_WIDTH) * units;
}

const verticalScale = size => (height / SCREEN_HEIGHT) * size;

export {verticalScale};
