
import { requireNativeComponent } from 'react-native';
import { ViewPropTypes } from 'deprecated-react-native-prop-types'
import PropTypes from 'prop-types';

var viewProps = {
   name: 'BannerAd',
   propTypes: {
      ...ViewPropTypes,
      requestOptions: PropTypes.object.require,
      onAdLoaded: PropTypes.func,
      onAdFailedToLoad: PropTypes.func,
      onAdClicked: PropTypes.func,
   }

}
module.exports = requireNativeComponent('BannerAd', viewProps);
