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

let IconIconSaoma: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M852.0003125 599.4996875c20.25 0 36.98624999 15.04874999 39.6346875 34.5721875l0.365625 5.428125v212.5003125c0 20.25-15.04874999 36.98624999-34.573125 39.6346875l-5.428125 0.365625H639.5c-22.09124999 0-40.0003125-17.9090625-40.0003125-40.0003125 0-20.25 15.04874999-36.98624999 34.5721875-39.635625L639.5 812h172.5V639.5c0-20.25 15.0478125-36.98624999 34.5721875-39.6346875l5.428125-0.365625z m-680.000625 0c20.25 0 36.98624999 15.04874999 39.635625 34.5721875L212 639.5v172.5h172.5c20.25 0 36.98624999 15.0478125 39.6346875 34.5721875l0.365625 5.428125c0 20.25-15.04874999 36.98624999-34.5721875 39.6346875l-5.428125 0.365625H171.9996875c-20.25 0-36.98624999-15.04874999-39.6346875-34.573125l-0.365625-5.428125V639.5c0-22.09124999 17.9090625-40.0003125 40.0003125-40.0003125z m680.000625-467.499375c20.25 0 36.98624999 15.0478125 39.6346875 34.5721875l0.365625 5.428125V384.5c0 22.09124999-17.9090625 40.0003125-40.0003125 40.0003125-20.25 0-36.98624999-15.04874999-39.635625-34.5721875L812 384.5V212H639.5c-20.25 0-36.98624999-15.0478125-39.6346875-34.5721875l-0.365625-5.428125c0-20.25 15.04874999-36.98624999 34.5721875-39.6346875l5.428125-0.365625h212.5003125z m-467.5003125 0c22.09124999 0 40.0003125 17.908125 40.0003125 39.999375 0 20.25-15.04874999 36.98624999-34.5721875 39.635625L384.5 212H212v172.5c0 20.25-15.0478125 36.98624999-34.5721875 39.6346875l-5.428125 0.365625c-20.25 0-36.98624999-15.04874999-39.6346875-34.5721875l-0.365625-5.428125V171.9996875c0-20.25 15.04874999-36.98624999 34.573125-39.6346875l5.428125-0.365625H384.5z"
        fill={getIconColor(color, 0, '#333330')}
      />
      <Path
        d="M203.00928009 481.10071075h602.5314331C822.60567796 481.10071075 836.44000244 494.93503524 836.44000244 512c0 15.64264297-11.62407697 28.57099771-26.70619189 30.61685264l-4.19309736 0.28243661h-602.5314331c-17.06496476 0-30.89856505-13.83432448-30.89856506-30.89928925 0-15.64264297 11.62407697-28.57099771 26.7061919-30.61685264l4.19309736-0.28243661z"
        fill={getIconColor(color, 1, '#f4ea2a')}
      />
    </Svg>
  );
};

IconIconSaoma.defaultProps = {
  size: 18,
};

IconIconSaoma = React.memo ? React.memo(IconIconSaoma) : IconIconSaoma;

export default IconIconSaoma;