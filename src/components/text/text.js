import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import './Text.css'
import {getTraslation} from '../../services/getTraslation'


export const Text = ({text, currentLang, traslateLang}) => {
    const [traslation, setTraslation] = useState('')
    const [words, setWords] = useState([])
    const [traslatedWord, setTraslatedWord] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setWords(text.split(' '))
        setLoading(false)
    }, [text])
    
    useEffect(() => {
        getTraslation(traslation, currentLang, traslateLang).then(res => setTraslatedWord(res))
    },[traslation, currentLang, traslateLang])
    

     const showTraslation = async (e) => {
        try {
         setTraslation(e.target.outerText)
         
         } catch(err) {
            console.log(err)
         }
    } 

    return(
    <>  
        { loading === true ? 'cargando' : 
        <div className='text-conteiner'>
           { words.map(word => 
            <p key={word + Math.random()} className="paraphId" onMouseOver={e => showTraslation(e)}>{word}&nbsp;</p>
        )}
        </div>

        }

        <Box
            id="traslation"
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                m: 2,
                width: 550,
                height: 30,
                },
            }}
            >
            <Paper elevation={3}>{traslation.match(/[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+/gi)}: {traslatedWord && traslatedWord !== 'null' ? traslatedWord.toLowerCase() : ''}</Paper>
        </Box>
    </>)
}