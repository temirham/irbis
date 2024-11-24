import React, { useState } from 'react';
import { Box, Button, Modal, Typography, TextField, Checkbox, FormControlLabel } from '@mui/material';

export default function ContactWidget() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', agree: false });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = () => {
    if (formData.agree) {
      console.log('Submitted Data:', formData);
      handleClose();
    } else {
      alert('Вы должны согласиться с политикой конфиденциальности.');
    }
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Оставить заявку
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            p: 4,
            borderRadius: 2,
            boxShadow: 24,
          }}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            Оставьте заявку
          </Typography>
          <TextField
            fullWidth
            name="name"
            label="Имя"
            value={formData.name}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            name="phone"
            label="Номер телефона"
            value={formData.phone}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <FormControlLabel
            control={
              <Checkbox
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
              />
            }
            label="Согласен с политикой конфиденциальности"
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Отправить
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleClose}>
              Отмена
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
