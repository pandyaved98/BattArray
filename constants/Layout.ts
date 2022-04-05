// Packages imports
import { Dimensions } from 'react-native';

// constants
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

// exporting the default layout
export default {
    window: {
        width,
        height,
    },
    isSmallDevice: width < 375,
};