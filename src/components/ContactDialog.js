import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  Modal,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';
import InputMask from 'react-input-mask';

export default function ContactDialog({ open, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    agree: false,
    topic: 'Другое', // Добавляем поле для выбора темы
  });

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async () => {
    if (formData.agree) {
      try {
        const response = await axios.post('https://11bf-5-228-114-82.ngrok-free.app/api/contact', {
          name: formData.name,
          phone: formData.phone,
          topic: formData.topic, // Отправляем выбранную тему
        });
        console.log('Response:', response.data);
        onClose();
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Произошла ошибка. Попробуйте снова.');
      }
    } else {
      alert('Вы должны согласиться с политикой конфиденциальности.');
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
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
          Получить консультацию
        </Typography>
        <TextField
          fullWidth
          name="name"
          label="Имя"
          value={formData.name}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <InputMask
          mask="+7 (999) 999-99-99"
          value={formData.phone}
          onChange={handleChange}
        >
          {() => (
            <TextField
              fullWidth
              name="phone"
              label="Номер телефона"
              sx={{ mb: 2 }}
            />
          )}
        </InputMask>
        <FormControl fullWidth sx={{ mb: 2 }} variant="outlined">
          <InputLabel id="topic-label" shrink>
            Тема обращения
          </InputLabel>
          <Select
            labelId="topic-label"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            label="Тема обращения" // Это нужно для отображения текста в outlined стиле
          >
            <MenuItem value="Мошенничество">Мошенничество</MenuItem>
            <MenuItem value="Бракоразводный процесс">Бракоразводный процесс</MenuItem>
            <MenuItem value="Земельные споры">Земельные споры</MenuItem>
            <MenuItem value="Интеллектуальное право">Интеллектуальное право</MenuItem>
            <MenuItem value="Другое">Другое</MenuItem>
          </Select>
        </FormControl>
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
          <Button variant="outlined" color="secondary" onClick={onClose}>
            Отмена
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
