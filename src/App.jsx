import { useState } from 'react';
import IntroScreen from './components/IntroScreen';
import MainMenu from './components/MainMenu';
import BattleScreen from './components/BattleScreen';

function App() {
  const [screen, setScreen] = useState('intro');

  const handleContinue = () => {
    setScreen('menu');
  };

  const handleStartBattle = () => {
    setScreen('battle');
  };

  return (
    <>
      {screen === 'intro' && <IntroScreen onContinue={handleContinue} />}
      {screen === 'menu' && <MainMenu onStartBattle={handleStartBattle} />}
      {screen === 'battle' && <BattleScreen />}
    </>
  );
}

export default App;




