import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import  { useState } from 'react';
import ContactDialog from './ContactDialog';

export default function Hero({ theme }) {

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
        <Typography
          component="h1"
          variant="h2"
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignSelf: 'center',
            textAlign: 'center',
            backgroundImage: (theme) =>
              theme.palette.mode === 'light'
                ? `linear-gradient(${alpha(theme.palette.primary.main, 0.95)}, ${alpha(theme.palette.primary.light, 0.75)})`
                : `linear-gradient(${alpha(theme.palette.primary.dark, 0.95)}, ${alpha(theme.palette.primary.main, 0.75)})`,
            backgroundClip: 'text',
            color: (theme) =>
              theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.primary.light,
          }}
        >
          Поможем вам добиться успеха
        </Typography>
        <Typography variant="body1" textAlign="center" color="text.secondary">
          Мы предоставляем профессиональные юридические услуги, чтобы защитить ваши права и интересы.
        </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
            <Button variant="contained" color="primary" onClick={handleOpen}>
              Получить консультацию
            </Button>
            <ContactDialog open={open} onClose={handleClose} />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
