
import { requireNativeComponent } from 'react-native';
import { ViewPropTypes } from 'deprecated-react-native-prop-types'
import PropTypes from 'prop-types';

var viewProps = {
   name: 'SmallNativeAd3',
   propTypes: {
      ...ViewPropTypes,
      requestOptions: PropTypes.object.require,
      onNativeAdLoaded: PropTypes.func,
      onNativeAdFailedToLoad: PropTypes.func,
      onNativeAdClicked: PropTypes.func,
   }

}
module.exports = requireNativeComponent('SmallNativeAd3', viewProps);
