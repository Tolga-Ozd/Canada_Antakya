import { useNavigate } from "react-router-dom"
import setBodyColor from "../utils/setBodyColor"
import Header from "../components/Header"
import Footer from "../components/Footer"
import HomeSlider from "../components/Slider"
import { Stack, Avatar, Box, CardMedia, Typography, FormControlLabel, Checkbox, FormGroup, Button } from "@mui/material"
import { ArrowCircleRightOutlined } from "@mui/icons-material"
import './home.css';
import ContactBg from "../assets/images/contact-bg.svg";
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6C002D',
    }
  },
});


const Home = () => {

  setBodyColor({ color: "#6C002D" })

  const navigate = useNavigate();

  return (
    <>
      <Header />
      <HomeSlider />
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        flexWrap={'wrap'}
        gap={{xs:'16px',lg:'32px'}}
        mt={15}
      >
        <Box width={'100%'} position={'absolute'} height={{ xs: '193px', md: '150px', lg: '110px' }} bgcolor={'#FFFFFF'} sx={{ opacity: '0.1' }} >
        </Box>
        <Avatar
          alt="antakya"
          src="/images/recipe-1.png"
          sx={{ width: { xs: 76, sm: 100, md: 160, lg: 220 }, height: { xs: 76, sm: 100, md: 160, lg: 220 } }} />
        <Avatar
          alt="antakya"
          src="/images/recipe-3.png"
          sx={{ width: { xs: 76, sm: 100, md: 160, lg: 220 }, height: { xs: 76, sm: 100, md: 160, lg: 220 } }} />
        <Avatar
          alt="antakya"
          src="/images/recipe-4.png"
          sx={{ width: { xs: 76, sm: 100, md: 160, lg: 220 }, height: { xs: 76, sm: 100, md: 160, lg: 220 } }} />
        <Avatar
          alt="antakya"
          src="/images/recipe-2.png"
          sx={{ width: { xs: 76, sm: 100, md: 160, lg: 220 }, height: { xs: 76, sm: 100, md: 160, lg: 220 } }} />
        <button className="recipe-button" style={{ marginLeft: '40px', zIndex: 1 }} onClick={() => navigate('/recipes')}>
          <Stack
            direction='row' justifyContent="space-between"
            alignItems="center">
            <span>Recipes</span>
            <ArrowCircleRightOutlined sx={{ width: '22px', height: '22px', border: '1.5px' }} />
          </Stack>
        </button>
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        position={'relative'}
        spacing={2}
        mt={{xs:13,lg:25}}
        mb={{xs:5,lg:5}}
        pr={2}
      >
        <Box bgcolor={'#FFFFFF'} display={{ xs: 'none', sm: 'none', md: 'none', lg: 'fixed' }} sx={{ clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 75% 15%)', borderRadius: '45px' }} position={'relative'}>
          <CardMedia
            component="img"
            alt="antakya"
            image={ContactBg}
          />
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            position={'absolute'}
            sx={{ top: '35%', left: '0' }}
            pl={10}
            width={'40%'}
          >
            <Typography variant="h2" fontSize={{ xs: "24px", sm: "26px", md: "28px", lg: "32px" }} fontWeight={400} color={'#131416'} align="left" >
              Turkish Flavors Await:
            </Typography>
            <Typography variant="h2" fontSize={{ xs: "24px", sm: "26px", md: "28px", lg: "32px" }} fontWeight={600} color={'#131416'} align="left" sx={{ marginTop: '1px !important' }} >
              Contact Us Today!
            </Typography>
            <Typography variant="body1" fontSize={{ xs: "14px", sm: "16px", md: "18px", lg: "20px" }} fontWeight={400} color={'#131416'} align="left"  >
              Experience the Taste of Turkey in Canada! Whether you have questions, suggestions, or just want to chat, we're here for you. Use the form below to get in touch, and let the flavors of Turkey bring us together.
            </Typography>
          </Stack>
        </Box>

        <Box bgcolor={'#FFFFFF'} height={{ xs: '100%', sm: '100%', md: '100%', lg: '620px' }} width={{ xs: '100%', sm: '100%', md: '100%', lg: '528px' }} borderRadius={'20px'} position={{ xs: 'relative', sm: 'relative', md: 'relative', lg: 'absolute' }} bottom={{ md: 0, lg: '80px' }} right={{ md: 0, lg: '255px' }} p={6} boxShadow={'0px 80.5px 105px 0px rgba(51, 51, 51, 0.1)'}
        >
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            display={{ sx: 'fixed', lg: 'none' }}
            position={{ sx: 'fixed', lg: 'absolute' }}
            sx={{ top: { sx: 0, lg: '35%' }, left: '0' }}
            pl={{ sx: 0, lg: 10 }}
            width={{ sx: '100%', lg: '40%' }}
            mb={3}
          >
            <Typography variant="h2" fontSize={{ xs: "24px", sm: "26px", md: "28px", lg: "32px" }} fontWeight={400} color={'#6C002D'} align="left" >
              Turkish Flavors Await:
            </Typography>
            <Typography variant="h2" fontSize={{ xs: "24px", sm: "26px", md: "28px", lg: "32px" }} fontWeight={600} color={'#6C002D'} align="left" sx={{ marginTop: '1px !important' }} >
              Contact Us Today!
            </Typography>
            <Typography variant="body1" fontSize={{ xs: "14px", sm: "16px", md: "18px", lg: "20px" }} fontWeight={400} color={'#131416'} align="left"  >
              Experience the Taste of Turkey in Canada! Whether you have questions, suggestions, or just want to chat, we're here for you. Use the form below to get in touch, and let the flavors of Turkey bring us together.
            </Typography>
          </Stack>

          <ThemeProvider theme={theme}>
            <FormGroup>
              <FormControl sx={{ width: '100%' }} variant="outlined">
                <OutlinedInput
                  id="name"
                  placeholder="Name"
                  fullWidth
                  sx={{ color: '#6C002D', fontSize: '16px', fontWeight: 500 }}
                />


              </FormControl>
              <FormControl sx={{ width: '100%' }} variant="outlined">

                <OutlinedInput
                  id="email"
                  placeholder="Email"
                  fullWidth
                  sx={{ color: '#6C002D', fontSize: '16px', fontWeight: 500, marginTop: '20px' }}
                />

              </FormControl>
              <FormControl sx={{ width: '100%' }} variant="outlined">
                <OutlinedInput
                  id="message"
                  placeholder="Message"
                  fullWidth
                  multiline
                  rows={8}
                  sx={{ color: '#6C002D', fontSize: '16px', fontWeight: 500, marginTop: '20px' }}
                />
              </FormControl>

              <FormControlLabel sx={{ color: '#303030', marginTop: '15px' }}  required control={<Checkbox />} label="I want to receive updates about Antakya.ca" />

              <Button variant="contained" style={{ borderRadius: '8px', width: '116px', height: '42px', marginTop: '25px', textTransform: 'none' }}>Submit</Button>
            </FormGroup>
          </ThemeProvider>
        </Box>
      </Stack>

      <Footer textColor={'#FFFFFF'} footerImage={'/Footer-white.png'} />
    </>

  )
}

export default Home