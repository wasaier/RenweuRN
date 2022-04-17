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

let IconSaoma: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M106.43573692 408.14028213a35.26645781 35.26645781 0 0 0 35.2664578-35.26645781V131.29858935h241.04623799a35.26645781 35.26645781 0 0 0 0-69.29858935H140.46786846A69.29858935 69.29858935 0 0 0 71.1692791 131.29858935v242.28056427a35.26645781 35.26645781 0 0 0 35.26645781 35.26645783z m276.31269579 484.56112852H140.46786846V650.42084638a35.26645781 35.26645781 0 0 0-69.29858936 0v242.28056427A69.29858935 69.29858935 0 0 0 140.46786846 961.2946707h242.28056425a35.26645781 35.26645781 0 0 0 0-69.29858935zM917.56426308 615.85971787a35.26645781 35.26645781 0 0 0-35.2664578 35.26645781v241.57523497H641.25156729a35.26645781 35.26645781 0 0 0 0 69.29858935h242.28056425A69.29858935 69.29858935 0 0 0 952.8307209 892.70141065V650.42084638a35.26645781 35.26645781 0 0 0-35.26645781-35.2664578zM883.53213154 62H641.25156729a35.26645781 35.26645781 0 0 0 0 69.29858935h242.28056425v242.28056427a35.26645781 35.26645781 0 0 0 69.29858936 0V131.29858935A69.29858935 69.29858935 0 0 0 883.53213154 62z m35.2664578 415.43887148H106.43573692a35.26645781 35.26645781 0 0 0-1e-8 69.12225704h811.12852617a35.26645781 35.26645781 0 0 0 0-69.12225704z"
        fill={getIconColor(color, 0, '#368BF4')}
      />
    </Svg>
  );
};

IconSaoma.defaultProps = {
  size: 18,
};

IconSaoma = React.memo ? React.memo(IconSaoma) : IconSaoma;

export default IconSaoma;
