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

let IconShanchu1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M804.8128 239.035733A34.133333 34.133333 0 0 1 836.266667 273.2032l-0.1024 2.56-48.725334 617.079467a68.266667 68.266667 0 0 1-64.6144 62.805333l-3.4304 0.085333H304.605867a68.266667 68.266667 0 0 1-67.703467-59.477333l-0.341333-3.413333-48.725334-617.096534a34.133333 34.133333 0 0 1 67.754667-7.901866l0.3072 2.542933L304.605867 887.466667h414.788266l48.708267-617.079467A34.133333 34.133333 0 0 1 802.269867 238.933333l2.56 0.1024z"
        fill={getIconColor(color, 0, '#444444')}
      />
      <Path
        d="M887.466667 204.8a34.133333 34.133333 0 0 1 2.56 68.181333L887.466667 273.066667H136.533333a34.133333 34.133333 0 0 1-2.56-68.181334L136.533333 204.8h750.933334z"
        fill={getIconColor(color, 1, '#444444')}
      />
      <Path
        d="M597.333333 68.266667a102.4 102.4 0 0 1 102.331734 98.56L699.733333 170.666667v68.266666a34.133333 34.133333 0 0 1-68.181333 2.56L631.466667 238.933333v-68.266666a34.133333 34.133333 0 0 0-31.573334-34.048L597.333333 136.533333H426.666667a34.133333 34.133333 0 0 0-34.048 31.573334L392.533333 170.666667v68.266666a34.133333 34.133333 0 0 1-68.181333 2.56L324.266667 238.933333v-68.266666a102.4 102.4 0 0 1 98.56-102.331734L426.666667 68.266667h170.666666z"
        fill={getIconColor(color, 2, '#444444')}
      />
      <Path
        d="M682.666667 750.933333v34.133334a34.133333 34.133333 0 0 1-34.133334 34.133333H375.466667a34.133333 34.133333 0 0 1-34.133334-34.133333v-34.133334h341.333334z"
        fill={getIconColor(color, 3, '#00B386')}
      />
    </Svg>
  );
};

IconShanchu1.defaultProps = {
  size: 18,
};

IconShanchu1 = React.memo ? React.memo(IconShanchu1) : IconShanchu1;

export default IconShanchu1;
