/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconPlus: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M960.328353 502.30929c0-244.530272-200.372563-442.760033-447.545012-442.760033-247.172449 0-447.545012 198.22976-447.545012 442.760033 0 1.440815 0.016373 2.87856 0.030699 4.316306-0.014326 1.437745-0.030699 2.87549-0.030699 4.316306 0 244.530272 200.372563 442.760033 447.545012 442.760033 247.172449 0 447.545012-198.22976 447.545012-442.760033 0-1.440815-0.017396-2.87856-0.030699-4.316306C960.310957 505.187851 960.328353 503.751129 960.328353 502.30929zM768.394996 523.550057c0 16.020882-12.986779 29.008684-29.008684 29.008684L558.716486 552.558741l0 180.669826c0 16.020882-12.986779 29.008684-29.006637 29.008684l-33.851992 0c-16.020882 0-29.008684-12.986779-29.008684-29.008684L466.849172 552.558741 286.18037 552.558741c-16.020882 0-29.007661-12.986779-29.007661-29.008684l0-33.850969c0-16.019859 12.985756-29.007661 29.007661-29.007661l180.669826 0L466.850196 280.022625c0-16.019859 12.986779-29.007661 29.008684-29.007661l33.851992 0c16.018835 0 29.006637 12.986779 29.006637 29.007661l0 180.669826 180.669826 0c16.020882 0 29.008684 12.986779 29.008684 29.007661L768.396019 523.550057z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconPlus.defaultProps = {
  size: 18,
};

IconPlus = React.memo ? React.memo(IconPlus) : IconPlus;

export default IconPlus;