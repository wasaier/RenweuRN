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

let IconSetting: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1105 1024" width={size} height={size} {...rest}>
      <Path
        d="M424.36524698 993.03301318c-2.69358333 0-5.50427835-0.35133639-8.19786038-1.17112347-80.69036988-22.36844848-155.17378733-65.2315466-215.48661797-124.13903038-6.32406413-6.20695113-9.60320853-14.87326089-9.13475915-23.65668365 0.46844939-8.78342146 4.80160427-17.09839483 11.82834118-22.48556018 38.52994454-29.98074647 49.18716225-84.2037377 24.82780582-126.24705132-24.47646942-42.16042533-76.70855139-59.96149424-121.79678475-41.92620065-8.19786037 3.39625611-17.56684421 3.04491971-25.41336691-1.05401046-7.84652398-3.98181849-13.70213872-11.2427801-15.81015966-19.79197687-10.30588131-40.63796548-15.45882197-82.32994144-15.45882197-124.02191739 0-41.57486425 5.15294066-83.2668402 15.45882197-124.02191739 2.22513394-8.54919677 7.96363568-15.81015966 15.81015966-19.90908985 7.84652398-4.09893019 17.09839483-4.45026658 25.41336691-1.05401047 44.97112035 18.26951699 97.20320234 0.35133639 121.67967176-41.80908894 24.35935643-41.92620065 13.70213872-96.26630484-24.82780583-126.24705134-7.02673692-5.50427835-11.2427801-13.70213872-11.82834117-22.48556018-0.46844939-8.78342146 2.81069502-17.44973122 9.13475915-23.65668363 60.31283065-58.90748249 134.91336109-101.88769489 215.48661796-124.13903039 8.66630976-2.22513394 17.68395591-0.81978578 25.06203051 3.98181849 7.37807459 4.91871597 12.29679056 12.64812695 13.46791403 21.43154971 6.55828882 48.13315178 48.25026477 84.43796238 96.85186593 84.43796239 34.78235074 0 84.32085068-51.76363387 97.20320233-74.48341747-0.93689877-4.68449127-0.70267408-9.72032023 0.70267408-14.63903618 4.91871597-16.16149605 22.01711081-25.1791435 38.06149515-20.61176397 0 0 0 0 0.11711171 0l0 0 0 0c84.08662598 25.06203051 156.34491079 66.87111946 214.78394388 123.90480571 6.32406413 6.20695113 9.72032023 14.87326089 9.25187085 23.65668365-0.46844939 8.78342146-4.80160427 16.98128183-11.82834117 22.48556018-38.41283155 29.98074647-49.18716225 84.2037377-24.82780583 126.24705133 24.47646942 42.16042533 76.82566438 60.19571894 121.79678475 41.80908895 8.19786037-3.39625611 17.44973122-3.04491971 25.41336691 1.05401046 7.96363568 3.98181849 13.70213872 11.2427801 15.81015965 19.90908986 10.30588131 40.75507717 15.45882197 82.44705443 15.45882198 123.90480568s-5.27005365 83.14972721-15.45882198 124.02191739c-2.22513394 8.54919677-7.96363568 15.81015966-15.81015965 19.79197685-7.96363568 4.09893019-17.09839483 4.45026658-25.41336691 1.05401048-44.97112035-18.1524053-97.32031533-0.23422469-121.79678475 41.92620065-24.35935643 41.92620065-13.70213872 96.26630484 24.82780583 126.24705132 7.02673692 5.38716535 11.2427801 13.58502573 11.82834117 22.48556018s-2.81069502 17.44973122-9.25187085 23.65668365c-60.19571894 58.79037078-134.67913639 101.7705819-215.48661796 124.13903038-8.54919677 2.34224564-17.68395591 0.93689877-24.94491883-3.98181848-7.37807459-4.91871597-12.29679056-12.76523995-13.58502572-21.43154972-6.55828882-48.13315178-48.13315178-84.43796238-96.85186593-84.43796238-48.60160116 0-90.29357711 36.3048106-96.85186593 84.43796238-1.17112347 8.78342146-6.08983943 16.51283374-13.46791403 21.43154972C436.19358944 991.39344032 430.33797471 993.03301318 424.36524698 993.03301318zM266.73210101 845.00307574c40.40374079 34.07967666 86.66309631 60.78128003 136.20159625 78.46523595 22.95400957-60.42994234 81.74438035-102.70748068 148.73261151-102.70748067 66.98823116 0 125.77860194 42.27753705 148.7326115 102.70748067 49.65561163-17.68395591 95.79785546-44.38555927 136.20159626-78.46523595-40.87219017-50.35828571-48.13315178-122.38234583-14.52192451-180.35293082 33.49411557-57.85347201 99.54544796-87.2486574 163.254536-77.52833718 4.68449127-25.99892928 6.90962521-52.34919495 6.90962522-78.46523594 0-26.11604099-2.34224564-52.34919495-6.90962522-78.46523593-63.47486206 10.30588131-129.64330742-19.67486515-163.254536-77.52833717-33.61122857-57.85347201-26.35026567-129.87753213 14.52192451-180.23581785-39.46684201-33.25989088-85.37486115-59.49304486-136.90427033-78.34812422-26.11604099 42.86309941-89.23956665 102.47325598-148.02993743 102.47325598-66.87111946 0-125.66149023-42.27753705-148.73261151-102.70748068-49.53849994 17.56684421-95.79785546 44.26844627-136.20159625 78.58234763 40.87219017 50.35828571 48.13315178 122.38234583 14.5219245 180.23581784-33.61122857 57.85347201-99.19411156 87.59999508-163.137423 77.52833717-4.68449127 25.99892928-7.02673692 52.23208196-7.02673692 78.46523594 0 26.23315398 2.34224564 52.46630666 7.02673692 78.46523594 63.59197505-10.07165662 129.64330742 19.67486515 163.254536 77.64545017C314.74814109 722.50361692 307.60429119 794.64479005 266.73210101 845.00307574z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M554.18581022 678.32457528c-93.56491391 0-169.76597953-76.20106563-169.76597955-169.89089869s76.20106563-169.76597953 169.76597955-169.76597953c93.56491391 0 169.76597953 76.20106563 169.76597952 169.76597953S647.75072412 678.32457528 554.18581022 678.32457528zM554.18581022 404.1256609c-57.58801762 0-104.43293485 46.84491723-104.43293485 104.43293485s46.84491723 104.43293485 104.43293485 104.43293481c57.58801762 0 104.30801568-46.84491723 104.30801568-104.43293481S611.77382782 404.1256609 554.18581022 404.1256609z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconSetting.defaultProps = {
  size: 18,
};

IconSetting = React.memo ? React.memo(IconSetting) : IconSetting;

export default IconSetting;
