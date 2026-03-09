import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <svg
          id="pegtopone"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <defs>
            <filter id="shine">
              <feGaussianBlur stdDeviation="3"></feGaussianBlur>
            </filter>
            <mask id="mask1">
              <path
                d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                fill="white"
              ></path>
            </mask>
            <radialGradient
              id="gradient-1"
              cx="50"
              cy="66"
              fx="50"
              fy="66"
              r="30"
              gradientTransform="translate(0 35) scale(1 0.5)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="black" stopOpacity="0.3"></stop>
              <stop offset="50%" stopColor="black" stopOpacity="0.1"></stop>
              <stop offset="100%" stopColor="black" stopOpacity="0"></stop>
            </radialGradient>
            <radialGradient
              id="gradient-2"
              cx="55"
              cy="20"
              fx="55"
              fy="20"
              r="30"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="white" stopOpacity="0.3"></stop>
              <stop offset="50%" stopColor="white" stopOpacity="0.1"></stop>
              <stop offset="100%" stopColor="white" stopOpacity="0"></stop>
            </radialGradient>
            <radialGradient
              id="gradient-3"
              cx="85"
              cy="50"
              fx="85"
              fy="50"
              href="#gradient-2"
            ></radialGradient>
            <radialGradient
              id="gradient-4"
              cx="50"
              cy="58"
              fx="50"
              fy="58"
              r="60"
              gradientTransform="translate(0 47) scale(1 0.2)"
              href="#gradient-3"
            ></radialGradient>
            <linearGradient
              id="gradient-5"
              x1="50"
              y1="90"
              x2="50"
              y2="10"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="black" stopOpacity="0.2"></stop>
              <stop offset="40%" stopColor="black" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
          <g>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="currentColor"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="url(#gradient-1)"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="none"
              stroke="white"
              opacity="0.3"
              strokeWidth="3"
              filter="url(#shine)"
              mask="url(#mask1)"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="url(#gradient-2)"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="url(#gradient-3)"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="url(#gradient-4)"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="url(#gradient-5)"
            ></path>
          </g>
        </svg>
        <svg
          id="pegtoptwo"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <defs>
            <filter id="shine2">
              <feGaussianBlur stdDeviation="3"></feGaussianBlur>
            </filter>
            <mask id="mask2">
              <path
                d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                fill="white"
              ></path>
            </mask>
            <radialGradient
              id="gradient-1-2"
              cx="50"
              cy="66"
              fx="50"
              fy="66"
              r="30"
              gradientTransform="translate(0 35) scale(1 0.5)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="black" stopOpacity="0.3"></stop>
              <stop offset="50%" stopColor="black" stopOpacity="0.1"></stop>
              <stop offset="100%" stopColor="black" stopOpacity="0"></stop>
            </radialGradient>
            <radialGradient
              id="gradient-2-2"
              cx="55"
              cy="20"
              fx="55"
              fy="20"
              r="30"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="white" stopOpacity="0.3"></stop>
              <stop offset="50%" stopColor="white" stopOpacity="0.1"></stop>
              <stop offset="100%" stopColor="white" stopOpacity="0"></stop>
            </radialGradient>
            <radialGradient
              id="gradient-3-2"
              cx="85"
              cy="50"
              fx="85"
              fy="50"
              href="#gradient-2-2"
            ></radialGradient>
            <radialGradient
              id="gradient-4-2"
              cx="50"
              cy="58"
              fx="50"
              fy="58"
              r="60"
              gradientTransform="translate(0 47) scale(1 0.2)"
              href="#gradient-3-2"
            ></radialGradient>
            <linearGradient
              id="gradient-5-2"
              x1="50"
              y1="90"
              x2="50"
              y2="10"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="black" stopOpacity="0.2"></stop>
              <stop offset="40%" stopColor="black" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
          <g>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="currentColor"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="url(#gradient-1-2)"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="none"
              stroke="white"
              opacity="0.3"
              strokeWidth="3"
              filter="url(#shine2)"
              mask="url(#mask2)"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="url(#gradient-2-2)"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="url(#gradient-3-2)"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="url(#gradient-4-2)"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="url(#gradient-5-2)"
            ></path>
          </g>
        </svg>
        <svg
          id="pegtopthree"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <defs>
            <filter id="shine3">
              <feGaussianBlur stdDeviation="3"></feGaussianBlur>
            </filter>
            <mask id="mask3">
              <path
                d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                fill="white"
              ></path>
            </mask>
            <radialGradient
              id="gradient-1-3"
              cx="50"
              cy="66"
              fx="50"
              fy="66"
              r="30"
              gradientTransform="translate(0 35) scale(1 0.5)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="black" stopOpacity="0.3"></stop>
              <stop offset="50%" stopColor="black" stopOpacity="0.1"></stop>
              <stop offset="100%" stopColor="black" stopOpacity="0"></stop>
            </radialGradient>
            <radialGradient
              id="gradient-2-3"
              cx="55"
              cy="20"
              fx="55"
              fy="20"
              r="30"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="white" stopOpacity="0.3"></stop>
              <stop offset="50%" stopColor="white" stopOpacity="0.1"></stop>
              <stop offset="100%" stopColor="white" stopOpacity="0"></stop>
            </radialGradient>
            <radialGradient
              id="gradient-3-3"
              cx="85"
              cy="50"
              fx="85"
              fy="50"
              href="#gradient-2-3"
            ></radialGradient>
            <radialGradient
              id="gradient-4-3"
              cx="50"
              cy="58"
              fx="50"
              fy="58"
              r="60"
              gradientTransform="translate(0 47) scale(1 0.2)"
              href="#gradient-3-3"
            ></radialGradient>
            <linearGradient
              id="gradient-5-3"
              x1="50"
              y1="90"
              x2="50"
              y2="10"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="black" stopOpacity="0.2"></stop>
              <stop offset="40%" stopColor="black" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
          <g>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="currentColor"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="url(#gradient-1-3)"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="none"
              stroke="white"
              opacity="0.3"
              strokeWidth="3"
              filter="url(#shine3)"
              mask="url(#mask3)"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="url(#gradient-2-3)"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="url(#gradient-3-3)"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="url(#gradient-4-3)"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="url(#gradient-5-3)"
            ></path>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Loader;
