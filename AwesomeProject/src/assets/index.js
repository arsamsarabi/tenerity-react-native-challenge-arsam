import checkmarkCircle from './checkmark-circle.png';
import crossCircle from './cross-circle.png';
import home from './home.png';
import logo from './logo.png';
import offer from './offer.png';

const assets = {
  checkmarkCircle,
  crossCircle,
  home,
  logo,
  offer,
};

export const getBottomTabIcon = name => {
  return {
    home,
    myoffers: offer,
  }[name];
};

export default assets;
