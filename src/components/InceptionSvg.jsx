import './InceptionSvg.css';

const InceptionSvg = () => {
  return (
    <div className="w-full flex items-center justify-center py-2 select-none relative z-20">
      <svg 
        viewBox="0 0 1200 240" 
        className="w-full h-auto max-w-5xl overflow-visible"
        preserveAspectRatio="xMidYMid meet"
      >
        <text 
          x="50%" 
          y="60%" 
          textAnchor="middle" 
          dominantBaseline="middle" 
          className="svg-stroke-text font-display"
        >
          INCEPTION
        </text>
      </svg>
    </div>
  );
};

export default InceptionSvg;
