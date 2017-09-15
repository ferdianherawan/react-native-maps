import PropTypes from 'prop-types';
import React from 'react';
import {
  StyleSheet,
  ViewPropTypes,
} from 'react-native';
import decorateMapComponent, {
  SUPPORTED,
  USES_DEFAULT_IMPLEMENTATION,
} from './decorateMapComponent';

const propTypes = {
  ...ViewPropTypes,
  tooltip: PropTypes.bool,
  onPress: PropTypes.func,
  
  testID: PropTypes.string,
  importantForAccessibility: PropTypes.string,
  onLayout: PropTypes.bool,
  renderToHardwareTextureAndroid: PropTypes.bool,
  accessibilityLabel: PropTypes.string,
  accessibilityLiveRegion: PropTypes.string,
  accessibilityComponentType: PropTypes.string,
};

const defaultProps = {
  tooltip: false,
};

class MapCallout extends React.Component {
  render() {
    const AIRMapCallout = this.getAirComponent();
    return <AIRMapCallout {...this.props} style={[styles.callout, this.props.style]} />;
  }
}

MapCallout.propTypes = propTypes;
MapCallout.defaultProps = defaultProps;

const styles = StyleSheet.create({
  callout: {
    position: 'absolute',
  },
});

module.exports = decorateMapComponent(MapCallout, {
  componentType: 'Callout',
  providers: {
    google: {
      ios: SUPPORTED,
      android: USES_DEFAULT_IMPLEMENTATION,
    },
  },
});
