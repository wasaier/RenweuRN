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

let IconKongbai: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M371.84 205.97333333c-89.81333333 20.26666667-189.12 36.90666667-225.28 119.57333334-5.76 71.68 73.17333333 55.04 84.8 109.44C242.13333333 516.8 34.24 479.14666667 34.24 566.82666667c-2.88 35.52 65.17333333 37.65333333 69.54666667 199.25333333 21.01333333 170.98666667 312.96 109.44 393.38666666 4.37333333 95.68-92.05333333 206.50666667 64.53333333 390.50666667 11.62666667 57.28-18.13333333 102.18666667-60.16 102.18666667-128.21333333-5.76-107.2-108.69333333-87.68-172.48-163.73333334-144.21333333-138.34666667 45.65333333-149.22666667-89.81333334-246.29333333-102.82666667-92.90666667-325.97333333-45.86666667-355.73333333-37.86666667z m0 0"
        fill={getIconColor(color, 0, '#EFF0FD')}
      />
      <Path
        d="M839.8 701.9v-2c-1.4-7.5-7.5-12.9-14.9-12.9-6.8 0-12.2 4.1-14.3 10.2v4.1c0 3.4 0.7 6.1 2.7 8.1l-8.2 8.2v-29.9c11.5-2.7 20.4-12.9 20.4-25.1v-5.4c-2.7-11.5-12.9-20.4-25.1-20.4-10.9 0-20.4 6.8-23.8 16.3 0 0.7 0 0.7-0.7 1.4v8.1c0 11.5 7.5 21.7 18.3 25.1h2c0.7 0 1.4 0 2 0.7v42.1l-14.3-14.3c1.4-2 2-5.4 2-8.2v-2c-1.4-7.5-7.5-12.9-14.9-12.9-6.1 0-12.2 4.1-14.3 9.5v4.8c0 7.5 4.8 13.6 11.5 14.9h4.8c3.4 0 6.1-1.4 8.1-3.4l17.7 17.7v21.7c0 2 2 4.1 4.1 4.1 2 0 4.1-2 4.1-4.1v-34l11.5-11.5c2 1.4 3.4 2 6.1 2.7h4.1c5 1.4 11.1-5.4 11.1-13.6z m0 0"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M814 763.1c0 3.4-6.8 6.1-15.6 6.1s-15.6-2.7-15.6-6.1c0-3.4 6.8-6.1 15.6-6.1s15.6 2.7 15.6 6.1z m0 0"
        fill={getIconColor(color, 2, '#FFA516')}
      />
      <Path
        d="M802.4 759.7c0 2-2 4.1-4.1 4.1-2 0-4.1-2-4.1-4.1v-76.1c0-2 2-4.1 4.1-4.1 2 0 4.1 2 4.1 4.1v76.1z m0 0"
        fill={getIconColor(color, 3, '#3F3D56')}
      />
      <Path
        d="M800.4 737.3c0.7 0.7 0.7 2.7 0 3.4-0.7 0.7-2.7 0.7-3.4 0l-31.9-31.9c-0.7-0.7-0.7-2.7 0-3.4 0.7-0.7 2.7-0.7 3.4 0l31.9 31.9z m-2.7-13.6c-0.7 0.7-0.7 2.7 0 3.4 0.7 0.7 2.7 0.7 3.4 0l26.5-26.5c0.7-0.7 0.7-2.7 0-3.4-0.7-0.7-2.7-0.7-3.4 0l-26.5 26.5z m0 0"
        fill={getIconColor(color, 4, '#333333')}
      />
      <Path
        d="M822.8 663.2c0 14.3-11.5 25.8-25.8 25.8s-25.8-11.5-25.8-25.8 11.5-25.8 25.8-25.8c14.2 0 25.8 11.6 25.8 25.8z m0 0"
        fill={getIconColor(color, 5, '#FFC448')}
      />
      <Path
        d="M788.8 682.2c0 2 0 4.1 0.7 6.1 2.7 0.7 4.8 1.4 7.5 1.4 14.3 0 25.8-11.5 25.8-25.8 0-2 0-4.1-0.7-6.1-2.7-0.7-4.8-1.4-7.5-1.4-14.2 0-25.8 11.6-25.8 25.8z m0 0"
        fill={getIconColor(color, 6, '#F2BA44')}
      />
      <Path
        d="M777.3 652.4h-4.1c-1.4 3.4-2.7 6.8-2.7 10.9 0 14.3 11.5 25.8 25.8 25.8h4.1c1.4-3.4 2.7-6.8 2.7-10.9 0-14.3-11.5-25.8-25.8-25.8z m4.7 56.3c0 8.1-6.8 15.6-15.6 15.6-8.1 0-15.6-6.8-15.6-15.6 0-8.2 6.8-15.6 15.6-15.6s15.6 7.5 15.6 15.6z m0 0"
        fill={getIconColor(color, 7, '#F7BE46')}
      />
      <Path
        d="M761.7 719.6c0 1.4 0 2 0.7 3.4 1.4 0.7 2.7 0.7 4.8 0.7 8.1 0 15.6-6.8 15.6-15.6 0-1.4 0-2-0.7-3.4-1.4-0.7-2.7-0.7-4.8-0.7-8.2 0.7-15.6 7.4-15.6 15.6z m0 0"
        fill={getIconColor(color, 8, '#F2BA44')}
      />
      <Path
        d="M755.5 701.9h-2c-0.7 2-1.4 4.1-1.4 6.8 0 8.1 6.8 15.6 15.6 15.6h2c0.7-2 1.4-4.1 1.4-6.8-0.6-8.8-7.4-15.6-15.6-15.6z m0 0"
        fill={getIconColor(color, 9, '#F7BE46')}
      />
      <Path
        d="M838.4 701.9c0 8.2-6.8 15.6-15.6 15.6-8.2 0-15.6-6.8-15.6-15.6 0-8.1 6.8-15.6 15.6-15.6 8.8 0.7 15.6 7.5 15.6 15.6z m0 0"
        fill={getIconColor(color, 10, '#FFC448')}
      />
      <Path
        d="M818.7 713.5c0 1.4 0 2 0.7 3.4 1.4 0.7 2.7 0.7 4.8 0.7 8.2 0 15.6-6.8 15.6-15.6 0-1.4 0-2.7-0.7-3.4-1.4-0.7-2.7-0.7-4.8-0.7-8.8 0-15.6 6.8-15.6 15.6z m0 0"
        fill={getIconColor(color, 11, '#F2BA44')}
      />
      <Path
        d="M811.9 695.1h-2c-0.7 2-1.4 4.1-1.4 6.8 0 8.2 6.8 15.6 15.6 15.6h2c0.7-2 1.4-4.1 1.4-6.8-0.6-8.8-7.4-15.6-15.6-15.6z m0 0"
        fill={getIconColor(color, 12, '#F7BE46')}
      />
      <Path
        d="M293 348.1c-9.5 9.5 23.1 35.3 19 48.2-2 6.1-20.4 8.8-20.4 15.6 0 12.9 38.7-0.7 43.5 11.5 2 4.8-14.3 13.6-11.5 18.3 9.5 15.6 67.9-0.7 67.9-0.7s12.2-60.4 0.7-70c-4.1-3.4-15.6 11.5-19.7 8.8-9.5-5.4-3.4-38-14.9-38.7-7.5 0-8.2 21.1-14.9 23.8-12.4 4.2-41.6-25.7-49.7-16.8z m0 0"
        fill={getIconColor(color, 13, '#FFC448')}
      />
      <Path
        d="M352.8 375.2c-0.7 0-1.4 0-0.7 0.7 0 0 4.8 14.3 1.4 26.5-4.1-4.1-8.2-8.2-12.2-11.5 0 0 0-0.7-0.7-0.7-14.9-14.3-27.2-25.8-27.8-25.8h-0.8v0.7s12.2 11.5 27.2 25.8c-11.5 3.4-16.3 2.7-16.3 2.7s-0.7 0-0.7 0.7c0 0 0 0.7 0.7 0.7 0 0 4.8 0.7 17-3.4 17.7 17 39.4 38 49.6 49.6h0.7v-0.7c-3.4-4.1-8.1-8.8-12.9-14.3 4.1-12.9 4.1-19 4.1-19s0-0.7-0.7-0.7c0 0-0.7 0-0.7 0.7 0 0-0.7 6.1-4.1 18.3l-22.4-22.4c4.7-12.9-0.7-27.9-0.7-27.9z m0 0"
        fill={getIconColor(color, 14, '#FFFFFF')}
      />
      <Path
        d="M367 417.3s0-0.6 0 0c0-0.7 0-0.7-0.7-0.7-12.2 4.1-17 3.4-17 3.4s-0.7 0-0.7 0.7c0 0 0 0.7 0.7 0.7 0.1-0.7 4.1 0 17.7-4.1-0.7 0-0.7 0 0 0z m0 0"
        fill={getIconColor(color, 15, '#FFFFFF')}
      />
      <Path
        d="M636.7 402.4h4.8c0.7 0 2 0.7 2 2v62.5c0 0.7-0.7 2-2 2h-4.8c-0.7 0-2-0.7-2-2v-62.5c0.6-1.3 1.3-2 2-2z m-265.6-51.6h1.4c0.7 0 2 0.7 2 2v18.3c0 0.7-0.7 2-2 2h-1.4c-0.7 0-2-0.7-2-2v-18.3c0.6-1.3 1.3-2 2-2z m0 40h1.4c0.7 0 2 0.7 2 2v34.6c0 0.7-0.7 2-2 2h-1.4c-0.7 0-2-0.7-2-2v-34.6c0-1.3 1.3-2 2-2z m0 51h1.4c0.7 0 2 0.7 2 2v34.6c0 0.7-0.7 2-2 2h-1.4c-0.7 0-2-0.7-2-2v-34.6c0.6-1.3 1.3-2 2-2z m0 0"
        fill={getIconColor(color, 16, '#E5E7EB')}
      />
      <Path
        d="M401 279.5h209.2c16.3 0 29.2 12.9 29.2 29.2v485.7c0 16.3-12.9 29.2-29.2 29.2H401c-16.3 0-29.2-12.9-29.2-29.2V308c0-15.6 12.9-28.5 29.2-28.5z m0 0"
        fill={getIconColor(color, 17, '#FFFFFF')}
      />
      <Path
        d="M482.5 295.8h31.9c1.4 0 2.7 1.4 2.7 2.7v2c0 1.4-1.4 2.7-2.7 2.7h-31.9c-1.4 0-2.7-1.4-2.7-2.7v-2c0-2.1 1.3-2.7 2.7-2.7z m0 0M523.3 299.1c0 1.5 0.8 2.8 2 3.5 1.3 0.7 2.8 0.7 4.1 0 1.3-0.7 2-2.1 2-3.5 0-1.5-0.8-2.8-2-3.5-1.3-0.7-2.8-0.7-4.1 0-1.3 0.7-2 2.1-2 3.5z m0 0"
        fill={getIconColor(color, 18, '#E5E7EB')}
      />
      <Path
        d="M601.4 293h-30.6v3.4c0 9.5-8.1 17.7-17.7 17.7H456c-9.5 0-17.7-8.1-17.7-17.7V293h-28.5c-11.5 0-21.1 9.5-21.1 21.1v472.8c0 11.5 9.5 21.1 21.1 21.1h191.5c11.5 0 21.1-9.5 21.1-21.1V314.8c0.7-12.3-8.8-21.8-21-21.8z m0 0"
        fill={getIconColor(color, 19, '#ECECF3')}
      />
      <Path
        d="M470.3 192.5h-8.8v-16.3h6.1l2.7 16.3z m0 0"
        fill={getIconColor(color, 20, '#2B3D4E')}
      />
      <Path
        d="M471 159.9l1.4 10.2c0.7 3.4-2.7 6.8-6.1 6.8h-2v-16.3l6.7-0.7z m0 0"
        fill={getIconColor(color, 21, '#2B3D4E')}
      />
      <Path
        d="M442.4 159.9c0 7.1 6.4 12.9 14.3 12.9S471 167 471 159.9s-6.4-12.9-14.3-12.9-14.3 5.8-14.3 12.9z m0 0"
        fill={getIconColor(color, 22, '#2B3D4E')}
      />
      <Path
        d="M451.9 184.4h-1.4v-24.5H471v5.4c0 10.9-8.9 19.1-19.1 19.1z m0 0"
        fill={getIconColor(color, 23, '#F9D7D7')}
      />
      <Path
        d="M450.6 178.9h11.5v13.6h-11.5z"
        fill={getIconColor(color, 24, '#F9D7D7')}
      />
      <Path
        d="M451.2 192.5h-10.9l3.4-17h9.5l-2 17z m0 0"
        fill={getIconColor(color, 25, '#2B3D4E')}
      />
      <Path
        d="M471 159.9s-0.7 4.1-8.8 5.4c-5.4 0.7-6.8 6.1-7.5 9.5 0 1.4-1.4 2-2.7 2h-7.5c-3.4 0-5.4-2.7-4.8-6.1l1.4-5.4 2-7.5 27.9 2.1z m0 0"
        fill={getIconColor(color, 26, '#2B3D4E')}
      />
      <Path
        d="M456 177.6l-4.8-4.8c-0.7-1.4-0.7-2.7 0-3.4 1.4-0.7 2.7-0.7 3.4 0l4.8 4.8c0.7 1.4 0.7 2.7 0 3.4-1.4 1.3-2.7 1.3-3.4 0z m-29.2 59.7c3.4-11.5 7.5-22.4 8.2-36 0.7-7.5 0.7-10.9-2-10.9-3.4 0.7-6.1 4.8-7.5 9.5-5.4 19-12.9 38-11.5 39.4 0 7.5 18.3 15.6 29.2 21.7v-8.8c-0.1 0.8-18.4-9.4-16.4-14.9z m58.4-1.3c-3.4-11.5-8.2-21.1-9.5-34-0.7-7.5-0.7-10.9 2-10.9 3.4 0.7 6.1 4.8 7.5 9.5 5.4 19 12.9 36 11.5 37.4-0.7 10.2-18.3 18.3-29.2 24.5v-8.8c0.7-0.7 19.8-13 17.7-17.7z m0 0"
        fill={getIconColor(color, 27, '#F9D7D7')}
      />
      <Path
        d="M478.4 191.1l-23.1-3.4-22.4 3.4-0.7 62.5-2 17.7h50.9l-2.7-17.7v-62.5z m0 0"
        fill={getIconColor(color, 28, '#F9D7D7')}
      />
      <Path
        d="M441.7 189.8s12.9 12.9 29.9 0c4.8 0 9.5 1.4 9.5 1.4s3.4 1.4 8.2 14.9c6.1 14.9 10.2 28.5 10.2 31.9 0 1.4-3.4 12.9-23.1 19.7-10.2-6.1-4.1-7.5-4.1-7.5l12.9-12.2-6.1-21.1s1.4 22.4 0 25.1c-3.4 3.4-46.2 2-46.2 2-1.4-6.8-0.7-14.3 0-24.5l-4.8 19s-1.4 2 6.8 8.1c6.8 5.4 0.7 10.2 0.7 10.2s-21.7-9.5-21.7-17c0.7-12.2 8.8-34.6 12.9-43.5 0.7-1.8 1.4-6.5 14.9-6.5z"
        fill={getIconColor(color, 29, '#6073F0')}
      />
      <Path
        d="M428.2 253.6c0.7-1.4 4.8-1.4 6.8-6.8 5.4 6.8-4.1 8.2-4.1 8.2l-2.7-1.4z m61.1-46.8l-0.7-2.7c-4.1 2.7-9.5 2.7-9.5 2.7-9.5 1.4-14.9 0-23.1 0-12.2 0-20.4-1.4-19.7-0.7 0 0-8.8 0-12.2-2.7-1.4 2.7-1.4 4.1-1.4 4.1s2 3.4 12.2 2.7c6.8 1.4 44.1 0.7 44.1 0.7 10.3-1.4 10.3-4.1 10.3-4.1z m-72 13.6s7.5 4.8 13.6 3.4v2.7s-4.8 3.4-14.3-2.7c0.7-2.8 0.7-3.4 0.7-3.4z m-4.1 18.3s3.4 2.7 14.3 0c0 0.7 0 1.4 0.7 2 0.7 1.4-11.5 5.4-13.6 2.7-1.4-1.3-1.4-3.3-1.4-4.7z m65.9-14.9c-10.2 2-36 2-46.9 0v2.7c-0.7 1.4 47.5 0.7 47.5 0.7s-0.6-0.7-0.6-3.4z m0 0"
        fill={getIconColor(color, 30, '#FFFFFF')}
      />
      <Path
        d="M474.3 259.8H437c-1.4 0-2-0.7-2-2l-5.4-27.8c0-1.4 0.7-2.7 2-2.7h48.9c1.4 0 2.7 1.4 2 2.7l-5.4 27.8c-0.7 1.3-1.4 2-2.8 2z m0 0"
        fill={getIconColor(color, 31, '#F2F2F2')}
      />
      <Path
        d="M455.3 240.1c1.4 0 2.7 1.4 2.7 2.7 0 1.4-1.4 2.7-2.7 2.7s-2.7-1.4-2.7-2.7c0-1.4 1.4-2.7 2.7-2.7m0-1.4c-2.7 0-4.8 2-4.8 4.8 0 2.7 2 4.8 4.8 4.8 2.7 0 4.8-2 4.8-4.8s-2.1-4.8-4.8-4.8z m0 0"
        fill={getIconColor(color, 32, '#C5E8F7')}
      />
      <Path
        d="M455.3 247.5c-1.4 0-2-0.7-2.7-0.7-1.4-0.7-2-2-2-3.4h2c0 0.7 0.7 2 1.4 2 0.7 0.7 1.4 0.7 2.7 0.7 1.4 0 2-1.4 2-2 0-0.7 0-2-0.7-2.7-0.7-0.7-1.4-1.4-2-1.4v-2c1.4 0 2.7 0.7 3.4 2 0.7 1.4 1.4 2.7 0.7 4.1-0.7 1.4-2 2.7-3.4 3.4h-1.4z m0 0"
        fill={getIconColor(color, 33, '#65C8D0')}
      />
      <Path
        d="M439 257.7h33.3v1.4H439z"
        fill={getIconColor(color, 34, '#333333')}
      />
      <Path
        d="M468.9 336.5s0 4.1-1.4 8.2c-1.4 2-0.7 4.8 0.7 6.1h2.7c5.4-2 8.8-1.4 8.8-1.4 3.4 1.4 6.8 2.7 14.3 0.7 0-0.7 0-2.7-4.1-2.7-6.1-1.4-6.1-4.8-12.2-6.1-2.7-0.7-2-4.1-2-4.1l-6.8-0.7z m-44.8-71.3l22.4 72 7.5-0.7-10.2-72c-3.4-17.7-23.1-9.5-19.7 0.7z m0 0"
        fill={getIconColor(color, 35, '#F9D7D7')}
      />
      <Path
        d="M423.4 265.9l19 60.5 10.2-1.4-9.5-59.8c-2.7-18.4-22.4-12.2-19.7 0.7z m0 0"
        fill={getIconColor(color, 36, '#21386E')}
      />
      <Path
        d="M468.9 336.5h7.5l8.8-57.1c0.7-2.7 2-14.3 0.7-18.3-2.7-12.9-14.9-10.9-17 1.4-0.7 4.1-0.7 13.6-0.7 19.7l0.7 54.3z m0 0"
        fill={getIconColor(color, 37, '#F9D7D7')}
      />
      <Path
        d="M468.2 324.3l10.2 1.4 6.8-45.5c0.7-2.7 2-14.3 0.7-18.3-2.7-12.9-14.9-10.9-17.7 0.7-0.7 4.1-0.7 13.6-0.7 19.7l0.7 42z m0 0"
        fill={getIconColor(color, 38, '#21386E')}
      />
      <Path
        d="M454 336.5c0.7 2.7 0 5.4 1.4 8.2 1.4 2 0.7 4.8-0.7 6.1H452c-5.4-2-8.8-1.4-8.8-1.4-3.4 1.4-6.8 2.7-14.3 0.7 0-0.7 0-2.7 4.1-2.7 6.1-1.4 6.1-4.8 12.2-6.1 2.7-0.7 2-3.4 2-3.4l6.8-1.4z m0 0"
        fill={getIconColor(color, 39, '#F9D7D7')}
      />
      <Path
        d="M454.7 339.9s2.7 4.8 1.4 8.2v2.7h-27.8v-2s-0.7-2 4.1-2c0.7 0 9.5-4.8 12.2-7.5 3.3 2 6.6 2.6 10.1 0.6z m0 0"
        fill={getIconColor(color, 40, '#21386E')}
      />
      <Path
        d="M435.6 345.3s2-2.7 5.4-2.7c5.4-0.7 10.2 0.7 8.1 2.7-1.4 0.7-3.4-0.7-3.4-0.7s-6-1.3-10.1 0.7z m0 0"
        fill={getIconColor(color, 41, '#C5E8F7')}
      />
      <Path
        d="M435.6 259.8h42.1v19.7h-42.1z"
        fill={getIconColor(color, 42, '#21386E')}
      />
      <Path
        d="M468.2 262.5c-0.7 3.4-0.7 10.9-0.7 17h-22.4l-2-14.3c-0.7-2-0.7-4.1-2-5.4h27.8c0 0.6 0 1.3-0.7 2.7zM456 348.1l-27.8 0.7v2H456v-2.7z m0 0"
        fill={getIconColor(color, 43, '#333333')}
      />
      <Path
        d="M468.9 339.9s-2.7 4.8-1.4 8.2v2.7h27.8v-2s0.7-2-4.1-2c-0.7 0-9.5-4.8-12.2-7.5-4 2-7.4 2.6-10.1 0.6z m0 0"
        fill={getIconColor(color, 44, '#21386E')}
      />
      <Path
        d="M487.9 345.3s-2-2.7-5.4-2.7c-5.4-0.7-10.2 0.7-8.2 2.7 1.4 0.7 3.4-0.7 3.4-0.7s6.2-1.3 10.2 0.7z m0 0"
        fill={getIconColor(color, 45, '#C5E8F7')}
      />
      <Path
        d="M466.9 348.1l27.8 0.7v2h-27.2l-0.6-2.7z m0 0"
        fill={getIconColor(color, 46, '#333333')}
      />
      <Path
        d="M480.5 223.8s2.7 2 12.9-3.4c0-1.4 2 3.4 2 3.4s-8.8 5.4-13.6 4.1l-1.3-4.1z m4 13.5s14.3 1.4 14.3-0.7c0.7 2.7-0.7 4.1-1.4 4.8 0 0-2 2.7-13.6-2.7l0.7-0.7v-0.7z m0 0"
        fill={getIconColor(color, 47, '#FFFFFF')}
      />
      <Path
        d="M523.3 836.4l18.3 24.5-135.8 15.6-13.6-24.5 131.1-15.6z m0 0"
        fill={getIconColor(color, 48, '#FFC166')}
      />
      <Path
        d="M616.3 848l-18.3 8.8 131.1 6.1 13.6-9.5-126.4-5.4z m0 0"
        fill={getIconColor(color, 49, '#B6D641')}
      />
      <Path
        d="M733.9 570.4l-11.2-3 3.5-13.1 11.2 3-3.5 13.1z m0 0"
        fill={getIconColor(color, 50, '#F1B18C')}
      />
      <Path
        d="M732.2 553c5.2 1.4 10.6 0 14.3-3.5 3.7-3.6 5.1-8.8 3.7-13.8-1.4-5-5.5-8.9-10.7-10.2-5.2-1.4-10.6 0-14.3 3.5-3.7 3.6-5.1 8.8-3.7 13.8 1.5 4.9 5.6 8.8 10.7 10.2z m0 0"
        fill={getIconColor(color, 51, '#2B3D4E')}
      />
      <Path
        d="M735.2 562.7l6.8-23.1-19.7-5.4-1.4 4.8c-2.7 10.1 3.4 21 14.3 23.7z m0 0"
        fill={getIconColor(color, 52, '#F1B18C')}
      />
      <Path
        d="M749.4 545s-4.1 8.2-12.2 12.2c2-6.8 4.1-14.3 4.1-14.3l8.1 2.1z m-27.1-10.8s-2 4.8 1.4 6.8c-1.4-2.7 0-6.8 0-6.8h-1.4z m0 0"
        fill={getIconColor(color, 53, '#2B3D4E')}
      />
      <Path
        d="M726.3 534.8s-2 5.4 0.7 7.5c-3.4-2-3.4-8.2-3.4-8.2l2.7 0.7z m0 0"
        fill={getIconColor(color, 54, '#2B3D4E')}
      />
      <Path
        d="M726.3 535.5s1.4 10.9 12.9 14.3c4.8-2 5.4-4.8 5.4-4.8l-1.4-8.1-16.9-1.4z m0 0"
        fill={getIconColor(color, 55, '#2B3D4E')}
      />
      <Path
        d="M732.5 555.2l6.1-3.4c1.4-0.7 1.4-2 0.7-3.4s-2-1.4-3.4-0.7l-6.1 3.4c-1.4 0.7-1.4 2-0.7 3.4 0.6 1.4 2 1.4 3.4 0.7z m0 0"
        fill={getIconColor(color, 56, '#F1B18C')}
      />
      <Path
        d="M750.1 543.7s-0.7 2.7 2.7 1.4c-2.7 1.4-2.7-2-2.7-2m-1.3-15.7s-4.1 0-3.4 2.7c-1.4 0.7-2 0-2 0s0.6-4.1 5.4-2.7z m0 0"
        fill={getIconColor(color, 57, '#2B3D4E')}
      />
      <Path
        d="M744.7 528.1s0.7-0.7 0-2.7c0 2-0.7 2.7 0 2.7z m0 0"
        fill={getIconColor(color, 58, '#2B3D4E')}
      />
      <Path
        d="M695.1 651l9.5 78.8 2.7 19 9.5 63.2 10.2 2-4.1-84.2-1.4-78.8h-26.4z m0 0M749.4 646.9l14.3 80.2 20.4 79.5h-11.5L750.1 740c-3.4-0.7-6.1-10.2-6.1-13.6l-22.4-76.1 27.8-3.4z m0 0"
        fill={getIconColor(color, 59, '#F1B18C')}
      />
      <Path
        d="M701.9 565.4l24.5-1.4 24.5 1.4V613l2 38h-53l2-38v-47.6z m0 0"
        fill={getIconColor(color, 60, '#F1B18C')}
      />
      <Path
        d="M718.9 579.7c2-2.7 1.4-8.2-1.4-12.2l-29.9-33.3-6.8-37.4-8.1 0.7 4.1 42.8 35.3 48.2 6.8-8.8z m0 0"
        fill={getIconColor(color, 61, '#F1B18C')}
      />
      <Path
        d="M678.9 501.5c0.4 0.2 1.3-0.3 2.2-1.5 0.9-1.2 1.8-2.8 2.3-4.2s0.6-2.4 0.1-2.6c-0.4-0.2-1.3 0.3-2.2 1.5-0.9 1.2-1.8 2.8-2.3 4.2-0.5 1.3-0.6 2.3-0.1 2.6z m0 0M735.9 579.7c-1.4-3.4 1.4-8.2 4.8-11.5l35.3-23.1 19-33.3 7.5 3.4-18.3 38.7-42.8 35.3-5.5-9.5z m0 0"
        fill={getIconColor(color, 62, '#F1B18C')}
      />
      <Path
        d="M794.3 521.3c2.7 1.4 6.8-2.7 9.5-8.8 2.7-6.1 3.4-12.2 0.7-12.9-2.7-1.4-14.3 6.1-12.2 8.8 2.6 3.3-0.7 12.2 2 12.9z m0 0"
        fill={getIconColor(color, 63, '#F1B18C')}
      />
      <Path
        d="M792.2 511.1l-1.4 0.7-1.4 0.7c-0.7-1.4-0.7-2.7 0-3.4 0.8-0.1 2.2 0.6 2.8 2z m0 0"
        fill={getIconColor(color, 64, '#F1B18C')}
      />
      <Path
        d="M695.1 655.8l14.3 142.6s-3.4 4.8 18.3-0.7c1.4-4.1-2.7-118.2-2.7-118.2l41.4 116.2s1.4 4.8 17.7 0.7c2-12.9-15.6-57.7-16.3-61.1-0.7-4.1-16.3-86.9-16.3-86.9s-57.8-18.5-56.4 7.4z m0 0"
        fill={getIconColor(color, 65, '#6073F0')}
      />
      <Path
        d="M790.9 516.5l-4.1 4.1-15.6 25.1s-0.7 0.7-31.2 18.3c-24.4 18.3-22.4-0.7-22.4-0.7l-27.2-29.2s-4.1-14.3-8.2-33.3c-0.7 2.7-11.5-0.7-11.5-0.7s2.7 20.4 4.1 31.2c0 8.8 5.4 17 5.4 17s11.5 19.7 17 28.5c-5.4 29.2-8.1 78.8-2 78.8 17.7-4.1 31.9-2.7 48.2-3.4 19-1.4 12.9-5.4 10.9-16.3 0 0-2.7-19-2-36.7 1.4-14.9 6.8-21.1 6.8-21.1l25.1-23.8s14.3-25.8 18.3-35.3c-0.1 2.3-11.6-2.5-11.6-2.5z m0 0"
        fill={getIconColor(color, 66, '#D0DDEF')}
      />
      <Path
        d="M716.2 809.3c-0.7 4.8-15.6 4.8-18.3 8.8-0.7 1.4-0.7 2 0 3.4H727c0.7-0.7 0.7-2 0-3.4 0.7-1.4 0.7-2.7 0-4.8 0 0-6.1 1.4-10.8-4z m0 0"
        fill={getIconColor(color, 67, '#777777')}
      />
      <Path
        d="M713.4 817.4h-0.7c-0.7 0-0.7-0.7-0.7-1.4s0.7-0.7 0.7-0.7l-0.7-0.7c-1.4-2-2-1.4-2-1.4 0 0.7-0.7 0.7-1.4 0.7s-0.7-0.7-0.7-1.4c0 0 0.7-1.4 1.4-1.4s2 0.7 3.4 2c0.7 1.4 2 2 1.4 3.4 0 0.9 0 0.9-0.7 0.9z m-4.7 0.7h-0.7c-0.7 0-0.7-0.7-0.7-1.4s0.7-0.7 0.7-0.7l-0.7-0.7c-1.4-1.4-2-1.4-2-1.4 0 0.7-0.7 0.7-1.4 0.7s-0.7-0.7-0.7-1.4c0 0 0.7-1.4 1.4-1.4s2 0.7 3.4 2c0.7 1.4 2 2 1.4 3.4 0.6 0.9 0 0.9-0.7 0.9z m0 0"
        fill={getIconColor(color, 68, '#D0DDEF')}
      />
      <Path
        d="M697.8 818.1H727v3.4h-29.2z"
        fill={getIconColor(color, 69, '#333333')}
      />
      <Path
        d="M784.1 806.5c2.7 9.5 5.4 13.6 5.4 18.3 2 3.4-4.8 9.5-10.9 6.8-3.4-1.4-4.1-3.4-4.1-3.4-2-6.8 0.7-15.6-2-21.7h11.6z m0 0"
        fill={getIconColor(color, 70, '#F1B18C')}
      />
      <Path
        d="M784.1 806.5c2.7 9.5 6.1 13.6 6.1 18.3 1.4 3.4-5.4 10.9-12.2 7.5-3.4-1.4-4.8-3.4-4.8-3.4-2-6.8 1.4-15.6-2-21.7 4.7 5.5 13.6 4.8 12.9-0.7z m0 0"
        fill={getIconColor(color, 71, '#777777')}
      />
      <Path
        d="M780 819.4c-1.4 0-2.7-0.7-3.4-1.4 0 0-0.7-0.7 0-1.4 0 0 0.7-0.7 1.4 0 0 0 2.7 2 5.4-0.7h1.4v1.4c-2.1 1.5-3.4 2.1-4.8 2.1z m1.4 6.2c-2 0-4.1-0.7-4.8-1.4-0.7 0-0.7-0.7 0-1.4 0-0.7 0.7-0.7 1.4 0 0 0 5.4 3.4 8.8-1.4 0-0.7 0.7-0.7 1.4 0s0.7 0.7 0 1.4c-2.8 1.4-4.8 2.8-6.8 2.8z m0 0"
        fill={getIconColor(color, 72, '#D0DDEF')}
      />
      <Path
        d="M269.2 581.7c0 4.5 3.6 8.1 8.2 8.1 4.5 0 8.1-3.6 8.1-8.1s-3.6-8.2-8.1-8.2c-4.5 0.1-8.2 3.7-8.2 8.2z m0 0"
        fill={getIconColor(color, 73, '#F9D7D7')}
      />
      <Path
        d="M269.2 581.7c0 4.5 3.6 8.1 8.2 8.1 4.5 0 8.1-3.6 8.1-8.1s-3.6-8.2-8.1-8.2c-4.5 0.1-8.2 3.7-8.2 8.2z m0 0"
        fill={getIconColor(color, 74, '#F9D7D7')}
      />
      <Path
        d="M277.4 589.2l48.2-8.2 39.4-18.3v-6.8l-43.5 14.9-43.5 2.7c-14.2 0.7-9.5 16.4-0.6 15.7z m0 0"
        fill={getIconColor(color, 75, '#F9D7D7')}
      />
      <Path
        d="M269.2 581.7c0 4.5 3.6 8.1 8.2 8.1 4.5 0 8.1-3.6 8.1-8.1s-3.6-8.2-8.1-8.2c-4.5 0.1-8.2 3.7-8.2 8.2z m0 0M365 547.8c0.7-4.8 2-6.1 2.7-7.5 0 0 3.4-6.1 4.8 0.7v8.1c0.7-0.7 1.4-1.4 1.4 0 0 2-4.1 8.8-4.1 8.8-1.4 2.7-2.7 4.1-5.4 4.1v-14.3h0.6z m-65.9 259.4l8.2-0.7 1.4-74-15-81.5h-31.9l29.9 86.9v17l7.4 52.3z m0 0"
        fill={getIconColor(color, 76, '#F9D7D7')}
      />
      <Path
        d="M299.1 807.2c0 1.4 1.4 3.4-0.7 6.8-1.4 2-1.4 5.4 0 6.1 0.7 0 2 0.7 2.7 0 6.1-2 9.5-0.7 9.5-0.7 3.4 1.4 6.8 2.7 14.9 0.7 0.7 0 2-4.1-2-4.8-6.1 0-8.2-3.4-13.6-5.4-2.7-1.4-2-4.1-2-4.1l-8.8 1.4z m0 0"
        fill={getIconColor(color, 77, '#F9D7D7')}
      />
      <Path
        d="M293 570.2h-9.5v-17h6.8l2.7 17z m0 0"
        fill={getIconColor(color, 78, '#2B3D4E')}
      />
      <Path
        d="M293.7 536.9l1.4 10.2c0.7 3.4-2.7 6.8-6.1 6.8h-2v-17h6.7z m0 0"
        fill={getIconColor(color, 79, '#2B3D4E')}
      />
      <Path
        d="M265.1 536.9c0 7.1 6.4 12.9 14.3 12.9s14.3-5.8 14.3-12.9c0-7.1-6.4-12.9-14.3-12.9s-14.3 5.8-14.3 12.9z m0 0"
        fill={getIconColor(color, 80, '#2B3D4E')}
      />
      <Path
        d="M274 562h-0.7v-25.1h21.1v5.4c-0.7 10.9-9.6 19.7-20.4 19.7z m0 0"
        fill={getIconColor(color, 81, '#F9D7D7')}
      />
      <Path
        d="M272.6 555.9h12.2v13.6h-12.2z"
        fill={getIconColor(color, 82, '#F9D7D7')}
      />
      <Path
        d="M274 570.2h-11.5l3.4-17.7h9.5l-1.4 17.7z m0 0"
        fill={getIconColor(color, 83, '#2B3D4E')}
      />
      <Path
        d="M293.7 536.9s-0.7 4.1-8.8 5.4c-6.1 0.7-7.5 6.1-7.5 9.5 0 1.4-1.4 2-2.7 2h-7.5c-3.4 0-5.4-2.7-4.8-6.1l1.4-6.1 2-8.1 27.9 3.4z m0 0"
        fill={getIconColor(color, 84, '#2B3D4E')}
      />
      <Path
        d="M278 555.2l-4.8-5.4c-0.7-1.4-0.7-2.7 0-3.4 1.4-0.7 2.7-0.7 3.4 0l4.8 5.4c0.7 1.4 0.7 2.7 0 3.4-0.6 0.7-2.7 0.7-3.4 0z m6.8 10.9H274c-1.4 4.1-11.5 4.8-12.2 22.4l0.7 63.2h31.2l5.4-59.8-14.3-25.8z m0 0"
        fill={getIconColor(color, 85, '#F9D7D7')}
      />
      <Path
        d="M210.1 789.6l6.1 5.4 52.3-56.4 25.1-87.6h-31.2l-12.2 84.9-10.9 9.5-29.2 44.2z m0 0"
        fill={getIconColor(color, 86, '#F9D7D7')}
      />
      <Path
        d="M210.1 789.6s-3.4 4.8-5.4 5.4c-2 0.7-4.1 3.4-4.1 4.8 0 0.7 1.4 1.4 2 2 5.4 2 7.5 5.4 7.5 5.4 2 3.4 3.4 6.1 10.9 10.2 0.7 0.7 4.1-2 1.4-4.8-4.8-4.1-4.1-7.5-7.5-12.9-1.4-2.7 1.4-4.8 1.4-4.8l-6.2-5.3z m0 0"
        fill={getIconColor(color, 87, '#F9D7D7')}
      />
      <Path
        d="M285.5 566.1c-0.7 0 0.7-2 0-2.7-2-0.7-9.5-1.4-10.2-0.7-0.7 0.7-0.7 3.4-0.7 3.4-1.4 4.1-11.5 6.1-12.9 23.1-1.4 47.5 2 43.5 0 52.3-5.4 10.2-11.5 55.7-6.1 55 2.7 2 38.7 2.7 48.9 0 8.8 0-6.1-27.8-7.5-48.2-2-23.1 3.4-44.8 3.4-57.1-1.3-3.4-10.1-14.9-14.9-25.1z m0 0"
        fill={getIconColor(color, 88, '#6073F0')}
      />
      <Path
        d="M272.6 587.1L312 615l44.1 9.5 2-7.5-39.4-12.9-36.7-30.6c-8.7-6.1-18.2 7.5-9.4 13.6z m0 0M356.2 624.5l2-7.5 2 0.7c2 0.7 5.4 0 8.2 0.7 4.1 0.7 6.1 0 5.4 2 0 0 0 0.7-1.4 0.7-5.4-0.7-2-0.7-1.4 0.7 2 1.4 4.1-0.7 2 5.4-4.1 10.2-10.2-0.7-15.6-2-0.6 0-1.2-0.7-1.2-0.7z m0 0"
        fill={getIconColor(color, 89, '#F9D7D7')}
      />
      <Path
        d="M269.2 581c0 4.5 3.6 8.2 8.2 8.2 4.5 0 8.1-3.7 8.1-8.2 0-4.5-3.6-8.2-8.1-8.2-4.5 0.1-8.2 3.7-8.2 8.2z m0 0"
        fill={getIconColor(color, 90, '#F9D7D7')}
      />
      <Path
        d="M298.4 812.7l7.5 4.1h4.8l4.8-4.1c0 1.4 10.9 3.4 12.2 4.8 2.7 5.4-27.2 3.4-27.2 3.4h-2.7c-0.7-2.1-0.1-4.8 0.6-8.2z m0 0"
        fill={getIconColor(color, 91, '#606E81')}
      />
      <Path
        d="M305.9 821.5v0.7h-7.5l-0.7-1.4 8.2 0.7z m0 0"
        fill={getIconColor(color, 92, '#606E81')}
      />
      <Path
        d="M305.9 821.5v0.7h-7.5l-0.7-1.4 8.2 0.7z m0 0"
        fill={getIconColor(color, 93, '#333333')}
      />
      <Path
        d="M206 793.6l2.7 8.2 3.4 3.4h6.1c-0.7 2 6.1 7.5 5.4 11.5-2 6.1-22.4-15.6-22.4-15.6l-2-2c1.4-2.7 4.1-4.1 6.8-5.5z m0 0"
        fill={getIconColor(color, 94, '#606E81')}
      />
      <Path
        d="M206 805.2l-0.7 0.7-5.4-4.8 0.7-1.4 5.4 5.5z m0 0"
        fill={getIconColor(color, 95, '#606E81')}
      />
      <Path
        d="M206 805.2l-0.7 0.7-5.4-4.8 0.7-1.4 5.4 5.5z m0 0"
        fill={getIconColor(color, 96, '#333333')}
      />
      <Path
        d="M790.4 514.4c0.7 1.5 1.6 2.9 2.3 3.5 0.7 0.6 1.2 0.4 1.2-0.6 0-0.9-0.4-2.5-1.1-4-0.7-1.6-1.6-2.9-2.3-3.5-0.7-0.6-1.2-0.4-1.2 0.6 0 0.9 0.4 2.4 1.1 4z m0 0"
        fill={getIconColor(color, 97, '#F1B18C')}
      />
      <Path
        d="M617 776c0 17.7-4.8 32.6-10.9 32.6-6.1 0-10.9-14.3-10.9-32.6 0-17 8.2-31.2 10.2-32.6 3.4 1.3 11.6 14.9 11.6 32.6z m0 0"
        fill={getIconColor(color, 98, '#FFC448')}
      />
      <Path
        d="M614.3 780.7s0 0.7 0 0l-6.8 8.2v11.5-10.9l-0.7 0.7v-0.7l0.7-0.7v-2.7l-8.2-8.8v-0.7h0.7l7.5 8.8v-12.2L600 765v-0.7h0.7l6.8 7.5V763l-5.5-6v-0.7h0.7l4.8 5.4v-8.8l-2-2.7v-0.7c0-0.7 0 0 0.7 0l1.4 2V742v14.3l2.7-2.7h0.7v0.7l-2.7 3.4v8.8l4.8-5.4h0.7v0.7l-5.4 6.1V778l6.8-8.1h0.7v0.7l-7.5 8.2v9.5l5.9-7.6c-0.7 0-0.7 0 0 0z m0 0"
        fill={getIconColor(color, 99, '#F7F7F7')}
      />
      <Path
        d="M632.6 788.2c-9.5 14.9-21.7 24.5-26.5 21.7-4.8-3.4-1.4-18.3 8.2-33.3 8.8-14.3 23.8-21.7 26.5-21.7 1.3 2.7 0.6 19-8.2 33.3z m0 0"
        fill={getIconColor(color, 100, '#F7BE46')}
      />
      <Path
        d="M637.4 766.5l-4.1 1.4 7.5-12.2-4.8 8.2-0.7-2.7h-0.7v0.7l0.7 3.4-4.8 7.5-1.4-6.8v0.7l1.4 7.5-4.1 7.5-1.4-10.2v0.7l1.4 10.9-6.1 10.2-1.4-10.9h-0.7v0.7l2 12.2-1.4 2.7-0.7 0.7-2 3.4-2-11.5h-0.7v0.7l2 12.2-2.7 4.8v0.7h0.7l6.1-9.5 10.2-2.7v-0.7h-0.7l-9.5 2.7 4.8-8.1 10.9-3.4v-0.7h-0.7l-10.2 2.7 5.4-8.8 7.5-2v-0.7h-0.7l-6.8 2 4.8-7.5 2.9-5.8c0 0.6 0 0 0 0z m0 0"
        fill={getIconColor(color, 101, '#F7F7F7')}
      />
      <Path
        d="M581 788.2c9.5 14.9 21.7 24.5 26.5 21.7 4.8-3.4 1.4-18.3-8.2-33.3-8.8-14.3-23.8-21.7-26.5-21.7-1.3 2.7-0.6 19 8.2 33.3z m0 0"
        fill={getIconColor(color, 102, '#F2BA44')}
      />
      <Path
        d="M576.2 766.5l4.1 1.4-7.5-12.2 4.8 8.2 0.7-2.7h0.7v0.7l-0.7 3.4 4.8 7.5 1.4-6.8v0.7l-1.4 7.5 4.1 7.5 1.4-10.2h0.7v0.7l-1.4 10.9 6.1 10.2 1.4-10.9h0.7v0.7l-2 12.2 1.4 2.7 0.7 0.7 2 3.4 2-11.5h0.7v0.7l-2 12.2 2.7 4.8v0.7h-0.7l-6.1-9.5-10.2-2.7v-0.7h0.7l9.5 2.7-4.8-8.1-10.9-3.4v-0.7h0.7l10.2 2.7-5.4-8.8-7.5-2v-0.7h0.7l6.8 2-4.8-7.5-3.6-5.8c0 0.6-0.6 0 0 0z m0 0"
        fill={getIconColor(color, 103, '#F7F7F7')}
      />
      <Path
        d="M621.1 802.5c0.7 0 1.4 0.7 1.4 1.4l-0.7 2-0.7 2-4.8 13.6c0 0.7-0.7 0.7-1.4 0.7h-15.6c-0.7 0-0.7 0-1.4-0.7l-4.8-13.6-0.7-2-0.7-2c0-0.7 0-1.4 1.4-1.4h28z m0 0"
        fill={getIconColor(color, 104, '#3F3D56')}
      />
      <Path
        d="M621.1 806.5l-0.7 2h-26.5l-0.7-2h27.9z m0 0"
        fill={getIconColor(color, 105, '#FFFFFF')}
      />
      <Path
        d="M697.8 466.9l-34.6 28.5 125 23.1 27.2-29.2-117.6-22.4z m23.1 19l2.7-2.7 74 12.9-3.4 2.7-73.3-12.9z m0 0"
        fill={getIconColor(color, 106, '#FFC166')}
      />
      <Path
        d="M723.6 483.2l-2.7 2.7 73.4 12.9 3.4-2.7-74.1-12.9z m-4.7 5.5l-2.7 2.7 73.4 12.9 3.4-2.7-74.1-12.9z m-5.5 4.7l-2.7 2.7 74 12.9 2.7-2.7-74-12.9z m0 0"
        fill={getIconColor(color, 107, '#FFFFFF')}
      />
      <Path
        d="M797.7 496.1l-74.1-12.9-2.7 2.7M719.5 480.5l-15.6 14.9-23.8-4.8 17-13.6 22.4 3.5z m0 0"
        fill={getIconColor(color, 108, '#FFFFFF')}
      />
      <Path
        d="M531.4 517h-51.6c-9.5 0-17.2-7.7-17.2-17.2v-51.6c0-9.5 7.7-17.2 17.2-17.2h51.6c9.5 0 17.2 7.7 17.2 17.2v51.6c0 9.5-7.7 17.2-17.2 17.2z"
        fill={getIconColor(color, 109, '#6073F0')}
      />
      <Path
        d="M508.6 451.5c-0.1-0.1-0.1-0.1-0.2-0.1l-0.2-0.2c-0.7-0.5-1.7-0.8-2.7-0.9h-1.1c-0.9 0.1-1.8 0.3-2.8 0.6-1.5 0.5-3.1 1.4-4.6 2.5-1.7 1.3-3 2.8-3.9 4.4-1.5 2.6-1.8 5.3-0.4 7.1 0.1 0.2 0.3 0.4 0.5 0.5l0.3 0.3 0.1 0.1s0.1 0 0.1 0.1h0.1c7.4 4.8 9.9 14.6 5.4 22.3-1.9 3.3-4.7 5.6-7.9 7-0.1 0.1-0.2 0.1-0.4 0.2s-0.4 0.3-0.5 0.5c-0.4 0.6-0.2 1.5 0.5 1.8 0.2 0.1 0.5 0.2 0.7 0.2h0.1c8.6-0.6 16.9-5.3 21.5-13.4 6.3-10.9 4.1-24.3-4.5-32.7 0-0.2 0-0.3-0.1-0.3z m-0.2 3.7c-0.1 1-0.5 2.1-1.1 3.2-0.8 1.4-2 2.8-3.5 3.9-1.7 1.3-3.6 2.2-5.3 2.6-1.5 0.3-2.9 0.2-3.8-0.3l-0.1-0.1h-0.1l-0.2-0.2-0.2-0.2s0-0.1-0.1-0.1c-0.4-0.6-0.6-1.3-0.5-2.2 0.1-1 0.5-2.1 1.1-3.2 0.8-1.4 2-2.8 3.5-3.9 0.7-0.6 1.5-1.1 2.3-1.5 0.6-0.3 1.2-0.6 1.8-0.8 1.1-0.4 2.2-0.6 3.1-0.5h0.3c0.8 0.1 1.4 0.3 2 0.6 0.1 0 0.1 0.1 0.1 0.1l0.1 0.1 0.1 0.1 0.1 0.1s0 0.1 0.1 0.1v0.1c0.2 0.5 0.4 1.2 0.3 2.1z m24.6 18.7l-7.1-7c-0.8-0.7-2-0.6-2.8 0.1-0.7 0.7-0.8 1.9-0.1 2.7l5.6 5.6-5.6 5.7c-0.6 0.5-0.8 1.3-0.7 2 0.2 0.7 0.8 1.3 1.5 1.5 0.7 0.2 1.5-0.1 2-0.7l7.1-7c0.4-0.4 0.6-0.9 0.6-1.4 0.1-0.6-0.1-1.1-0.5-1.5z m-44.8-6.9c-0.8-0.8-2.1-0.8-2.9 0l-7.1 7c-0.8 0.8-0.8 2.1 0 2.9l7.1 7c0.8 0.7 2 0.6 2.8-0.1 0.7-0.7 0.8-1.9 0.1-2.7l-5.6-5.6 5.6-5.6c0.7-0.8 0.7-2.1 0-2.9z"
        fill={getIconColor(color, 110, '#FFFFFF')}
      />
    </Svg>
  );
};

IconKongbai.defaultProps = {
  size: 18,
};

IconKongbai = React.memo ? React.memo(IconKongbai) : IconKongbai;

export default IconKongbai;