import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GithubButton = () => {
  const openGithub = () => {
    window.open('https://github.com/ciphr9', '_blank');
  };

  return (
    <button data-testid="github-button" className="bg-github hover:opacity-90 text-white font-bold w-10 h-10 rounded-full ml-2" onClick={openGithub}>
      <FontAwesomeIcon icon={faGithub} />
    </button>
  );
};

export default GithubButton;
