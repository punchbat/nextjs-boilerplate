import React, { FC } from 'react';

import { LinkLego } from '@ccomponents/index';

import styles from './index.module.scss';

interface Props {
    href: string;
    mode: 'dark' | 'light';
}

const Logo: FC<Props> = ({ href, mode }) => {
    return (
        <LinkLego href={href}>
            {mode === 'dark' ? (
                <svg
                    className={styles.Logo}
                    width="769"
                    height="128"
                    viewBox="0 0 769 128"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M52.0846 109H67.8146V18.65H44.9346C21.9246 18.65 9.83463 30.48 9.83463 47.9C9.83463 61.81 16.4646 70 28.2946 78.45L7.75463 109H24.7846L47.6646 74.81L39.7346 69.48C30.1146 62.98 25.4346 57.91 25.4346 46.99C25.4346 37.37 32.1946 30.87 45.0646 30.87H52.0846V109ZM258.655 104.58V91.97C253.845 95.22 245.785 98.08 238.245 98.08C226.935 98.08 222.645 92.75 221.995 81.83H259.305V73.64C259.305 50.89 249.295 42.31 233.825 42.31C214.975 42.31 206.005 56.74 206.005 76.5C206.005 99.25 217.185 110.3 236.945 110.3C246.825 110.3 254.105 107.7 258.655 104.58ZM355.375 110.3C362.525 110.3 367.595 109 371.365 106.27V93.66C367.465 96.39 362.785 98.08 356.285 98.08C345.235 98.08 340.685 89.5 340.685 75.98C340.685 61.81 346.275 54.53 356.415 54.53C362.395 54.53 368.245 56.61 371.365 58.56V45.43C368.115 43.61 362.395 42.31 354.725 42.31C334.965 42.31 324.695 56.48 324.695 76.37C324.695 98.21 334.705 110.3 355.375 110.3ZM116.955 43.61V69.48H96.2846V43.61H80.8146V109H96.2846V81.7H116.955V109H132.425V43.61H116.955ZM202.235 96.78H195.345V43.61H150.235V49.2C150.235 65.19 149.195 85.86 143.735 96.78H138.925V123.95H153.225V109H187.935V123.95H202.235V96.78ZM308.055 109H325.605L300.775 73.77L322.615 43.61H307.015L285.175 73.77V43.61H269.705V109H285.175V76.89L308.055 109ZM233.565 54.53C241.235 54.53 243.575 60.9 243.575 69.09V70.39H221.995C222.385 59.99 226.155 54.53 233.565 54.53ZM179.875 96.78H158.035C162.325 86.9 163.495 69.09 163.495 57.78V55.83H179.875V96.78Z"
                        fill="white"
                    />
                    <g clipPath="url(#clip0_309_21428)">
                        <mask
                            id="mask0_309_21428"
                            style={{ maskType: 'alpha' }}
                            maskUnits="userSpaceOnUse"
                            x="401"
                            y="4"
                            width="121"
                            height="120"
                        >
                            <circle cx="461.995" cy="64" r="60" fill="white" />
                        </mask>
                        <g mask="url(#mask0_309_21428)" />
                        <g clipPath="url(#clip1_309_21428)">
                            <rect
                                width="120"
                                height="120"
                                transform="translate(401.995 4)"
                                fill="url(#paint0_linear_309_21428)"
                            />
                            <path
                                d="M379.995 62C379.995 53.1634 387.158 46 395.995 46H463.995C472.831 46 479.995 53.1634 479.995 62V214C479.995 222.837 472.831 230 463.995 230H395.995C387.158 230 379.995 222.837 379.995 214V62Z"
                                fill="#2A2927"
                            />
                            <path
                                d="M379.995 62C379.995 53.1634 387.158 46 395.995 46H463.995C472.831 46 479.995 53.1634 479.995 62V214C479.995 222.837 472.831 230 463.995 230H395.995C387.158 230 379.995 222.837 379.995 214V62Z"
                                fill="url(#paint1_linear_309_21428)"
                                fillOpacity="0.2"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M463.995 52H395.995C390.472 52 385.995 56.4772 385.995 62V214C385.995 219.523 390.472 224 395.995 224H463.995C469.517 224 473.995 219.523 473.995 214V62C473.995 56.4772 469.517 52 463.995 52ZM395.995 46C387.158 46 379.995 53.1634 379.995 62V214C379.995 222.837 387.158 230 395.995 230H463.995C472.831 230 479.995 222.837 479.995 214V62C479.995 53.1634 472.831 46 463.995 46H395.995Z"
                                fill="#2A2927"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M463.995 52H395.995C390.472 52 385.995 56.4772 385.995 62V214C385.995 219.523 390.472 224 395.995 224H463.995C469.517 224 473.995 219.523 473.995 214V62C473.995 56.4772 469.517 52 463.995 52ZM395.995 46C387.158 46 379.995 53.1634 379.995 62V214C379.995 222.837 387.158 230 395.995 230H463.995C472.831 230 479.995 222.837 479.995 214V62C479.995 53.1634 472.831 46 463.995 46H395.995Z"
                                fill="url(#paint2_linear_309_21428)"
                                fillOpacity="0.2"
                            />
                            <circle cx="471.995" cy="54" r="26" fill="#FC4714" />
                        </g>
                    </g>
                    <path
                        d="M587.775 110.3C597.525 110.3 604.155 106.79 608.185 104.06V91.45C602.985 95.22 597.265 98.08 588.945 98.08C574.645 98.08 567.885 86.51 567.885 63.89C567.885 40.62 574.385 29.57 589.725 29.57C596.875 29.57 603.505 32.69 608.185 35.68V23.07C604.025 20.08 597.265 17.35 588.945 17.35C564.895 17.35 551.895 35.03 551.895 63.89C551.895 93.53 565.415 110.3 587.775 110.3ZM649.936 109H663.456L681.916 40.75V109H697.386V18.65H676.326L658.126 85.6L639.926 18.65H618.606V109H631.476V40.75L649.936 109ZM743.673 110.3C753.423 110.3 760.053 106.79 764.083 104.06V91.45C758.883 95.22 753.163 98.08 744.843 98.08C730.543 98.08 723.783 86.51 723.783 63.89C723.783 40.62 730.283 29.57 745.623 29.57C752.773 29.57 759.403 32.69 764.083 35.68V23.07C759.923 20.08 753.163 17.35 744.843 17.35C720.793 17.35 707.793 35.03 707.793 63.89C707.793 93.53 721.313 110.3 743.673 110.3Z"
                        fill="white"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_309_21428"
                            x1="60"
                            y1="0"
                            x2="60"
                            y2="120"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#DBDEEF" />
                            <stop offset="1" stopColor="#FEFEFF" />
                        </linearGradient>
                        <linearGradient
                            id="paint1_linear_309_21428"
                            x1="429.995"
                            y1="52"
                            x2="429.995"
                            y2="124"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="white" stopOpacity="0" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                            id="paint2_linear_309_21428"
                            x1="429.995"
                            y1="46"
                            x2="429.995"
                            y2="230"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="white" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                        <clipPath id="clip0_309_21428">
                            <path
                                d="M401.995 64C401.995 30.8629 428.858 4 461.995 4C495.132 4 521.995 30.8629 521.995 64C521.995 97.1371 495.132 124 461.995 124C428.858 124 401.995 97.1371 401.995 64Z"
                                fill="white"
                            />
                        </clipPath>
                        <clipPath id="clip1_309_21428">
                            <rect width="120" height="120" fill="white" transform="translate(401.995 4)" />
                        </clipPath>
                    </defs>
                </svg>
            ) : (
                <svg
                    className={styles.Logo}
                    width="769"
                    height="128"
                    viewBox="0 0 769 128"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M52.0846 109H67.8146V18.65H44.9346C21.9246 18.65 9.83463 30.48 9.83463 47.9C9.83463 61.81 16.4646 70 28.2946 78.45L7.75463 109H24.7846L47.6646 74.81L39.7346 69.48C30.1146 62.98 25.4346 57.91 25.4346 46.99C25.4346 37.37 32.1946 30.87 45.0646 30.87H52.0846V109ZM258.655 104.58V91.97C253.845 95.22 245.785 98.08 238.245 98.08C226.935 98.08 222.645 92.75 221.995 81.83H259.305V73.64C259.305 50.89 249.295 42.31 233.825 42.31C214.975 42.31 206.005 56.74 206.005 76.5C206.005 99.25 217.185 110.3 236.945 110.3C246.825 110.3 254.105 107.7 258.655 104.58ZM355.375 110.3C362.525 110.3 367.595 109 371.365 106.27V93.66C367.465 96.39 362.785 98.08 356.285 98.08C345.235 98.08 340.685 89.5 340.685 75.98C340.685 61.81 346.275 54.53 356.415 54.53C362.395 54.53 368.245 56.61 371.365 58.56V45.43C368.115 43.61 362.395 42.31 354.725 42.31C334.965 42.31 324.695 56.48 324.695 76.37C324.695 98.21 334.705 110.3 355.375 110.3ZM116.955 43.61V69.48H96.2846V43.61H80.8146V109H96.2846V81.7H116.955V109H132.425V43.61H116.955ZM202.235 96.78H195.345V43.61H150.235V49.2C150.235 65.19 149.195 85.86 143.735 96.78H138.925V123.95H153.225V109H187.935V123.95H202.235V96.78ZM308.055 109H325.605L300.775 73.77L322.615 43.61H307.015L285.175 73.77V43.61H269.705V109H285.175V76.89L308.055 109ZM233.565 54.53C241.235 54.53 243.575 60.9 243.575 69.09V70.39H221.995C222.385 59.99 226.155 54.53 233.565 54.53ZM179.875 96.78H158.035C162.325 86.9 163.495 69.09 163.495 57.78V55.83H179.875V96.78Z"
                        fill="black"
                    />
                    <g clipPath="url(#clip0_258_22341)">
                        <mask
                            id="mask0_258_22341"
                            style={{
                                maskType: 'alpha',
                            }}
                            maskUnits="userSpaceOnUse"
                            x="401"
                            y="4"
                            width="121"
                            height="120"
                        >
                            <circle cx="461.995" cy="64" r="60" fill="white" />
                        </mask>
                        <g mask="url(#mask0_258_22341)" />
                        <g clipPath="url(#clip1_258_22341)">
                            <rect
                                width="120"
                                height="120"
                                transform="translate(401.995 4)"
                                fill="url(#paint0_linear_258_22341)"
                            />
                            <path
                                d="M379.995 62C379.995 53.1634 387.158 46 395.995 46H463.995C472.831 46 479.995 53.1634 479.995 62V214C479.995 222.837 472.831 230 463.995 230H395.995C387.158 230 379.995 222.837 379.995 214V62Z"
                                fill="#2A2927"
                            />
                            <path
                                d="M379.995 62C379.995 53.1634 387.158 46 395.995 46H463.995C472.831 46 479.995 53.1634 479.995 62V214C479.995 222.837 472.831 230 463.995 230H395.995C387.158 230 379.995 222.837 379.995 214V62Z"
                                fill="url(#paint1_linear_258_22341)"
                                fillOpacity="0.2"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M463.995 52H395.995C390.472 52 385.995 56.4772 385.995 62V214C385.995 219.523 390.472 224 395.995 224H463.995C469.517 224 473.995 219.523 473.995 214V62C473.995 56.4772 469.517 52 463.995 52ZM395.995 46C387.158 46 379.995 53.1634 379.995 62V214C379.995 222.837 387.158 230 395.995 230H463.995C472.831 230 479.995 222.837 479.995 214V62C479.995 53.1634 472.831 46 463.995 46H395.995Z"
                                fill="#2A2927"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M463.995 52H395.995C390.472 52 385.995 56.4772 385.995 62V214C385.995 219.523 390.472 224 395.995 224H463.995C469.517 224 473.995 219.523 473.995 214V62C473.995 56.4772 469.517 52 463.995 52ZM395.995 46C387.158 46 379.995 53.1634 379.995 62V214C379.995 222.837 387.158 230 395.995 230H463.995C472.831 230 479.995 222.837 479.995 214V62C479.995 53.1634 472.831 46 463.995 46H395.995Z"
                                fill="url(#paint2_linear_258_22341)"
                                fillOpacity="0.2"
                            />
                            <circle cx="471.995" cy="54" r="26" fill="#FC4714" />
                        </g>
                    </g>
                    <path
                        d="M587.775 110.3C597.525 110.3 604.155 106.79 608.185 104.06V91.45C602.985 95.22 597.265 98.08 588.945 98.08C574.645 98.08 567.885 86.51 567.885 63.89C567.885 40.62 574.385 29.57 589.725 29.57C596.875 29.57 603.505 32.69 608.185 35.68V23.07C604.025 20.08 597.265 17.35 588.945 17.35C564.895 17.35 551.895 35.03 551.895 63.89C551.895 93.53 565.415 110.3 587.775 110.3ZM649.936 109H663.456L681.916 40.75V109H697.386V18.65H676.326L658.126 85.6L639.926 18.65H618.606V109H631.476V40.75L649.936 109ZM743.673 110.3C753.423 110.3 760.053 106.79 764.083 104.06V91.45C758.883 95.22 753.163 98.08 744.843 98.08C730.543 98.08 723.783 86.51 723.783 63.89C723.783 40.62 730.283 29.57 745.623 29.57C752.773 29.57 759.403 32.69 764.083 35.68V23.07C759.923 20.08 753.163 17.35 744.843 17.35C720.793 17.35 707.793 35.03 707.793 63.89C707.793 93.53 721.313 110.3 743.673 110.3Z"
                        fill="black"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_258_22341"
                            x1="60"
                            y1="0"
                            x2="60"
                            y2="120"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#DBDEEF" />
                            <stop offset="1" stopColor="#FEFEFF" />
                        </linearGradient>
                        <linearGradient
                            id="paint1_linear_258_22341"
                            x1="429.995"
                            y1="52"
                            x2="429.995"
                            y2="124"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="white" stopOpacity="0" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                            id="paint2_linear_258_22341"
                            x1="429.995"
                            y1="46"
                            x2="429.995"
                            y2="230"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="white" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                        <clipPath id="clip0_258_22341">
                            <path
                                d="M401.995 64C401.995 30.8629 428.858 4 461.995 4V4C495.132 4 521.995 30.8629 521.995 64V64C521.995 97.1371 495.132 124 461.995 124V124C428.858 124 401.995 97.1371 401.995 64V64Z"
                                fill="white"
                            />
                        </clipPath>
                        <clipPath id="clip1_258_22341">
                            <rect width="120" height="120" fill="white" transform="translate(401.995 4)" />
                        </clipPath>
                    </defs>
                </svg>
            )}
        </LinkLego>
    );
};

export { Logo };