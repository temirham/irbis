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
    occupation: 'Юрист по налоговым спорам',
    testimonial:
      "Моя главная задача — защитить права клиентов в спорах с налоговыми органами. Я уверен, что каждая ситуация уникальна и требует индивидуального подхода, и я горжусь тем, что мои клиенты получают лучшие результаты.",
  },
  {
    avatar: <Avatar alt="Дмитрий Смирнов" src="/static/images/avatar/2.jpg" />,
    name: 'Андрей Козлов',
    occupation: 'Юрист по корпоративным спорам',
    testimonial:
      'Я специализируюсь на решении сложных корпоративных конфликтов. Моя цель — защищать бизнес моих клиентов, помогая им находить оптимальные решения и избегать юридических рисков.',
  },
  {
    avatar: <Avatar alt="Екатерина Петрова" src="/static/images/avatar/3.jpg" />,
    name: 'Екатерина Михайлова',
    occupation: 'Юрист по договорному праву',
    testimonial:
      "Моя работа заключается в том, чтобы создавать и проверять договоры, которые защищают интересы клиентов. Я уверена, что правильно составленный договор — это основа успешного сотрудничества и уверенности в будущем.",
  },
  {
    avatar: <Avatar alt="Алексей Кузнецов" src="/static/images/avatar/4.jpg" />,
    name: 'Ольга Иванова',
    occupation: 'Юрист по защите интеллектуальной собственности',
    testimonial:
      "Я защищаю права клиентов на их интеллектуальную собственность. От регистрации авторских прав до борьбы с нарушителями — моя задача сделать так, чтобы идеи и разработки моих клиентов были надежно защищены.",
  },
  {
    avatar: <Avatar alt="Ольга Николаева" src="/static/images/avatar/5.jpg" />,
    name: 'Иван Сидоров',
    occupation: 'Юрист по недвижимости',
    testimonial:
      "Я занимаюсь сопровождением сделок с недвижимостью. Моя миссия — обеспечить безопасность и прозрачность каждой сделки, чтобы мои клиенты были уверены в своих вложениях.",
  },
  {
    avatar: <Avatar alt="Иван Сидоров" src="/static/images/avatar/6.jpg" />,
    name: 'Махмуд Эффенди',
    occupation: 'Юрист по финансовым расследованиям',
    testimonial:
      "Моя специализация — выявление и предотвращение финансовых махинаций. Я изучаю каждую деталь, собираю доказательства и строю стратегию, чтобы защищать интересы наших клиентов.",
  },
];




const logoStyle = {
  width: '64px',
  opacity: 0.3,
};

export default function Testimonials() {
  const theme = useTheme();
  // const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;

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
          Наша команда
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Познакомьтесь с нашей командой профессиональных юристов. Каждый из них обладает многолетним опытом, глубокими знаниями и стремлением защищать ваши интересы. Мы гордимся нашим индивидуальным подходом, надежностью и приверженностью к достижению лучших результатов для клиентов.
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
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
