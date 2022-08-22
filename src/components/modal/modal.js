import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './Modal.css'
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const BasicModal = ({handleModal, open, handleText}) => {
  const [textWaiting, setTextWaiting] = useState('')

  const InsertText = () => {
    handleText(textWaiting)
    closeModal()
  }

  const closeModal = () => {
    handleModal(false)
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='modal'>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Your texto:
          </Typography>
          

          <TextField
            id="standard-multiline-static"
            label="Insert text"
            multiline
            rows={10}
            onChange={e => setTextWaiting(e.target.value)}
            value={textWaiting}
            variant="standard"
          />
          
          <Button onClick={closeModal} id="button-close" size="medium">Close</Button>
          <Button onClick={InsertText} id="button-upload" size="medium">Upload</Button>

        </Box>
      </Modal>
    </div>
  );
}
