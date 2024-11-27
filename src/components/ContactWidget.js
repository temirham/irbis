import React, { useState } from 'react';
import { Button } from '@mui/material';
import ContactDialog from './ContactDialog';

export default function ContactWidget() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Получить консультацию
      </Button>
      <ContactDialog open={open} onClose={handleClose} />
    </>
  );
}
