import { faXing } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const XingButton = () => {
  const openXing = () => {
    window.open('https://www.xing.com/profile/Daniel_Brandl13/cv', '_blank');
  };

  return (
    <button className="bg-xing hover:opacity-90 text-white font-bold w-10 h-10 rounded-full ml-2" onClick={openXing}>
      <FontAwesomeIcon icon={faXing} />
    </button>
  );
};

export default XingButton;
