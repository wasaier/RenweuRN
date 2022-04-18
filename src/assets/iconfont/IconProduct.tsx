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

let IconProduct: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M706.486857 527.286857c-21.577143 2.413714-37.741714-8.777143-52.553143-23.917714C602.221714 450.450286 550.509714 397.531429 498.322286 345.197714 463.177143 310.016 461.787429 273.627429 495.286857 238.08A7909.705143 7909.705143 0 0 1 657.664 71.058286C689.481143 39.241143 723.858286 40.338286 755.090286 72.045714a13401.161143 13401.161143 0 0 1 165.376 171.739429c27.611429 29.037714 27.172571 61.952 1.462857 89.673143-56.576 60.964571-115.931429 119.332571-174.262857 178.651428-10.971429 11.117714-24.868571 15.506286-41.216 15.177143"
        fill={getIconColor(color, 0, '#0025ff')}
      />
      <Path
        d="M73.618286 748.141714c0-38.875429-0.146286-77.714286 0-116.553143 0.219429-46.921143 22.784-72.813714 70.802285-73.033142a16346.331429 16346.331429 0 0 1 227.510858 0.109714c44.690286 0.365714 68.571429 24.137143 68.900571 68.937143 0.585143 79.542857 0.475429 159.085714 0.073143 238.592-0.256 48.091429-26.331429 70.473143-73.252572 70.509714-73.984 0.036571-147.968 0.146286-221.988571-0.073143-47.579429-0.109714-71.497143-24.685714-71.972571-71.972571-0.365714-38.838857-0.073143-77.677714-0.073143-116.516572"
        fill={getIconColor(color, 1, '#0025ff')}
      />
      <Path
        d="M885.796571 746.788571c0.036571 38.802286-0.146286 77.641143 0.073143 116.48 0.329143 47.213714-22.016 73.033143-70.070857 73.325715-75.812571 0.438857-151.625143 0.256-227.474286 0C542.646857 936.448 519.862857 910.189714 518.948571 867.328c-1.755429-81.334857-1.755429-162.742857 0.109715-244.077714C519.972571 581.814857 544.877714 559.030857 586.825143 558.701714 664.502857 558.08 742.180571 557.824 819.785143 558.774857c42.130286 0.512 64.768 23.881143 65.755428 65.974857 0.914286 40.630857 0.182857 81.334857 0.256 122.038857"
        fill={getIconColor(color, 2, '#0025ff')}
      />
      <Path
        d="M440.905143 292.717714c0.036571 38.765714 0 77.604571 0.073143 116.370286 0.073143 45.824-25.965714 69.12-68.534857 70.253714-77.531429 2.157714-155.209143 2.011429-232.740572-0.109714C98.706286 478.134857 74.788571 452.827429 74.130286 411.501714a7825.737143 7825.737143 0 0 1-0.073143-243.858285C74.715429 126.098286 97.718857 102.326857 140.068571 101.961143 219.538286 101.229714 298.971429 101.12 378.404571 102.290286c39.716571 0.585143 61.220571 23.369143 62.208 62.939428 1.060571 42.459429 0.219429 84.992 0.292572 127.488"
        fill={getIconColor(color, 3, '#0025ff')}
      />
    </Svg>
  );
};

IconProduct.defaultProps = {
  size: 18,
};

IconProduct = React.memo ? React.memo(IconProduct) : IconProduct;

export default IconProduct;