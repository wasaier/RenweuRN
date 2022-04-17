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

let IconJifen: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M387.84 111.30368c-171.42784 0-310.39488 51.26144-310.39488 114.4832V311.6544c0 63.22176 138.96704 114.4832 310.39488 114.4832s310.4-51.26144 310.4-114.4832V225.78688c0-63.22176-138.97216-114.4832-310.4-114.4832z m372.46976 337.73056c-102.8608 0-186.22976 30.73536-186.22976 68.68992v51.52256c0 37.91872 83.36896 68.68992 186.22976 68.68992 102.87104 0 186.24-30.7712 186.24-68.68992v-51.52256c0-37.95456-83.36896-68.68992-186.24-68.68992z m0 257.5872c102.87104 0 186.24-30.76608 186.24-68.68992v-51.52256c0 37.92384-83.36896 68.69504-186.24 68.69504-102.8608 0-186.22976-30.7712-186.22976-68.69504v51.52256c0 37.92384 83.36896 68.68992 186.22976 68.68992z m0 68.69504c102.87104 0 186.24-30.77632 186.24-68.69504V655.104c0 37.91872-83.36896 68.68992-186.24 68.68992-102.8608 0-186.22976-30.7712-186.22976-68.68992v51.51744c0 37.91872 83.36896 68.69504 186.22976 68.69504z m0 68.68992c102.87104 0 186.24-30.7712 186.24-68.68992v-51.52256c0 37.91872-83.36896 68.68992-186.24 68.68992-102.8608 0-186.22976-30.7712-186.22976-68.68992v51.52256c0 37.91872 83.36896 68.68992 186.22976 68.68992z m0 68.68992c102.87104 0 186.24-30.7712 186.24-68.68992v-51.52256c0 37.92384-83.36896 68.68992-186.24 68.68992-102.8608 0-186.22976-30.76608-186.22976-68.68992v51.52256c0 37.91872 83.36896 68.68992 186.22976 68.68992z m-217.2672-423.59296V483.3792h1.39776c7.1424-31.48288 70.79936-56.78592 153.79968-61.93664V340.27008c0 63.22688-138.97216 114.4832-310.4 114.4832s-310.39488-51.26144-310.39488-114.4832v85.8624c0 63.22688 138.96704 114.4832 310.39488 114.4832a749.05088 749.05088 0 0 0 155.19744-15.4624v-36.04992z m155.19744-5.72416v-28.6208c-0.30208 10.25024-3.84 20.1984-10.1888 28.6208h10.1888z m-155.19744 70.40512a749.74208 749.74208 0 0 1-155.19744 15.45728c-171.42784 0-310.39488-51.26144-310.39488-114.4832v85.8624c0 63.22688 138.96704 114.4832 310.39488 114.4832a749.74208 749.74208 0 0 0 155.19744-15.45728v-85.8624z m0 114.4832a750.09536 750.09536 0 0 1-155.19744 15.45728c-171.42784 0-310.39488-51.26144-310.39488-114.4832v85.86752c0 63.22176 138.96704 114.47808 310.39488 114.47808 52.1984 0.256 104.25856-4.93056 155.19744-15.45216v-85.86752z m0 114.48832a750.09536 750.09536 0 0 1-155.19744 15.45728c-171.42784 0-310.39488-51.26144-310.39488-114.4832v85.8624c0 63.22688 138.96704 114.48832 310.39488 114.48832a749.39904 749.39904 0 0 0 155.19744-15.4624v-85.8624z"
        fill={getIconColor(color, 0, '#707070')}
      />
    </Svg>
  );
};

IconJifen.defaultProps = {
  size: 18,
};

IconJifen = React.memo ? React.memo(IconJifen) : IconJifen;

export default IconJifen;
