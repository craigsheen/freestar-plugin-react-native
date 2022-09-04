
import { requireNativeComponent } from 'react-native';
import { ViewPropTypes } from 'deprecated-react-native-prop-types'
import PropTypes from 'prop-types';

var viewProps = {
   name: 'MrecBannerAd2',
   propTypes: {
      ...ViewPropTypes,
      requestOptions: PropTypes.object.require,
      onBannerAdLoaded: PropTypes.func,
      onBannerAdFailedToLoad: PropTypes.func,
      onBannerAdClicked: PropTypes.func,
   }

}
module.exports = requireNativeComponent('MrecBannerAd2', viewProps);
