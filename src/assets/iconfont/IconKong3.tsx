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

let IconKong3: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1474 1024" width={size} height={size} {...rest}>
      <Path
        d="M1117.44 780.6464h147.712v12.07296H374.7328a42.2912 42.2912 0 0 1-42.30144-42.27072v-320.8192H84.65408v-12.07296H332.4416v-139.264a42.2912 42.2912 0 0 1 42.30144-42.27072h18.1248v-18.176a42.32192 42.32192 0 0 1 42.31168-42.3424h713.1136a42.32192 42.32192 0 0 1 42.2912 42.3424V689.8688a42.32192 42.32192 0 0 1-42.2912 42.3424h-18.13504v18.24768c0 11.8272-4.864 22.528-12.6976 30.19776z m-29.5936 0a30.208 30.208 0 0 0 30.208-30.19776v-472.1664a30.208 30.208 0 0 0-30.208-30.18752H374.7328a30.208 30.208 0 0 0-30.208 30.18752v139.27424h2.048v12.0832h-2.048v320.8192a30.208 30.208 0 0 0 30.208 30.18752h713.1136zM404.9408 236.02176h682.89536a42.2912 42.2912 0 0 1 42.2912 42.26048v441.84576h18.13504c16.6912 0 30.21824-13.54752 30.21824-30.26944V217.84576a30.23872 30.23872 0 0 0-30.208-30.26944h-713.1136a30.23872 30.23872 0 0 0-30.21824 30.26944v18.176z m900.44416 556.6976v-12.0832h104.79616v12.0832h-104.79616zM846.11072 78.6432a30.22848 30.22848 0 0 1-30.208-30.23872c0-16.70144 13.5168-30.24896 30.208-30.24896 16.6912 0 30.208 13.54752 30.208 30.24896 0 16.6912-13.5168 30.23872-30.208 30.23872z m0-12.0832c10.00448 0 18.1248-8.12032 18.1248-18.15552 0-10.0352-8.12032-18.16576-18.1248-18.16576-10.01472 0-18.1248 8.13056-18.1248 18.16576s8.11008 18.16576 18.1248 18.16576z m181.2992 956.1088a30.22848 30.22848 0 0 1-30.21824-30.24896c0-16.70144 13.5168-30.24896 30.208-30.24896 16.6912 0 30.22848 13.54752 30.22848 30.24896 0 16.6912-13.52704 30.23872-30.21824 30.23872z m0-12.0832c10.00448 0 18.1248-8.13056 18.1248-18.16576s-8.12032-18.16576-18.1248-18.16576c-10.01472 0-18.1248 8.13056-18.1248 18.16576s8.11008 18.16576 18.1248 18.16576zM211.56864 635.38176a24.18688 24.18688 0 0 1-24.1664-24.18688 24.18688 24.18688 0 1 1 24.1664 24.18688z m0-12.0832a12.10368 12.10368 0 1 0 0-24.22784c-6.67648 0-12.0832 5.4272-12.0832 12.12416 0 6.68672 5.40672 12.11392 12.0832 12.11392z m1087.7952-48.4352a24.18688 24.18688 0 0 1-24.17664-24.18688 24.18688 24.18688 0 1 1 24.1664 24.19712z m0-12.07296c6.656 0 12.0832-5.4272 12.0832-12.11392 0-6.69696-5.4272-12.11392-12.0832-12.11392-6.67648 0-12.09344 5.4272-12.09344 12.11392 0 6.69696 5.41696 12.11392 12.0832 12.11392z m78.5408-211.8144v-60.416c0-6.66624 5.40672-12.0832 12.0832-12.0832h0.03072c6.67648 0 12.0832 5.41696 12.0832 12.0832v60.416h60.416c6.68672 0 12.09344 5.41696 12.09344 12.0832v0.04096a12.0832 12.0832 0 0 1-12.0832 12.0832h-60.416v60.416a12.0832 12.0832 0 0 1-12.0832 12.0832h-0.04096a12.0832 12.0832 0 0 1-12.0832-12.0832v-60.416h-60.416a12.0832 12.0832 0 0 1-12.0832-12.0832v-0.03072c0-6.67648 5.40672-12.0832 12.0832-12.0832h60.416zM36.3008 617.23648v-30.19776a6.05184 6.05184 0 1 1 12.10368 0v30.208h30.208a6.05184 6.05184 0 1 1 0 12.09344h-30.208v30.208a6.05184 6.05184 0 1 1-12.10368 0v-30.208H6.10304a6.05184 6.05184 0 1 1 0-12.10368h30.208zM326.37952 24.20736V6.08256a6.05184 6.05184 0 1 1 12.10368 0v18.1248h18.11456a6.05184 6.05184 0 0 1 0 12.10368H338.4832v18.11456a6.05184 6.05184 0 1 1-12.10368 0v-18.1248H308.2752a6.05184 6.05184 0 1 1 0-12.09344h18.1248z"
        fill={getIconColor(color, 0, '#117fe8')}
      />
      <Path
        d="M620.52352 511.10912v13.24032h58.4192v46.12096h-74.51648v13.42464H767.8464V570.4704h-74.9056v-46.12096h58.80832v-13.24032H620.52352z m83.32288-54.6816a260.3008 260.3008 0 0 1 54.9888 34.2528l-7.86432 11.86816c-17.6128-14.78656-35.81952-26.4704-54.39488-35.03104l7.2704-11.08992z m-40.0384 1.36192l8.62208 10.11712c-14.94016 13.6192-33.51552 25.10848-55.73632 34.2528l-5.9392-12.84096c21.4528-7.9872 39.07584-18.49344 53.06368-31.5392z m22.9888-47.104c2.49856 6.0416 4.98688 12.8512 7.28064 20.43904h73.3696v39.1168h-13.9776v-26.08128H618.79296v25.88672H604.8256v-38.92224h75.08992a158.58688 158.58688 0 0 0-8.04864-18.10432l14.9504-2.33472z"
        fill={getIconColor(color, 1, '#117fe8')}
      />
      <Path
        d="M686.1312 672.6656v-14.1312c8.32512 0 16.56832-0.68608 24.65792-2.05824l2.3552 13.9264a161.6896 161.6896 0 0 1-27.01312 2.2528z m53.4528-9.1136l-4.70016-13.312a145.73568 145.73568 0 0 0 22.53824-10.17856l6.88128 12.32896c-7.90528 4.4032-16.16896 8.1408-24.71936 11.1616z m47.34976-26.43968l-8.86784-10.99776a147.47648 147.47648 0 0 0 17.87904-17.08032l10.57792 9.34912a161.5872 161.5872 0 0 1-19.58912 18.72896z m36.02432-40.87808l-12.01152-7.41376c4.33152-7.02464 8.06912-14.39744 11.1616-22.05696l13.08672 5.2736c-3.3792 8.3968-7.4752 16.49664-12.2368 24.19712z m20.18304-50.05312l-13.79328-2.99008c1.7408-8.02816 2.80576-16.22016 3.1744-24.5248l14.10048 0.63488c-0.4096 9.09312-1.56672 18.08384-3.4816 26.88z m2.37568-54.4768l-14.00832 1.76128a145.69472 145.69472 0 0 0-5.16096-24.18688l13.5168-4.096c2.62144 8.62208 4.51584 17.48992 5.65248 26.5216z m-15.99488-52.24448l-12.5952 6.37952c-3.7376-7.3728-8.0896-14.39744-13.0048-21.03296l11.33568-8.40704c5.39648 7.2704 10.16832 14.98112 14.26432 23.06048z m-32.26624-43.48928l-9.76896 10.19904a147.27168 147.27168 0 0 0-19.23072-15.5648l7.91552-11.6736a161.3824 161.3824 0 0 1 21.08416 17.03936z m-44.4416-30.17728l-5.86752 12.84096a145.408 145.408 0 0 0-23.27552-8.32512l3.60448-13.64992c8.77568 2.31424 17.3056 5.376 25.53856 9.13408z m-52.92032-13.8752l-1.19808 14.06976a148.48 148.48 0 0 0-24.94464-0.01024l-1.1776-14.06976a164.20864 164.20864 0 0 1 27.32032 0.01024z m-54.12864 4.53632l3.54304 13.6704c-8.01792 2.06848-15.81056 4.8128-23.32672 8.20224l-5.80608-12.87168c8.2432-3.70688 16.80384-6.72768 25.6-9.00096z m-49.41824 22.30272l7.89504 11.69408c-6.84032 4.62848-13.29152 9.82016-19.26144 15.5136l-9.74848-10.20928a161.3824 161.3824 0 0 1 21.11488-16.9984z m-39.64928 38.05184l11.3664 8.37632c-4.89472 6.64576-9.22624 13.69088-12.93312 21.07392l-12.61568-6.3488c4.06528-8.0896 8.8064-15.81056 14.1824-23.10144z m-24.09472 47.73888l13.48608 4.15744a145.664 145.664 0 0 0-5.26336 24.1664l-13.99808-1.83296c1.1776-9.0112 3.11296-17.8688 5.77536-26.49088z m-6.99392 54.26176l14.11072-0.59392c0.34816 8.31488 1.3824 16.50688 3.10272 24.53504l-13.81376 2.94912a160.83968 160.83968 0 0 1-3.39968-26.89024z m11.4176 53.13536l13.1072-5.2736c3.072 7.66976 6.8096 15.0528 11.14112 22.07744l-12.02176 7.40352a160.11264 160.11264 0 0 1-12.22656-24.20736z m28.44672 46.14144l10.60864-9.3184a147.47648 147.47648 0 0 0 17.83808 17.13152l-8.88832 10.9568a161.5872 161.5872 0 0 1-19.5584-18.76992z m41.79968 33.91488l6.93248-12.288c7.18848 4.05504 14.70464 7.49568 22.48704 10.28096l-4.7616 13.29152a159.87712 159.87712 0 0 1-24.65792-11.28448z m51.456 18.3296l2.39616-13.91616c8.06912 1.39264 16.2816 2.0992 24.59648 2.12992l-0.04096 14.11072a161.61792 161.61792 0 0 1-26.95168-2.32448z"
        fill={getIconColor(color, 2, '#117fe8')}
      />
    </Svg>
  );
};

IconKong3.defaultProps = {
  size: 18,
};

IconKong3 = React.memo ? React.memo(IconKong3) : IconKong3;

export default IconKong3;
