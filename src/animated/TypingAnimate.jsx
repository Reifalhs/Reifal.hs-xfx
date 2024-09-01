
import { TypeAnimation } from 'react-type-animation';

const TypingAnimate = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Hallo!',
        2500, // wait 1s before replacing "Mice" with "Hamsters"
        'Olá!',
        2500,
        'Zdravstvuyte!',
        2500,
        'Ni hao!',
        2500,
        'Ciao!',
        2500,
        'Konnichiwa!',
        2500,
        'Annyeonghaseyo!',
        2500,
        'Bonjour!',
        2500,
        'Sàwàtdee!',
        2500
      ]}
      repeat={Infinity}
    />
  );
};

export default TypingAnimate;