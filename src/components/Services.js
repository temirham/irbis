import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import ShowChartRoundedIcon from '@mui/icons-material/ShowChartRounded';

const services = [
  {
    icon: <AttachMoneyRoundedIcon />,
    title: 'Налоговые споры',
    description:
      'Наши юристы помогают урегулировать споры с налоговыми органами, минимизировать риски и защищать интересы вашего бизнеса.',
    imageLight: 'url("/static/images/nalog.png")',
    imageDark: 'url("/static/images/nalog.png")',
  },
  {
    icon: <BusinessRoundedIcon />,
     title: 'Юридический аудит',
    description:
      'Проводим полный аудит вашей документации и договоров, чтобы выявить и устранить возможные юридические риски.',
    imageLight: 'url("/static/images/plan.png")',
    imageDark: 'url("/static/images/plan.png")',
  },
  {
    icon: <ShowChartRoundedIcon />,
    title: 'Защита от финансового мошенничества',
    description:
      'Мы предоставляем помощь в случае финансового мошенничества: анализ ситуации, сбор доказательств и защита ваших интересов в суде.',
    imageLight: 'url("/static/images/analize.png")',
    imageDark: 'url("/static/images/analize.png")',
  },
];

export default function Services() {
  const [selectedServiceIndex, setSelectedServiceIndex] = React.useState(0);

  const handleServiceClick = (index) => {
    setSelectedServiceIndex(index);
  };

  const selectedService = services[selectedServiceIndex];

  return (
    <Container id="services" sx={{ py: { xs: 8, sm: 16 } }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <div>
            <Typography component="h2" variant="h4" color="text.primary">
              Наши услуги
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: { xs: 2, sm: 4 } }}
            >
              Мы предоставляем юридическую помощь в решении налоговых споров, аудите документации и защите от финансового мошенничества.
            </Typography>
          </div>
          <Grid container item gap={1} sx={{ display: { xs: 'auto', sm: 'none' } }}>
            {services.map(({ title }, index) => (
              <Chip
                key={index}
                label={title}
                onClick={() => handleServiceClick(index)}
                sx={{
                  borderColor: (theme) => {
                    if (theme.palette.mode === 'light') {
                      return selectedServiceIndex === index ? 'primary.light' : '';
                    }
                    return selectedServiceIndex === index ? 'primary.light' : '';
                  },
                  background: (theme) => {
                    if (theme.palette.mode === 'light') {
                      return selectedServiceIndex === index ? 'none' : '';
                    }
                    return selectedServiceIndex === index ? 'none' : '';
                  },
                  backgroundColor: selectedServiceIndex === index ? 'primary.main' : '',
                  '& .MuiChip-label': {
                    color: selectedServiceIndex === index ? '#fff' : '',
                  },
                }}
              />
            ))}
          </Grid>
          <Box
            component={Card}
            variant="outlined"
            sx={{
              display: { xs: 'auto', sm: 'none' },
              mt: 4,
            }}
          >
            <Box
              sx={{
                backgroundImage: (theme) =>
                  theme.palette.mode === 'light'
                    ? selectedService.imageLight
                    : selectedService.imageDark,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: 280,
              }}
            />
            <Box sx={{ px: 2, pb: 2 }}>
              <Typography color="text.primary" variant="body2" fontWeight="bold">
                {selectedService.title}
              </Typography>
              <Typography color="text.secondary" variant="body2" sx={{ my: 0.5 }}>
                {selectedService.description}
              </Typography>
            </Box>
          </Box>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            useFlexGap
            sx={{ width: '100%', display: { xs: 'none', sm: 'flex' } }}
          >
            {services.map(({ icon, title, description, image }, index) => (
              <Card
                key={index}
                variant="outlined"
                component={Button}
                onClick={() => handleServiceClick(index)}
                sx={{
                  p: 3,
                  height: 'fit-content',
                  width: '100%',
                  background: 'none',
                  backgroundColor:
                    selectedServiceIndex === index ? 'action.selected' : undefined,
                  borderColor: (theme) => {
                    if (theme.palette.mode === 'light') {
                      return selectedServiceIndex === index
                        ? 'primary.light'
                        : 'grey.200';
                    }
                    return selectedServiceIndex === index ? 'primary.dark' : 'grey.800';
                  },
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    textAlign: 'left',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { md: 'center' },
                    gap: 2.5,
                  }}
                >
                  <Box
                    sx={{
                      color: (theme) => {
                        if (theme.palette.mode === 'light') {
                          return selectedServiceIndex === index
                            ? 'primary.main'
                            : 'grey.300';
                        }
                        return selectedServiceIndex === index
                          ? 'primary.main'
                          : 'grey.700';
                      },
                    }}
                  >
                    {icon}
                  </Box>
                  <Box sx={{ textTransform: 'none' }}>
                    <Typography
                      color="text.primary"
                      variant="body2"
                      fontWeight="bold"
                    >
                      {title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      sx={{ my: 0.5 }}
                    >
                      {description}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            ))}
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { xs: 'none', sm: 'flex' }, width: '100%' }}
        >
          <Card
            variant="outlined"
            sx={{
              height: '100%',
              width: '100%',
              display: { xs: 'none', sm: 'flex' },
              pointerEvents: 'none',
            }}
          >
            <Box
              sx={{
                m: 'auto',
                width: '95%',
                height: '80%',
                backgroundSize: 'contain',
                backgroundImage: (theme) =>
                  theme.palette.mode === 'light'
                    ? selectedService.imageLight
                    : selectedService.imageDark,
              }}
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
