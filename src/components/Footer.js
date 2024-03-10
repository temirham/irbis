import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/X';

const logoStyle = {
  width: '140px',
  height: 'auto',
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {'Copyright © '}
      <Link href="https://mui.com/">Sitemark&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            minWidth: { xs: '100%', sm: '60%' },
          }}
        >
          <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
            <Box sx={{ ml: '-15px' }}>
              <img
                src={
                  '/static/logo/logo 1.svg'
                }
                style={logoStyle}
                alt="логотип Sitemark"
              />
            </Box>
            <Typography variant="body2" fontWeight={600} gutterBottom>
              Рассылка
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Подпишитесь на нашу рассылку для еженедельных обновлений и акций.
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap>
              <TextField
                id="outlined-basic"
                hiddenLabel
                size="small"
                variant="outlined"
                fullWidth
                aria-label="Введите свой адрес электронной почты"
                placeholder="Ваш адрес электронной почты"
                inputProps={{
                  autocomplete: 'off',
                  ariaLabel: 'Введите свой адрес электронной почты',
                }}
              />
              <Button variant="contained" color="primary" sx={{ flexShrink: 0 }}>
                Подписаться
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Продукт
          </Typography>
          <Link color="text.secondary" href="#services">
            Услуги
          </Link>
          <Link color="text.secondary" href="#testimonials">
            Отзывы
          </Link>
          <Link color="text.secondary" href="#highlights">
            Преимущества
          </Link>
          <Link color="text.secondary" href="#faq">
            Часто задаваемые вопросы
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Компания
          </Typography>
          <Link color="text.secondary" href="#about">
            О нас
          </Link>
          <Link color="text.secondary" href="#career">
            Карьера
          </Link>
          <Link color="text.secondary" href="#press">
            Пресса
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Юридическое
          </Typography>
          <Link color="text.secondary" href="#terms">
            Условия
          </Link>
          <Link color="text.secondary" href="#privacy">
            Конфиденциальность
          </Link>
          <Link color="text.secondary" href="#contact">
            Контакты
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <div>
          <Link color="text.secondary" href="#privacy-policy">
            Политика конфиденциальности
          </Link>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color="text.secondary" href="#terms-of-service">
            Условия обслуживания
          </Link>
          <Copyright />
        </div>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: 'text.secondary',
          }}
        >
          <IconButton
            color="inherit"
            href="https://t.me/yourtelegramchannel"
            aria-label="Telegram"
            sx={{ alignSelf: 'center' }}
          >
            <TelegramIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            aria-label="YouTube"
            sx={{ alignSelf: 'center' }}
          >
            <YouTubeIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            aria-label="YouTube"
            sx={{ alignSelf: 'center' }}
          >
            <TwitterIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
