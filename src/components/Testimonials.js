import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';

const userTestimonials = [
  {
    avatar: <Avatar alt="Анна Иванова" src="/static/images/avatar/1.jpg" />,
    name: 'Владимир Петров',
    occupation: 'Инвестор-любитель',
    testimonial:
      "Просто обожаю работать с вашей компанией! Спасибо за то, что вы всегда на связи, готовы помочь и делаете все возможное, чтобы мои инвестиции приносили прибыль. Ваша команда просто молодцы!",
  },
  {
    avatar: <Avatar alt="Дмитрий Смирнов" src="/static/images/avatar/2.jpg" />,
    name: 'Андрей Козлов',
    occupation: 'Бизнесмен',
    testimonial:
      'Ребята, спасибо вам за вашу энергию и отличный сервис! Ваша компания - источник вдохновения для всех, кто стремится сделать что-то великое с своими деньгами. Продолжайте в том же духе!',
    
  },
  {
    avatar: <Avatar alt="Екатерина Петрова" src="/static/images/avatar/3.jpg" />,
    name: 'Екатерина Михайлова',
    occupation: 'Студент',
    testimonial:
      "Я была немного смущена вопросами финансов и инвестиций, но ваша компания сделала все так просто и понятно! Спасибо за то, что вы разъяснили все детали и помогли мне начать инвестировать. Вы - настоящие герои!",
  },
  {
    avatar: <Avatar alt="Алексей Кузнецов" src="/static/images/avatar/4.jpg" />,
    name: 'Ольга Иванова',
    occupation: 'Фрилансер',
    testimonial:
      "Мне всегда нравилось, как ваша компания делает инвестиции доступными для всех. Спасибо за то, что вы верите в людей и помогаете им строить финансовое будущее. Вы - настоящие герои в мире финансов!",
  },
  {
    avatar: <Avatar alt="Ольга Николаева" src="/static/images/avatar/5.jpg" />,
    name: 'Иван Сидоров',
    occupation: 'Предприниматель',
    testimonial:
      "Просто невероятный опыт работы с вашей компанией! Спасибо за ваше профессиональное отношение и за то, что вы всегда идете на встречу клиентам. С нетерпением жду новых проектов!",
  },
  {
    avatar: <Avatar alt="Иван Сидоров" src="/static/images/avatar/6.jpg" />,
    name: 'Махмуд Эффенди',
    occupation: 'Татарин',
    testimonial:
      "Я не могу не поделиться своим восторгом от работы с вашей компанией! Спасибо за ваше терпение и за то, что вы всегда готовы помочь и разъяснить все моменты. Вы - настоящие профессионалы!, Отдельная благодарность Джамалу, лучший наставник на свете",
  },
];





const whiteLogos = [
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg',
];

const darkLogos = [
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg',
];

const logoStyle = {
  width: '64px',
  opacity: 0.3,
};

export default function Testimonials() {
  const theme = useTheme();
  const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;

  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
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
        <Typography component="h2" variant="h4" color="text.primary">
          Отзывы
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Узнайте, что наши клиенты любят в наших продуктах. Откройте для себя, как мы выделяемся в эффективности, надежности и удовлетворенности. Присоединяйтесь к нам за качеством, инновациями и надежной поддержкой.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: 1,
              }}
            >
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  pr: 2,
                }}
              >
                <CardHeader
                  avatar={testimonial.avatar}
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
                <img
                  src={logos[index]}
                  alt={`Logo ${index + 1}`}
                  style={logoStyle}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
