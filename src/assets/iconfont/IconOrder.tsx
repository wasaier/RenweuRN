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

let IconOrder: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M641.75823403 116.61346626v0.71840287c-3.33709717 0-17.18914031-1.2205124-51.88954353-0.71840287H278.46422386c-57.30769158 0-103.8138485 44.28142547-103.81384849 98.86227607v593.16979409c0 54.58007813 46.5069294 98.86227608 103.81307602 98.86227608h467.10863113c57.27138519 0 103.77831459-44.28219795 103.7783146-98.86150359V314.33724595L641.75823403 116.61346626z m25.90885162 593.20610046H356.33291435c-14.35492515 0-25.98069191-11.05258943-25.98069191-24.72464561 0-13.67128372 11.62576675-24.72464561 25.98069191-24.72464562h311.33262635c14.38968659 0 25.98069191 11.05336189 25.9806919 24.72464562 0 13.67282868-11.59100532 24.72464561-25.9806919 24.72464561z m0-148.31002235H356.33291435c-14.35492515 0-25.98069191-11.05258943-25.98069191-24.72464561 0-13.63574981 11.62576675-24.72464561 25.98069191-24.72464562h311.33262635c14.38968659 0 25.98069191 11.0888958 25.9806919 24.72464562 0 13.67282868-11.59100532 24.72464561-25.9806919 24.72464561z m25.97991943-247.17152596c-28.6356926 0-51.88877107-22.14148522-51.88877106-49.41298484V166.02645111l155.66631317 148.31079484H693.64777756z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconOrder.defaultProps = {
  size: 18,
};

IconOrder = React.memo ? React.memo(IconOrder) : IconOrder;

export default IconOrder;
