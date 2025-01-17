"use client";
import { motion, MotionValue } from "framer-motion";
import React from "react";
import TextRevealByWord from "./text-reveal";

const transition = {
  duration: 0,
  ease: "linear",
};

export const BraidEffect = ({
  pathLengths,
}: {
  pathLengths: MotionValue[];
  title?: string;
  description?: string;
  className?: string;
}) => {
  return (
    <TextRevealByWord
      paragraph="I tame messy code, refine&nbsp;sloppy processes, and deliver clean, powerful&nbsp;results."
      className="mb-4 font-subway"
    >
      <svg
        width="100%"
        viewBox="0 0 1461 356"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* <div className="w-full flex items-center justify-center bg-red-transparent absolute">
            <button className="font-subway bg-primary rounded-full md:px-4 md:py-2 px-2 py-1 md:mt-36 mt-8 z-30 md:text-base w-fit mx-auto">
              BRIAN BEST
            </button>
          </div> */}
        <motion.path
          initial={{ pathLength: 1 }}
          d="M15.5 104C106 104 77 191.5 138.5 197.009C169.183 199.758 226 95.0002 298 95C355.5 94.9998 392 208.105 501 204.336C520.664 200.684 532 185.072 549 185.572C564.591 185.572 573.429 196.075 595.66 204.085C603.042 206.744 611.2 207.573 618.356 204.355C635.755 196.531 652.446 177.66 668 178.071C684.408 178.071 704.545 200.908 723.903 208.105C729.727 210.27 736.184 209.731 741.902 207.301C762.726 198.451 775.085 178.442 793 178.071C805.831 177.806 815.103 190.195 833.469 199.851C846.13 206.507 861.214 208.151 873.827 201.405C886.952 194.385 900.748 184.042 914.5 185.072C933.677 186.507 946.293 191.898 956.817 197.009C965.234 201.096 974.095 204.128 983.199 206.29C1007.01 211.947 1018.42 215.454 1045 230.336C1088.5 254.695 1093.5 275.836 1151 310.336C1217 351.336 1339.5 343.836 1451 343.836"
          stroke="#6DF5FF"
          style={{ pathLength: pathLengths[0] }}
          transition={transition}
        />
        <path
          filter="url(#blurMe)"
          pathLength={1}
          d="M15.5 104C106 104 77 191.5 138.5 197.009C169.183 199.758 226 95.0002 298 95C355.5 94.9998 392 208.105 501 204.336C520.664 200.684 532 185.072 549 185.572C564.591 185.572 573.429 196.075 595.66 204.085C603.042 206.744 611.2 207.573 618.356 204.355C635.755 196.531 652.446 177.66 668 178.071C684.408 178.071 704.545 200.908 723.903 208.105C729.727 210.27 736.184 209.731 741.902 207.301C762.726 198.451 775.085 178.442 793 178.071C805.831 177.806 815.103 190.195 833.469 199.851C846.13 206.507 861.214 208.151 873.827 201.405C886.952 194.385 900.748 184.042 914.5 185.072C933.677 186.507 946.293 191.898 956.817 197.009C965.234 201.096 974.095 204.128 983.199 206.29C1007.01 211.947 1018.42 215.454 1045 230.336C1088.5 254.695 1093.5 275.836 1151 310.336C1217 351.336 1339.5 343.836 1451 343.836"
          stroke="#6DF5FF"
          strokeWidth="1"
        />
        <motion.path
          initial={{ pathLength: 1 }}
          d="M11 159.332C71.5 199.567 46.5 274.5 98 289.5C147.837 304.016 171 223.37 285.5 240.5C349 250 433.5 171.364 498 188.567C514.786 193.044 515.5 197.64 534 199.567C558 202.067 575.814 182.067 595.5 182.067C615.5 182.067 637 209.901 654 209.401C669.676 209.401 683.076 192.462 706.751 182.804C714.017 179.84 722.231 179.04 729.298 182.449C746.448 190.721 762.454 210.812 778 210.401C794.364 210.401 812.211 188.519 830.903 181.489C836.718 179.301 843.141 179.936 848.992 182.026C870.178 189.596 884.089 204.197 902 204.567C918.8 204.915 934 185.067 974 187.567C1045.5 187.567 1058.5 173.512 1082 162.332C1133.5 137.832 1153.23 133.703 1196 127.332C1266.5 116.832 1305 119.832 1450.5 119.832"
          stroke="#34A853"
          style={{ pathLength: pathLengths[1] }}
          transition={transition}
        />
        <path
          filter="url(#blurMe)"
          pathLength={1}
          d="M11 158.897C71.5 199.132 46.5 274.065 98 289.065C147.837 303.58 171 222.935 285.5 240.065C349 249.565 433.5 170.929 498 188.132C514.786 192.609 515.5 197.205 534 199.132C558 201.632 575.814 181.632 595.5 181.632C615.5 181.632 637 209.466 654 208.966C669.676 208.966 683.076 192.027 706.751 182.369C714.017 179.405 722.231 178.605 729.298 182.014C746.448 190.286 762.454 210.377 778 209.966C794.364 209.966 812.211 188.084 830.903 181.054C836.718 178.866 843.141 179.501 848.992 181.591C870.178 189.161 884.089 203.762 902 204.132C918.8 204.48 934 184.632 974 187.132C1045.5 187.132 1058.5 173.077 1082 161.897C1133.5 137.397 1153.23 133.268 1196 126.897C1266.5 116.397 1305 119.397 1450.5 119.397"
          stroke="#34A853"
          strokeWidth="1"
        />
        <motion.path
          initial={{ pathLength: 1 }}
          d="M11 194.742C83.5 160.742 77.5 55.4053 148 71.9053C204.5 85.1283 183.523 157.079 227 181.321C277.5 209.478 467.416 172.419 506.759 183.441C509.246 184.138 511.66 185.046 514.011 186.116C527.604 192.3 551.649 201.653 562 201.978C582 201.978 600.5 179.478 622 179.478C642 179.478 663 209.978 680 209.478C695.671 209.478 708.31 191.666 731.774 181.778C739.005 178.73 747.216 177.973 754.312 181.321C771.862 189.599 788.921 209.89 804.5 209.478C820.875 209.478 839.85 189.422 858.864 182.921C864.743 180.911 871.124 181.544 877.035 183.46C897.461 190.08 908.641 200.608 926.5 200.978C943.3 201.325 945 190.978 978 182.478C1022 171.742 1018 174.242 1040 160.742C1080 134.242 1082.5 121.184 1139 84.2416C1191 50.2416 1285.5 41.1156 1449.5 44.7416"
          stroke="#4285F4"
          style={{ pathLength: pathLengths[2] }}
          transition={transition}
        />
        <path
          filter="url(#blurMe)"
          pathLength={1}
          d="M11 194.742C83.5 160.742 77.5 55.4053 148 71.9053C204.5 85.1283 183.523 157.079 227 181.321C277.5 209.478 467.416 172.419 506.759 183.441C509.246 184.138 511.66 185.046 514.011 186.116C527.604 192.3 551.649 201.653 562 201.978C582 201.978 600.5 179.478 622 179.478C642 179.478 663 209.978 680 209.478C695.671 209.478 708.31 191.666 731.774 181.778C739.005 178.73 747.216 177.973 754.312 181.321C771.862 189.599 788.921 209.89 804.5 209.478C820.875 209.478 839.85 189.422 858.864 182.921C864.743 180.911 871.124 181.544 877.035 183.46C897.461 190.08 908.641 200.608 926.5 200.978C943.3 201.325 945 190.978 978 182.478C1022 171.742 1018 174.242 1040 160.742C1080 134.242 1082.5 121.184 1139 84.2416C1191 50.2416 1285.5 41.1156 1449.5 44.7416"
          stroke="#4285F4"
          strokeWidth="1"
        />
        <motion.path
          initial={{ pathLength: 1 }}
          d="M11 258.272C148.5 179.514 195 281 262.5 289.436C330 297.872 403.5 224.272 419 215.772C445 204.272 437 207.007 490 196.007C505 193.501 534 191.207 545.5 193.507C565.5 197.507 566.5 204.007 587 204.507C603 204.507 627 177.507 644 178.007C659.671 178.007 672.31 195.824 695.774 205.714C703.004 208.761 711.2 209.51 718.349 206.277C735.886 198.347 752.932 179.102 768.5 179.514C784.864 179.514 802.711 201.395 821.403 208.426C827.218 210.613 833.661 210.018 839.451 207.763C860.246 199.665 872.599 182.884 890.5 182.514C897.47 182.369 907.865 186.819 918.429 191.683C941.879 202.479 968.139 200.411 993.951 200.835C1031.91 201.458 1048.5 211.569 1067.5 217.772C1113.24 237.399 1127.5 251.476 1191.5 260.007C1268.5 270.272 1290 267.772 1451 268.772"
          stroke="#FBBC05"
          style={{ pathLength: pathLengths[3] }}
          transition={transition}
        />
        <path
          filter="url(#blurMe)"
          pathLength={1}
          d="M11 258.272C148.5 179.514 195 281 262.5 289.436C330 297.872 403.5 224.272 419 215.772C445 204.272 437 207.007 490 196.007C505 193.501 534 191.207 545.5 193.507C565.5 197.507 566.5 204.007 587 204.507C603 204.507 627 177.507 644 178.007C659.671 178.007 672.31 195.824 695.774 205.714C703.004 208.761 711.2 209.51 718.349 206.277C735.886 198.347 752.932 179.102 768.5 179.514C784.864 179.514 802.711 201.395 821.403 208.426C827.218 210.613 833.661 210.018 839.451 207.763C860.246 199.665 872.599 182.884 890.5 182.514C897.47 182.369 907.865 186.819 918.429 191.683C941.879 202.479 968.139 200.411 993.951 200.835C1031.91 201.458 1048.5 211.569 1067.5 217.772C1113.24 237.399 1127.5 251.476 1191.5 260.007C1268.5 270.272 1290 267.772 1451 268.772"
          stroke="#FBBC05"
          strokeWidth="1"
        />
        <motion.path
          initial={{ pathLength: 1 }}
          d="M11 325.162C243.5 325.162 425 240.499 352 74.499C297.227 -50.0525 115.236 31 162.5 144.326C219.637 281.323 529.631 187.767 570.508 192.359C575.04 192.868 580.162 193.686 586 194.897C599 197.595 627 202.864 638.5 200.564C658.5 196.564 670 180.397 691.5 180.397C711.5 180.397 736 210.397 753 209.897C768.654 209.897 779.77 191.745 802.793 181.752C809.991 178.627 818.16 177.939 825.423 180.907C843.335 188.226 861.418 205.81 877 205.397C893.791 205.397 913.316 190.948 932.814 186.554C937.856 185.417 943.097 185.836 948.176 186.793C977.993 192.41 981.679 195.508 1000.5 195.897C1017.3 196.245 1047.5 194.397 1066.5 194.397C1125.5 194.397 1101.5 194.397 1135 194.397C1188.5 194.397 1189.99 195.564 1252 195.564C1328.5 195.564 1285.5 193.73 1451 194.397"
          stroke="#EA4335"
          style={{ pathLength: pathLengths[4] }}
          transition={transition}
        />
        <path
          filter="url(#blurMe)"
          pathLength={1}
          d="M11 325.332C243.5 325.332 425 240.669 352 74.6692C297.227 -49.8824 115.236 31.1702 162.5 144.496C219.637 281.493 529.631 187.937 570.508 192.529C575.04 193.038 580.162 193.856 586 195.067C599 197.765 627 203.034 638.5 200.734C658.5 196.734 670 180.567 691.5 180.567C711.5 180.567 736 210.567 753 210.067C768.654 210.067 779.77 191.915 802.793 181.922C809.991 178.797 818.16 178.109 825.423 181.077C843.335 188.396 861.418 205.98 877 205.567C893.791 205.567 913.316 191.118 932.814 186.724C937.856 185.587 943.097 186.006 948.176 186.963C977.993 192.58 981.679 195.678 1000.5 196.067C1017.3 196.415 1047.5 194.567 1066.5 194.567C1125.5 194.567 1101.5 194.567 1135 194.567C1188.5 194.567 1189.99 195.734 1252 195.734C1328.5 195.734 1285.5 193.9 1451 194.567"
          stroke="#EA4335"
          strokeWidth="1"
        />

        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
          </filter>
        </defs>
      </svg>
    </TextRevealByWord>
  );
};
