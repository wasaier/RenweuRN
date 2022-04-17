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

let IconNiuren: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M328.012104 703.512778m-34.792411 0a34 34 0 1 0 69.584821 0 34 34 0 1 0-69.584821 0Z"
        fill={getIconColor(color, 0, '#13227a')}
      />
      <Path
        d="M691.285804 703.512778m-34.792411 0a34 34 0 1 0 69.584821 0 34 34 0 1 0-69.584821 0Z"
        fill={getIconColor(color, 1, '#13227a')}
      />
      <Path
        d="M869.298104 625.910353c3.043313-20.554128 4.626367-41.636283 4.626367-63.119573 0-90.37124-27.960819-173.659155-75.009368-240.235456 22.658046 4.454452 45.514613 1.644453 59.930951-2.423189 17.71036-4.997827 64.246233-14.755052 82.971713-46.304605 19.85214-33.44574 15.043624-81.525782 15.043624-81.525782L761.09166 225.335095c-2.010797-24.243147-4.285606-48.350195-6.16235-59.526745-1.914606-11.404748-6.294356-33.447786-14.111392-52.945863-11.490705-28.6669-27.606755-43.24185-47.898917-43.319621l-0.174985 0c-19.621896 0-38.426171 11.949146-57.488319 36.531008-14.835893 19.130709-25.52842 40.331567-29.437449 48.558949-0.89744 1.889023-1.721201 3.613294-2.489704 5.222955-3.363607 7.04137-5.801123 12.19781-8.514931 18.605753-27.321252-7.099698-55.836703-10.866489-85.165682-10.866489s-57.844429 3.76679-85.166705 10.866489c-2.715855-6.412037-5.154393-11.5695-8.519024-18.612916-0.76748-1.607614-1.590218-3.329838-2.486634-5.214768-3.908006-8.227382-14.601556-29.429263-29.436426-48.558949-19.062148-24.580838-37.866423-36.531008-57.488319-36.531008l-0.173962 0c-20.293185 0.077771-36.408211 14.652721-47.89994 43.319621-7.814989 19.497053-12.195763 41.541115-14.111392 52.946886-1.87572 11.17655-4.151553 35.282574-6.16235 59.525722L62.435493 192.301747c0 0-4.808516 48.080042 15.042601 81.525782 18.726503 31.549553 65.262376 41.306778 82.972736 46.304605 14.416338 4.068665 37.273928 6.877641 59.931974 2.423189-47.048549 66.576301-75.009368 149.863193-75.009368 240.235456 0 21.48329 1.583055 42.566468 4.626367 63.119573-53.362348 35.025725-82.078367 77.752852-82.078367 123.652228 0 59.780525 48.705282 114.185622 137.14452 153.192008 81.779561 36.069497 189.95019 55.933917 304.582997 55.933917 114.632807 0 222.803435-19.86442 304.582997-55.933917 88.439238-39.006386 137.14452-93.411483 137.14452-153.192008C951.376471 703.663204 922.660452 660.934031 869.298104 625.910353zM649.499096 181.90598c0.782829-1.638313 1.620917-3.394307 2.534729-5.317099 12.726859-26.787086 28.313859-46.708811 37.207413-53.523007 4.603855 8.229428 11.028171 26.206872 15.228843 51.214429 1.636267 9.741875 3.858888 33.792641 5.89629 58.671261-20.920472-15.013949-43.351344-27.751041-66.994834-37.878702C645.263631 190.773951 647.099443 186.930413 649.499096 181.90598zM549.833165 415.415244c0.264013-0.147356 26.620287-14.906501 48.580438-30.891568 15.621792-11.369955 32.015158-24.598234 39.508829-31.273261 11.799744-10.508331 39.002292-46.505173 48.489364-59.488883 1.659803-2.27174 4.181229-3.759627 6.971785-4.114714 2.796696-0.355087 5.606695 0.456395 7.78122 2.240017l35.880185 29.438473c2.171456 1.781576 3.51608 4.376681 3.716648 7.178493s-0.75827 5.562692-2.653433 7.635911c-0.451278 0.493234-11.214413 12.231579-25.640983 24.606421-8.902764 7.637957-19.615757 15.292288-27.437909 20.881586-1.830695 1.307785-3.518127 2.51324-5.000897 3.588735-12.307304 8.92937-42.323944 24.904203-65.718771 33.552164-28.598338 10.571776-56.571437 15.462157-57.749262 15.665795-0.585331 0.101307-1.169639 0.149403-1.74576 0.149403-4.269233 0-8.175193-2.680039-9.640568-6.821359C543.511179 423.062412 545.480021 417.84662 549.833165 415.415244zM668.772045 496.650407c0 19.21462-15.57779 34.792411-34.792411 34.792411-19.216667 0-34.792411-15.57779-34.792411-34.792411s15.575744-34.792411 34.792411-34.792411C653.194254 461.857996 668.772045 477.435787 668.772045 496.650407zM314.826803 174.282349c4.200672-25.01165 10.624988-42.98807 15.228843-51.216475 8.893554 6.814196 24.480554 26.735921 37.207413 53.524031 0.912789 1.919722 1.749854 3.673669 2.53166 5.309936 2.400676 5.027503 4.237511 8.872065 6.130627 13.173021-23.64349 10.127661-46.073338 22.864754-66.994834 37.878702C310.967916 208.073966 313.192583 184.0232 314.826803 174.282349zM282.179242 337.940732l19.451004-16.262382c4.16281-3.480264 10.31902-3.104711 14.028505 0.852414 0.257873 0.275269 25.908066 27.596522 37.608549 36.735669 1.839905 1.436722 4.222161 3.373841 6.982018 5.615904 7.088442 5.762237 16.797571 13.653975 25.016767 19.320021 23.316032 16.071024 50.736545 31.007201 51.010791 31.155581 4.498454 2.443655 6.499018 7.836479 4.682649 12.622482-1.534959 4.044106-5.39487 6.604418-9.562796 6.604418-0.765433 0-1.541099-0.085958-2.314719-0.26606-0.975211-0.226151-24.125467-5.641487-44.86379-14.960737-22.570042-10.143011-34.398438-16.879436-50.906413-27.28339-17.301038-10.901281-49.66412-37.235043-51.033303-38.350446-2.366907-1.928932-3.749394-4.814656-3.768837-7.868201C278.491247 342.80246 279.836895 339.89934 282.179242 337.940732zM399.643538 496.650407c0 19.21462-15.576767 34.792411-34.792411 34.792411-19.21462 0-34.792411-15.57779-34.792411-34.792411s15.57779-34.792411 34.792411-34.792411C384.067794 461.857996 399.643538 477.435787 399.643538 496.650407zM835.300802 834.218656c8.492418-19.310811 13.407358-40.451294 13.921058-62.524009 0.001023-0.026606 0.001023-0.055259 0.002047-0.081864 0.022513-0.997724 0.036839-1.99647 0.041956-2.998287 0.00614-0.715291 0.005117-1.430582 0.001023-2.14792-0.00307-0.372483-0.005117-0.74599-0.011256-1.118474-0.032746-2.728134-0.132006-5.458315-0.300852-8.18952 0.001023-0.031722 0.002047-0.064468 0.002047-0.096191-0.00921-0.941442-0.081864-1.865487-0.203638-2.77623-1.851161-23.417339-8.710382-46.781466-21.021779-68.486814-0.046049-0.093121-0.084934-0.188288-0.132006-0.281409-5.523807-11.069103-18.975167-15.565511-30.045293-10.041704-11.069103 5.523807-15.565511 18.97619-10.041704 30.046317 0.300852 0.601704 0.62831 1.179872 0.974188 1.743714l-0.082888 0.048095c9.480932 16.499789 14.623046 34.332946 15.795754 52.16815l-0.024559 0.002047c0.207731 3.048429 0.298805 6.077416 0.278339 9.086959-0.001023 0.143263-0.002047 0.285502-0.004093 0.428765-0.007163 0.64673-0.022513 1.292436-0.039909 1.937119-0.019443 0.649799-0.037862 1.298576-0.066515 1.946328-0.004093 0.100284-0.00921 0.200568-0.014326 0.300852-0.961908 20.184715-6.954389 39.928385-17.45965 57.275471-6.02011 9.895371-13.427824 18.887163-21.972431 26.687826-0.079818 0.071631-0.158612 0.146333-0.23843 0.218988-0.444115 0.403183-0.89437 0.797156-1.343601 1.193175-0.411369 0.36225-0.822738 0.724501-1.24127 1.081635-0.147356 0.125867-0.294712 0.249687-0.443092 0.375553-5.288446 4.467755-11.032264 8.54256-17.216103 12.145621l0.030699 0.053212c-3.25002 1.90335-6.603395 3.65218-10.041704 5.254677-65.62258 19.540032-143.220912 30.05041-224.752834 30.05041-107.679441 0-208.516034-18.319228-283.934724-51.582819-67.763336-29.887704-106.627483-68.660776-106.627483-106.377796S157.950893 673.071466 225.71423 643.183761c75.41869-33.263591 176.255283-51.582819 283.934724-51.582819 107.680465 0 208.517057 18.319228 283.935748 51.582819 67.763336 29.887704 106.626459 68.660776 106.626459 106.377796C900.211161 778.677689 877.034299 808.418037 835.300802 834.218656z"
        fill={getIconColor(color, 2, '#13227a')}
      />
    </Svg>
  );
};

IconNiuren.defaultProps = {
  size: 18,
};

IconNiuren = React.memo ? React.memo(IconNiuren) : IconNiuren;

export default IconNiuren;
