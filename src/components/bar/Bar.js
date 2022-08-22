import './Bar.css'
import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PostAddIcon from '@mui/icons-material/PostAdd';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import { languages } from '../../data/languages'

export const Bar = ({handleMode, mode, handleModal, handleCurrentLang, handleTraslateLang}) => {

    const [currLang, setcurrLang] = useState('es');
    const [transLang, settransLang] = useState('en');

    const handleCurrChange = (event) => {
      handleCurrentLang(event.target.value)
      console.log(event.target.value);
      setcurrLang(event.target.value)
    };

    const handleTransChange = (event) => {
      handleTraslateLang(event.target.value)
      console.log(event.target.value);
      settransLang(event.target.value)
    };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="grid-container">

          <div className="grid-item-a">
            <SchoolIcon className="icon"/>
            <Typography variant="h6">
              Lector
            </Typography>
          </div>

          <Box className="grid-item-b" sx={{ minWidth: 120 }}>
          <FormControl sx={{ m: 1 }} size="small">
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={currLang}
                onChange={handleCurrChange}
              >
                {languages.map(lang => 
                  <MenuItem key={lang.alsKey} value={lang.useThis}>{lang.name}</MenuItem>
                )}
              </Select>
            </FormControl>
          </Box>

          <p className="p-bar"><small className="p-bar">To:</small></p>
          <Box className="grid-item-b" sx={{ minWidth: 120 }}>
          <FormControl sx={{ m: 1 }} size="small">
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={transLang}
                onChange={handleTransChange}
              >
                {languages.map(lang => 
                  <MenuItem key={lang.alsKey} value={lang.useThis}>{lang.name}</MenuItem>
                )}
              </Select>
            </FormControl>
          </Box>

          <div className='grid-item-c'>
          
          {mode === true ? <NightlightIcon onClick={() => handleMode()} className="icon"/> : <LightModeIcon onClick={() => handleMode()} className="icon"/>}          
          <PostAddIcon onClick={handleModal} className="icon"/>
          </div>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
