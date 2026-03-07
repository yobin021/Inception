import './GlitchText.css';

const GlitchText = ({ text = "INCEPTION" }) => {
  return (
    <span className="glitch font-display" data-text={text}>
      {text}
    </span>
  );
};

export default GlitchText;
