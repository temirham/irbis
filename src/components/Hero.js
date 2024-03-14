import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TradingViewWidgetDark from './TradingViewWidgetDark';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import TradingViewWidgetLight from './TradingVIewWidgetLight';

export default function Hero({ theme }) {
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
          <Typography
            component="span"
            variant="h1"
            sx={{
              color: (theme) =>
                theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.primary.light,
            }}
          >
          
          </Typography>
        </Typography>
          <Typography variant="body1" textAlign="center" color="text.secondary">
            Откройте для себя наши финансовые решения высшего качества, которые будут адаптированы под ваши уникальные потребности.
            Повысьте свой финансовый опыт благодаря передовым функциям и высококлассным услугам.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
            <TextField
              id="outlined-basic"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Введите ваш адрес электронной почты"
              placeholder="Ваш адрес электронной почты"
              inputProps={{
                autoComplete: 'off',
                ariaLabel: 'Введите ваш адрес электронной почты',
              }}
            />
            <Button variant="contained" color="primary">
              Начать сейчас
            </Button>
          </Stack>
          <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
            Нажимая &quot;Начать сейчас&quot;, вы соглашаетесь с нашими&nbsp;
            <Link href="#" color="primary">
              Условиями использования
            </Link>
            .
          </Typography>
        </Stack>
        
        <Box
          id="image"
          sx={(theme) => ({
            mt: { xs: 8, sm: 10 },
            alignSelf: 'center',
            height: { xs: 200, sm: 700 },
            width: '100%',
            backgroundSize: 'cover',
            borderRadius: '10px',
            outline: '1px solid',
            outlineColor:
              theme.palette.mode === 'light'
                ? alpha('#BFCCD9', 0.5)
                : alpha('#9CCCFC', 0.1),
            boxShadow:
              theme.palette.mode === 'light'
                ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
          })}
        >
          {theme.palette.mode === 'light' ? (
            <TradingViewWidgetLight />
          ) : (
            <TradingViewWidgetDark />
          )}
        </Box>
      </Container>
    </Box>
  );
}
