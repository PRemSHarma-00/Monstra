import { useState } from 'react';
import IntroScreen  from './components/IntroScreen';
import MainMenu     from './components/MainMenu';
import BattleScreen from './components/BattleScreen';
import LoreScreen   from './components/LoreScreen';

function App() {
  const [screen, setScreen] = useState('intro');

  return (
    <>
      {screen === 'intro'  && <IntroScreen  onContinue={() => setScreen('menu')} />}
      {screen === 'menu'   && (
        <MainMenu
          onStartBattle={() => setScreen('battle')}
          onLore={() => setScreen('lore')}
        />
      )}
      {screen === 'battle' && <BattleScreen onBattleEnd={() => setScreen('menu')} />}
      {screen === 'lore'   && <LoreScreen   onBack={() => setScreen('menu')} />}
    </>
  );
}

export default App;
