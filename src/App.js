import './App.css';
import { useState } from 'react';
import { Bar } from './components/bar/Bar';
import { Text } from './components/text/text';
import { BasicModal } from './components/modal/modal';

function App() {

  const [mode, setMode] = useState(true)
  const [modeColor, setModeColor] = useState(true)
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('')
  const [currentLang, setCurrentLang] = useState('es')
  const [traslateLang, setTraslateLang] = useState('en')

    const handleCurrentLang = (newCurrentLang) => {
      setCurrentLang(newCurrentLang)
      console.log('current languages:', currentLang)
    }

    const handleTraslateLang = (newtraslLang) => {
      setTraslateLang(newtraslLang)
      console.log('traslate languages:', traslateLang)
    }

    const handleMode = () => {
      setMode(!mode)
      setModeColor(!modeColor)
    }

    const handleModal = () => {
      setOpen(!open);
    }

    const handleText = (newText) => {
      setText(newText)
      console.log('text:', text)
    }
  
  return (
    <div id={modeColor ? 'night' : 'light' }  className="App">
      <header className="App-header">
        <Bar handleMode={handleMode} mode={mode} handleModal={handleModal} handleCurrentLang={handleCurrentLang} handleTraslateLang={handleTraslateLang} />
      </header>
      <main className='App-main'>
        <Text  id="translation" text={text} currentLang={currentLang} traslateLang={traslateLang} />
        <BasicModal handleModal={handleModal} open={open} handleText={handleText}/>
      </main>
    </div>
  );
}

export default App;
