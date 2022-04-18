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

let IconBill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M297.56978093 883.17001324a103.22061322 103.22061322 0 0 1-103.0792151-103.07921511L194.49056583 243.90920187A103.22061322 103.22061322 0 0 1 297.56978093 140.82998676l428.93113719 0a103.22061322 103.22061322 0 0 1 103.07921511 103.07921511l0 536.11089721a103.22061322 103.22061322 0 0 1-103.07921511 103.07921511z m0-696.95123629a57.83182302 57.83182302 0 0 0-57.76112397 57.76112397l0 536.11089721a57.83182302 57.83182302 0 0 0 57.76112397 57.76112396l428.93113719 0a57.83182302 57.83182302 0 0 0 57.76112397-57.76112396L784.26204209 243.90920187a57.83182302 57.83182302 0 0 0-57.76112397-57.76112396z"
        fill={getIconColor(color, 0, '#3da1ff')}
      />
      <Path
        d="M342.32227966 534.69439509a22.69439509 22.69439509 0 1 1 0-45.31809113l339.35544068 0a22.69439509 22.69439509 0 1 1 0 45.31809113zM342.32227966 641.8741551a22.69439509 22.69439509 0 1 1 0-45.03529493l231.53938921 0a22.69439509 22.69439509 0 1 1 0 45.38879019zM342.32227966 427.16113983a22.69439509 22.69439509 0 1 1 0-45.38879019l339.35544068 0a22.69439509 22.69439509 0 1 1 0 45.38879019z"
        fill={getIconColor(color, 1, '#3da1ff')}
      />
    </Svg>
  );
};

IconBill.defaultProps = {
  size: 18,
};

IconBill = React.memo ? React.memo(IconBill) : IconBill;

export default IconBill;