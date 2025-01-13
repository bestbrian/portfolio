"use client";
import { cn } from "@/lib/utils";
import { motion, MotionValue } from "framer-motion";
import React from "react";

const transition = {
  duration: 0,
  ease: "linear",
};

export const BraidEffect = ({
  pathLengths,
  title,
  description,
  className,
}: {
  pathLengths: MotionValue[];
  title?: string;
  description?: string;
  className?: string;
}) => {
  return (
    <svg
      width="100%"
      viewBox="0 0 1460 323"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ pathLength: 1 }}
        d="M10 310.836C155.5 310.836 201 314.101 279 294.836C336.5 277.836 349.5 268.836 407.5 213.836C449 179.336 465 177.336 500 170.836C519.664 167.184 531 151.572 548 152.072C563.591 152.072 572.429 162.575 594.66 170.585C602.042 173.244 610.2 174.073 617.356 170.855C634.755 163.031 651.446 144.16 667 144.571C683.408 144.571 703.545 167.408 722.903 174.605C728.727 176.77 735.184 176.231 740.902 173.801C761.726 164.951 774.085 144.942 792 144.571C804.831 144.306 814.103 156.695 832.469 166.351C845.13 173.007 860.214 174.651 872.827 167.905C885.952 160.885 899.748 150.542 913.5 151.572C932.677 153.007 945.293 158.398 955.817 163.509C964.234 167.596 973.095 170.628 982.199 172.79C1006.01 178.447 1017.42 181.954 1044 196.836C1087.5 221.195 1092.5 242.336 1150 276.836C1216 317.836 1338.5 310.336 1450 310.336"
        stroke="#FFB7C5"
        style={{ pathLength: pathLengths[0] }}
        transition={transition}
      />
      <motion.path
        initial={{ pathLength: 1 }}
        d="M10 235.336C157 235.336 287 235.336 320 221.336C358 210.836 402.5 191.336 418 182.836C444 171.336 436 174.071 489 163.071C504 160.565 533 158.271 544.5 160.571C564.5 164.571 565.5 171.071 586 171.571C602 171.571 626 144.571 643 145.071C658.671 145.071 671.31 162.888 694.774 172.778C702.004 175.825 710.2 176.574 717.349 173.341C734.886 165.411 751.932 146.166 767.5 146.578C783.864 146.578 801.711 168.459 820.403 175.49C826.218 177.677 832.661 177.082 838.451 174.827C859.246 166.729 871.599 149.948 889.5 149.578C896.47 149.433 906.865 153.883 917.429 158.747C940.879 169.543 967.139 167.475 992.951 167.899C1030.91 168.522 1047.5 178.633 1066.5 184.836C1112.24 204.463 1126.5 218.54 1190.5 227.071C1267.5 237.336 1289 234.836 1450 235.836"
        stroke="#FFDDB7"
        style={{ pathLength: pathLengths[0] }}
        transition={transition}
      />
      <motion.path
        initial={{ pathLength: 1 }}
        d="M10 161.836C157.5 162.169 304.5 161.571 390.5 161.571C415.976 162.776 432.849 163.064 446.37 162.959C487.503 162.639 528.631 154.441 569.508 159.033C574.04 159.542 579.162 160.36 585 161.571C598 164.269 626 169.538 637.5 167.238C657.5 163.238 669 147.071 690.5 147.071C710.5 147.071 735 177.071 752 176.571C767.654 176.571 778.77 158.419 801.793 148.426C808.991 145.301 817.16 144.613 824.423 147.581C842.335 154.9 860.418 172.484 876 172.071C892.791 172.071 912.316 157.622 931.814 153.228C936.856 152.091 942.097 152.51 947.176 153.467C976.993 159.084 980.679 162.182 999.5 162.571C1016.3 162.919 1046.5 161.071 1065.5 161.071C1124.5 161.071 1100.5 161.071 1134 161.071C1187.5 161.071 1188.99 162.238 1251 162.238C1327.5 162.238 1284.5 160.404 1450 161.071"
        stroke="#B1C5FF"
        style={{ pathLength: pathLengths[0] }}
        transition={transition}
      />
      <motion.path
        initial={{ pathLength: 1 }}
        d="M10 86.3363C160.5 86.3363 271 86.1543 333.5 104.336C361 112.336 397.517 131.837 433.5 142.336C457.371 149.301 482 151.571 497 155.571C513.786 160.048 514.5 164.644 533 166.571C557 169.071 574.814 149.071 594.5 149.071C614.5 149.071 636 176.905 653 176.405C668.676 176.405 682.076 159.466 705.751 149.808C713.017 146.844 721.231 146.044 728.298 149.453C745.448 157.725 761.454 177.816 777 177.405C793.364 177.405 811.211 155.523 829.903 148.493C835.718 146.305 842.141 146.94 847.992 149.03C869.178 156.6 883.089 171.201 901 171.571C917.8 171.919 933 152.071 973 154.571C1044.5 154.571 1057.5 140.516 1081 129.336C1132.5 104.836 1152.23 100.707 1195 94.3363C1265.5 83.8363 1304 86.8363 1449.5 86.8363"
        stroke="#4FABFF"
        style={{ pathLength: pathLengths[0] }}
        transition={transition}
      />
      <motion.path
        initial={{ pathLength: 1 }}
        d="M10.5 11.8362C155.288 10.1852 205 9.33624 275.5 25.8362C332 39.0592 409.182 105.336 421 115.336C434.176 126.485 466.916 139.513 506.259 150.535C508.746 151.232 511.16 152.14 513.511 153.21C527.104 159.394 551.149 168.747 561.5 169.072C581.5 169.072 600 146.572 621.5 146.572C641.5 146.572 662.5 177.072 679.5 176.572C695.171 176.572 707.81 158.76 731.274 148.872C738.505 145.824 746.716 145.067 753.812 148.415C771.362 156.693 788.421 176.984 804 176.572C820.375 176.572 839.35 156.516 858.364 150.015C864.243 148.005 870.624 148.638 876.535 150.554C896.961 157.174 908.141 167.702 926 168.072C942.8 168.419 944.5 158.072 977.5 149.572C1021.5 138.836 1017.5 141.336 1039.5 127.836C1079.5 101.336 1082 88.2782 1138.5 51.3362C1190.5 17.3362 1285 8.21024 1449 11.8362"
        stroke="#076EFF"
        style={{ pathLength: pathLengths[0] }}
        transition={transition}
      />

      <path
        filter="url(#blurMe)"
        pathLength={1}
        d="M10 310.836C155.5 310.836 201 314.101 279 294.836C336.5 277.836 349.5 268.836 407.5 213.836C449 179.336 465 177.336 500 170.836C519.664 167.184 531 151.572 548 152.072C563.591 152.072 572.429 162.575 594.66 170.585C602.042 173.244 610.2 174.073 617.356 170.855C634.755 163.031 651.446 144.16 667 144.571C683.408 144.571 703.545 167.408 722.903 174.605C728.727 176.77 735.184 176.231 740.902 173.801C761.726 164.951 774.085 144.942 792 144.571C804.831 144.306 814.103 156.695 832.469 166.351C845.13 173.007 860.214 174.651 872.827 167.905C885.952 160.885 899.748 150.542 913.5 151.572C932.677 153.007 945.293 158.398 955.817 163.509C964.234 167.596 973.095 170.628 982.199 172.79C1006.01 178.447 1017.42 181.954 1044 196.836C1087.5 221.195 1092.5 242.336 1150 276.836C1216 317.836 1338.5 310.336 1450 310.336"
        stroke="#FFB7C5"
        strokeWidth="2"
      />

      <path
        filter="url(#blurMe)"
        pathLength={1}
        d="M10 235.336C157 235.336 287 235.336 320 221.336C358 210.836 402.5 191.336 418 182.836C444 171.336 436 174.071 489 163.071C504 160.565 533 158.271 544.5 160.571C564.5 164.571 565.5 171.071 586 171.571C602 171.571 626 144.571 643 145.071C658.671 145.071 671.31 162.888 694.774 172.778C702.004 175.825 710.2 176.574 717.349 173.341C734.886 165.411 751.932 146.166 767.5 146.578C783.864 146.578 801.711 168.459 820.403 175.49C826.218 177.677 832.661 177.082 838.451 174.827C859.246 166.729 871.599 149.948 889.5 149.578C896.47 149.433 906.865 153.883 917.429 158.747C940.879 169.543 967.139 167.475 992.951 167.899C1030.91 168.522 1047.5 178.633 1066.5 184.836C1112.24 204.463 1126.5 218.54 1190.5 227.071C1267.5 237.336 1289 234.836 1450 235.836"
        stroke="#FFDDB7"
        strokeWidth="2"
      />

      <path
        filter="url(#blurMe)"
        pathLength={1}
        d="M10 161.836C157.5 162.169 304.5 161.571 390.5 161.571C415.976 162.776 432.849 163.064 446.37 162.959C487.503 162.639 528.631 154.441 569.508 159.033C574.04 159.542 579.162 160.36 585 161.571C598 164.269 626 169.538 637.5 167.238C657.5 163.238 669 147.071 690.5 147.071C710.5 147.071 735 177.071 752 176.571C767.654 176.571 778.77 158.419 801.793 148.426C808.991 145.301 817.16 144.613 824.423 147.581C842.335 154.9 860.418 172.484 876 172.071C892.791 172.071 912.316 157.622 931.814 153.228C936.856 152.091 942.097 152.51 947.176 153.467C976.993 159.084 980.679 162.182 999.5 162.571C1016.3 162.919 1046.5 161.071 1065.5 161.071C1124.5 161.071 1100.5 161.071 1134 161.071C1187.5 161.071 1188.99 162.238 1251 162.238C1327.5 162.238 1284.5 160.404 1450 161.071"
        stroke="#B1C5FF"
        strokeWidth="2"
      />

      <path
        filter="url(#blurMe)"
        pathLength={1}
        d="M10 86.3363C160.5 86.3363 271 86.1543 333.5 104.336C361 112.336 397.517 131.837 433.5 142.336C457.371 149.301 482 151.571 497 155.571C513.786 160.048 514.5 164.644 533 166.571C557 169.071 574.814 149.071 594.5 149.071C614.5 149.071 636 176.905 653 176.405C668.676 176.405 682.076 159.466 705.751 149.808C713.017 146.844 721.231 146.044 728.298 149.453C745.448 157.725 761.454 177.816 777 177.405C793.364 177.405 811.211 155.523 829.903 148.493C835.718 146.305 842.141 146.94 847.992 149.03C869.178 156.6 883.089 171.201 901 171.571C917.8 171.919 933 152.071 973 154.571C1044.5 154.571 1057.5 140.516 1081 129.336C1132.5 104.836 1152.23 100.707 1195 94.3363C1265.5 83.8363 1304 86.8363 1449.5 86.8363"
        stroke="#4FABFF"
        strokeWidth="2"
      />

      <path
        filter="url(#blurMe)"
        pathLength={1}
        d="M10.5 11.8362C155.288 10.1852 205 9.33624 275.5 25.8362C332 39.0592 409.182 105.336 421 115.336C434.176 126.485 466.916 139.513 506.259 150.535C508.746 151.232 511.16 152.14 513.511 153.21C527.104 159.394 551.149 168.747 561.5 169.072C581.5 169.072 600 146.572 621.5 146.572C641.5 146.572 662.5 177.072 679.5 176.572C695.171 176.572 707.81 158.76 731.274 148.872C738.505 145.824 746.716 145.067 753.812 148.415C771.362 156.693 788.421 176.984 804 176.572C820.375 176.572 839.35 156.516 858.364 150.015C864.243 148.005 870.624 148.638 876.535 150.554C896.961 157.174 908.141 167.702 926 168.072C942.8 168.419 944.5 158.072 977.5 149.572C1021.5 138.836 1017.5 141.336 1039.5 127.836C1079.5 101.336 1082 88.2782 1138.5 51.3362C1190.5 17.3362 1285 8.21024 1449 11.8362"
        stroke="#076EFF"
        strokeWidth="2"
      />

      <defs>
        <filter id="blurMe">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
        </filter>
      </defs>
    </svg>
  );
};
