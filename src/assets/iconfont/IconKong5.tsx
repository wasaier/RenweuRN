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

let IconKong5: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M123.733333 785.066667m8.533334 0l38.4 0q8.533333 0 8.533333 8.533333l0 0q0 8.533333-8.533333 8.533333l-38.4 0q-8.533333 0-8.533334-8.533333l0 0q0-8.533333 8.533334-8.533333Z"
        fill={getIconColor(color, 0, '#0983FD')}
      />
      <Path
        d="M192 251.733333a8.533333 8.533333 0 0 1 8.533333 8.533334v17.066666h17.066667a8.533333 8.533333 0 1 1 0 17.066667h-17.066667v17.066667a8.533333 8.533333 0 1 1-17.066666 0l-0.004267-17.066667H166.4a8.533333 8.533333 0 1 1 0-17.066667h17.066667v-17.066666a8.533333 8.533333 0 0 1 8.533333-8.533334zM721.066667 72.533333a8.533333 8.533333 0 0 1 8.533333 8.533334v17.066666h17.066667a8.533333 8.533333 0 0 1 0 17.066667h-17.066667v17.066667a8.533333 8.533333 0 0 1-17.066667 0l-0.004266-17.066667H695.466667a8.533333 8.533333 0 0 1 0-17.066667h17.066666V81.066667a8.533333 8.533333 0 0 1 8.533334-8.533334zM827.733333 174.933333a8.533333 8.533333 0 0 1 8.533334 8.533334v17.066666h17.066666a8.533333 8.533333 0 0 1 0 17.066667h-17.066666v17.066667a8.533333 8.533333 0 0 1-17.066667 0l-0.004267-17.066667H802.133333a8.533333 8.533333 0 0 1 0-17.066667h17.066667v-17.066666a8.533333 8.533333 0 0 1 8.533333-8.533334z"
        fill={getIconColor(color, 1, '#0983FD')}
      />
      <Path
        d="M213.333333 785.066667m8.533334 0l115.2 0q8.533333 0 8.533333 8.533333l0 0q0 8.533333-8.533333 8.533333l-115.2 0q-8.533333 0-8.533334-8.533333l0 0q0-8.533333 8.533334-8.533333Z"
        fill={getIconColor(color, 2, '#0983FD')}
      />
      <Path
        d="M281.6 836.266667m8.533333 0l469.333334 0q8.533333 0 8.533333 8.533333l0 0q0 8.533333-8.533333 8.533333l-469.333334 0q-8.533333 0-8.533333-8.533333l0 0q0-8.533333 8.533333-8.533333Z"
        fill={getIconColor(color, 3, '#0983FD')}
      />
      <Path
        d="M708.266667 785.066667m8.533333 0l93.866667 0q8.533333 0 8.533333 8.533333l0 0q0 8.533333-8.533333 8.533333l-93.866667 0q-8.533333 0-8.533333-8.533333l0 0q0-8.533333 8.533333-8.533333Z"
        fill={getIconColor(color, 4, '#0983FD')}
      />
      <Path
        d="M605.866667 887.466667m8.533333 0l264.533333 0q8.533333 0 8.533334 8.533333l0 0q0 8.533333-8.533334 8.533333l-264.533333 0q-8.533333 0-8.533333-8.533333l0 0q0-8.533333 8.533333-8.533333Z"
        fill={getIconColor(color, 5, '#0983FD')}
      />
      <Path
        d="M0 938.666667m8.533333 0l349.866667 0q8.533333 0 8.533333 8.533333l0 0q0 8.533333-8.533333 8.533333l-349.866667 0q-8.533333 0-8.533333-8.533333l0 0q0-8.533333 8.533333-8.533333Z"
        fill={getIconColor(color, 6, '#0983FD')}
      />
      <Path
        d="M955.733333 887.466667m8.533334 0l51.2 0q8.533333 0 8.533333 8.533333l0 0q0 8.533333-8.533333 8.533333l-51.2 0q-8.533333 0-8.533334-8.533333l0 0q0-8.533333 8.533334-8.533333Z"
        fill={getIconColor(color, 7, '#0983FD')}
      />
      <Path
        d="M435.2 938.666667m8.533333 0l51.2 0q8.533333 0 8.533334 8.533333l0 0q0 8.533333-8.533334 8.533333l-51.2 0q-8.533333 0-8.533333-8.533333l0 0q0-8.533333 8.533333-8.533333Z"
        fill={getIconColor(color, 8, '#0983FD')}
      />
      <Path
        d="M439.338667 348.1984a8.533333 8.533333 0 0 1 12.7488 11.319467l-0.490667 0.554666-41.326933 42.666667a8.533333 8.533333 0 0 1-11.741867 0.490667l-0.516267-0.494934-26.939733-27.810133a8.533333 8.533333 0 0 1 11.7248-12.381867l0.533333 0.507734 20.808534 21.482666 35.2-36.334933zM405.333333 443.733333a34.133333 34.133333 0 1 0 0 68.266667 34.133333 34.133333 0 0 0 0-68.266667z m0 17.066667a17.066667 17.066667 0 1 1 0 34.133333 17.066667 17.066667 0 0 1 0-34.133333zM405.333333 546.133333a34.133333 34.133333 0 1 0 0 68.266667 34.133333 34.133333 0 0 0 0-68.266667z m0 17.066667a17.066667 17.066667 0 1 1 0 34.133333 17.066667 17.066667 0 0 1 0-34.133333z"
        fill={getIconColor(color, 9, '#0983FD')}
      />
      <Path
        d="M659.153067 162.133333l3.780266 0.017067c26.978133 0.251733 37.678933 3.264 48.098134 8.725333l0.712533 0.375467a61.956267 61.956267 0 0 1 24.9344 24.234667l0.8704 1.570133C743.496533 208.183467 746.666667 219.221333 746.666667 249.646933v388.1728l-0.017067 3.780267c-0.251733 26.978133-3.264 37.678933-8.725333 48.098133l-0.375467 0.712534a61.956267 61.956267 0 0 1-24.234667 24.9344l-1.570133 0.8704c-11.127467 5.947733-22.161067 9.117867-52.590933 9.117866H364.842667l-3.780267-0.017066c-26.978133-0.251733-37.678933-3.264-48.098133-8.725334l-0.712534-0.375466a61.956267 61.956267 0 0 1-24.9344-24.234667l-0.8704-1.570133C280.503467 679.2832 277.333333 668.245333 277.333333 637.819733V249.642667c0-29.781333 3.0336-40.9856 8.7424-51.882667l0.375467-0.708267a61.956267 61.956267 0 0 1 24.234667-24.9344l1.570133-0.8704C323.383467 165.303467 334.421333 162.133333 364.846933 162.133333h294.306134z m1.860266 17.066667H640v12.8a34.133333 34.133333 0 0 1-34.133333 34.133333H418.133333a34.133333 34.133333 0 0 1-34.133333-34.133333v-12.8h-21.013333l-3.6352 0.034133c-21.128533 0.2688-29.9648 2.210133-39.044267 7.0656a44.970667 44.970667 0 0 0-18.807467 18.807467l-0.763733 1.472c-4.548267 9.105067-6.2464 18.645333-6.331733 41.207467v391.893333l0.029866 3.6352c0.2688 21.128533 2.210133 29.9648 7.0656 39.044267a44.970667 44.970667 0 0 0 18.807467 18.807466l1.472 0.763734c9.105067 4.548267 18.645333 6.2464 41.207467 6.336h296.1664c25.169067 0 34.709333-1.8432 44.544-7.099734a44.970667 44.970667 0 0 0 18.8032-18.807466l0.763733-1.472c4.548267-9.105067 6.2464-18.645333 6.336-41.207467V249.642667c0-25.169067-1.8432-34.709333-7.099733-44.544a44.970667 44.970667 0 0 0-18.807467-18.8032l-1.472-0.763734c-9.105067-4.548267-18.645333-6.2464-41.207467-6.331733zM622.933333 179.2H401.066667v12.8a17.066667 17.066667 0 0 0 16.213333 17.045333L418.133333 209.066667h187.733334a17.066667 17.066667 0 0 0 17.045333-16.213334L622.933333 192v-12.8z"
        fill={getIconColor(color, 10, '#0983FD')}
      />
      <Path
        d="M473.6 366.933333m8.533333 0l157.866667 0q8.533333 0 8.533333 8.533334l0 0q0 8.533333-8.533333 8.533333l-157.866667 0q-8.533333 0-8.533333-8.533333l0 0q0-8.533333 8.533333-8.533334Z"
        fill={getIconColor(color, 11, '#0983FD')}
      />
      <Path
        d="M473.6 469.333333m8.533333 0l157.866667 0q8.533333 0 8.533333 8.533334l0 0q0 8.533333-8.533333 8.533333l-157.866667 0q-8.533333 0-8.533333-8.533333l0 0q0-8.533333 8.533333-8.533334Z"
        fill={getIconColor(color, 12, '#0983FD')}
      />
      <Path
        d="M473.6 571.733333m8.533333 0l157.866667 0q8.533333 0 8.533333 8.533334l0 0q0 8.533333-8.533333 8.533333l-157.866667 0q-8.533333 0-8.533333-8.533333l0 0q0-8.533333 8.533333-8.533334Z"
        fill={getIconColor(color, 13, '#0983FD')}
      />
    </Svg>
  );
};

IconKong5.defaultProps = {
  size: 18,
};

IconKong5 = React.memo ? React.memo(IconKong5) : IconKong5;

export default IconKong5;
