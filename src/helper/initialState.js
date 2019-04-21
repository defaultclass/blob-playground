const randomNumber = () => Math.floor(Math.random() * 100);

const topLeftRandom = randomNumber();
const topRightRandom = randomNumber();
const bottomRightRandom = randomNumber();
const bottomLeftRandom = randomNumber();

const initialState = {
  topLeftRadius: topLeftRandom,
  topRightRadius: topRightRandom,
  bottomRightRadius: bottomRightRandom,
  bottomLeftRadius: bottomLeftRandom,
  copyStatus: false
};

export default initialState;
