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

let IconPeoples: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M765.184 873.941c0 33.28-28.501 60.288-63.83 60.288H63.83C28.501 934.23 0 907.221 0 873.941c0-120.576 123.264-233.258 249.216-277.674-72.79-42.496-121.728-118.059-121.728-204.8v-60.331c0-133.248 114.347-241.365 255.147-241.365S637.78 197.888 637.78 331.136v60.288c0 86.827-48.981 162.304-121.728 204.843 125.91 44.458 249.131 157.098 249.131 277.674z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M848.256 870.57h126.933c27.008 0 48.811-20.65 48.811-46.08 0-92.245-94.293-178.346-190.55-212.309 55.638-32.512 93.1-90.282 93.1-156.672v-46.165c0-101.888-87.425-184.576-195.115-184.576-13.398 0-26.454 1.28-39.126 3.712 15.488 31.147 24.15 65.92 24.15 102.613v60.288c0 86.827-24.448 152.747-88.534 204.843 118.742 29.141 218.496 154.795 220.331 274.347z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconPeoples.defaultProps = {
  size: 18,
};

IconPeoples = React.memo ? React.memo(IconPeoples) : IconPeoples;

export default IconPeoples;