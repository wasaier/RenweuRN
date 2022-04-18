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

let IconRenqiniuren: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M891.701346 565.103452c0 0-13.781888-62.018495-42.49279-107.960851-28.716019-45.941332-47.092551-76.95058-47.092551-76.95058s-3.444449-10.336416-16.078187-6.890944c-12.634762 3.445472-29.863145 13.782911-32.158421 28.712949l-4.211928 13.400195c0 0-24.502044-163.855882-79.630618-229.321896C614.907253 120.623241 525.320888 67.791989 525.320888 67.791989s-27.565822-13.782911-42.49586 4.593622c-14.927991 18.376533 12.635785 113.704668-32.157397 189.507098-44.792159 75.80243-55.129598 84.990696-55.129598 84.990696s-9.188266 10.337439-27.564799-27.563776c-18.376533-37.902238-44.793182-74.655304-58.576093-82.694397-13.782911-8.040117-37.517475-7.27366-45.176922 13.016455 0 0 12.252045 68.911486-71.973218 206.734458-84.225263 137.822972-81.162508 231.237525-45.941332 316.994678 35.222199 85.757153 139.355885 153.134703 139.355885 153.134703s38.09155 20.481474 46.705742 23.352871c8.615215 2.87242 55.128575 11.486612 71.209832-5.742794 16.07921-17.22736-10.337439-64.316841-10.337439-64.316841s-47.091528-117.151164-9.188266-186.06265c37.902238-68.909439 82.694397-105.662505 82.694397-105.662505s32.159444-32.161491 34.455743 3.444449c2.298346 35.602869 17.228383 82.693374 39.050388 109.109 21.820981 26.415626 62.019519 84.99172 41.34771 153.904229-20.674878 68.910463-32.159444 87.288019-21.824051 95.326089 10.339486 8.040117 39.050388 12.635785 79.249949-2.298346 40.197514-14.927991 141.267421-57.423851 212.475206-161.941276C922.711618 681.106466 891.701346 565.103452 891.701346 565.103452zM802.499745 760.353344c-45.941332 72.741721-132.462894 110.258173-138.589428 113.318882-6.126534 3.065825-32.158421 17.61417-22.971178-6.889921 9.188266-24.499997 6.126534-75.416644 3.830235-94.943372-2.299369-34.456766-49.005111-88.820931-73.507154-126.338407-24.502044-37.519522-13.782911-111.024629-12.251022-120.213919 1.531889-9.188266-7.6574-49.76952-22.204721-55.895031-14.547321-6.126534-37.518498 13.782911-37.518498 13.782911l-30.629601 29.095665c0 0-114.851794 114.852818-145.479349 188.358949-30.626531 73.505108 13.017478 163.856905 12.249999 175.343517-0.765433 11.485589-13.016455 9.954723-13.016455 9.954723s-16.461927-7.274684-32.54216-19.909445c-16.07921-12.632715-87.289042-83.842547-112.556519-164.237575-25.266453-80.399121 19.526729-167.686117 58.576093-223.965911 39.050388-56.276724 58.57507-115.999944 58.57507-115.999944s7.27366-30.244838 22.588461-9.572006c15.313777 20.673855 17.610076 55.896054 17.610076 69.678966 0 13.782911 8.422833 26.03291 17.610076 28.329209 9.188266 2.297322 22.971178-3.062755 22.971178-3.062755s50.534953-46.707788 94.179986-115.619274c43.641963-68.911486 64.315818-163.089425 63.550385-184.529737-0.76441-21.439288 21.439288-0.766456 21.439288-0.766456s38.283931 22.205745 94.179986 114.852818c55.895031 92.64912 18.375509 227.41036 13.782911 254.206656-4.594645 26.800389 13.017478 41.34771 19.140942 42.11519 6.125511 0.766456 31.392988-12.253068 39.814798-17.610076 8.423857-5.361101 25.2685-32.158421 45.940308-58.957787 20.673855-26.799366 33.69338-2.300392 33.69338-2.300392s17.610076 46.708811 30.626531 88.819908C844.610842 609.512894 848.440054 687.61367 802.499745 760.353344z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconRenqiniuren.defaultProps = {
  size: 18,
};

IconRenqiniuren = React.memo ? React.memo(IconRenqiniuren) : IconRenqiniuren;

export default IconRenqiniuren;