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
    title: 'Персонализированный подход',
    description:
      'Каждое дело рассматривается индивидуально, с учетом всех нюансов вашей ситуации для достижения оптимального результата.',
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: 'Надежные решения',
    description:
      'Мы предоставляем юридические услуги, ориентированные на долгосрочные результаты, помогая нашим клиентам избежать рисков в будущем.',
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: 'Высокий уровень доверия',
    description:
      'Клиенты выбирают нас за профессионализм, ответственность и полное соблюдение их интересов.',
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: 'Инновационный подход',
    description:
      'Используем современные методы анализа и решения юридических задач, чтобы предложить эффективные и актуальные решения.',
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: 'Постоянная поддержка',
    description:
      'Мы всегда на связи: от консультации до полного сопровождения дела, чтобы вы чувствовали себя защищенными.',
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: 'Тщательность в работе',
    description:
      'Мы уделяем внимание каждой детали, обеспечивая высокий уровень подготовки и аргументации для вашего дела.',
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
            Наши преимущества
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            Мы гордимся своим профессионализмом, инновационным подходом и ответственностью.
            Наши юристы предоставляют услуги, ориентированные на защиту ваших интересов 
            и достижение долгосрочных результатов.
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
