import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: 'Гибкая производительность',
    description:
      'Наши услуги легко адаптируются под ваши потребности, повышая эффективность и упрощая ваши задачи.',
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: 'Создано для долгосрочного использования',
    description:
      'Почувствуйте непревзойденную долговечность, которая превосходит ожидания, становясь выгодным инвестированием в будущее.',
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: 'Превосходный пользовательский опыт',
    description:
      'Интегрируйте наши услуги в свой повседневный режим с интуитивно понятным и простым интерфейсом.',
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: 'Инновационные функции',
    description:
      'Оставайтесь впереди с функциями, устанавливающими новые стандарты и лучше отвечающими на ваша постоянно меняющиеся потребности.',
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: 'Надежная поддержка',
    description:
      'Рассчитывайте на нашу отзывчивую клиентскую поддержку, предоставляющую помощь, выходящую за пределы простой покупки.',
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: 'Точность в каждой детали',
    description:
      'Наслаждайтесь продуктом, созданным с особым вниманием к деталям, где маленькие штрихи оказывают значительное влияние на ваш общий опыт.',
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: '#06090a',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4">
            Преимущества
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            Узнайте, почему наши услуги выделяются: адаптивность, долговечность,
            удобный дизайн и инновации. Наслаждайтесь надежной клиентской поддержкой
            и вниманием к каждой детали.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'grey.800',
                  background: 'transparent',
                  backgroundColor: 'grey.900',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
