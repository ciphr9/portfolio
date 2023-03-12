import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LinkedinButton = () => {
  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/daniel-brandl-0160121aa/', '_blank');
  };

  return (
    <button className="bg-linkedin hover:opacity-90 text-white font-bold w-10 h-10 rounded-full ml-2" onClick={openLinkedIn}>
      <FontAwesomeIcon icon={faLinkedinIn} />
    </button>
  );
};

export default LinkedinButton;
