import { useState, useEffect } from "react";
import { Box, Stack, Typography, Divider } from "@mui/material"
import { ArrowCircleRightOutlined, PhoneInTalkOutlined, MailOutlineOutlined } from "@mui/icons-material"
import '../pages/home.css';
import LinearProgress from '@mui/material/LinearProgress';


const HomeSlider = () => {
    const [sliderId, setSliderId] = useState(1);
    const [sliderTitle, setSliderTitle] = useState("");
    const [sliderDescription, setSliderDescription] = useState("");
    const [sliderImage, setSliderImage] = useState("");
    const [sliderColor1, setSliderColor1] = useState("");
    const [sliderColor2, setSliderColor2] = useState("");
    const [sliderColorCircle, setSliderColorCircle] = useState("");

    const [progress, setProgress] = useState(10);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 1));
        }, 200);
        return () => {
            clearInterval(timer);
        };
    }, []);

    const getSliderData = (progress: any) => {



        const sliderData =
            [
                {
                    id: 1,
                    title: 'The unique flavors of Turkey have now found a home in Canada.',
                    description: 'Discover the unique tastes of Turkey with Cikofte.ca. Open the doors to flavor with just a click.',
                    imageUrl: '/images/CikofteHotLogo-1.png',
                    color1: '#BF212F',
                    color2: '#D0502E',
                    colorCircle: '#60181B'
                },
                {
                    id: 2,
                    title: 'Finest Pastırma: Meticulously Crafted for Culinary Excellence',
                    description: 'The finest and freshest pastırma varieties await you, crafted with meticulous care to ensure an unparalleled culinary experience.',
                    imageUrl: '/images/FarmHalal.png',
                    color1: '#390018',
                    color2: '#006937',
                    colorCircle: '#7B1942'
                },
                {
                    id: 3,
                    title: 'Essential Çiğköfte & Pastırma Brands Unite in Canada: Join the Flavor Festival!',
                    description: 'We\'ve brought together the essential brands for çiğköfte and pastırma in Canada. Join this flavor festival!',
                    imageUrl: '/images/Cikofte-Bag.png',
                    color1: '#BF2130',
                    color2: '#7A121B',
                    colorCircle: '#FFBFBF'
                }
            ]

        if (progress < 33) {
            return sliderData[0];
        } else if (progress >= 33 && progress < 67) {
            return sliderData[1];
        } else {
            return sliderData[2];
        }

    }
    useEffect(() => {

        const sliderItem = getSliderData(progress);
        setSliderTitle(sliderItem.title);
        setSliderDescription(sliderItem.description);
        setSliderImage(sliderItem.imageUrl);
        setSliderColor1(sliderItem.color1);
        setSliderColor2(sliderItem.color2);
        setSliderColorCircle(sliderItem.colorCircle);
        setSliderId(sliderItem.id);

    }, [progress]);

    return (
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
        >
            <Stack
                height={{ xs: 'auto', sm: 'auto', lg: '580px' }}
                maxWidth={{ xs: "xs", sm: "sm", md: "md", lg: "lg" }}
                margin="0 auto"
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >

                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-start"
                        spacing={2}
                    >


                        <Stack
                            direction="column"
                            justifyContent="flex-end"
                            alignItems="flex-start"
                            spacing={1}
                            width={{ xs: '100%', sm: '100%', 'lg': '50%' }}
                            paddingTop={{ xs: '350px', sm: '580px', lg: 0 }}
                            paddingLeft={{ xs: 2, lg: 0 }}
                            paddingRight={{ xs: 2, lg: 0 }}
                        >

                            <Stack
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                                spacing={2}
                                width={'100%'}
                                pb={2}
                                display={{ xs: 'fixed',sm:'fixed', lg: 'none' }}
                            >
                                <Box onClick={() => setProgress(0)} width={'16px'} height={'16px'} bgcolor={sliderId === 1 ? '#D86767' : '#FFFFFF'} borderRadius={'50%'} sx={{ opacity: sliderId === 1 ? 1 : 0.1, cursor: "pointer" }}></Box>
                                <Box onClick={() => setProgress(34)} width={'16px'} height={'16px'} bgcolor={sliderId === 2 ? '#D86767' : '#FFFFFF'} borderRadius={'50%'} sx={{ opacity: sliderId === 2 ? 1 : 0.1, cursor: "pointer" }}></Box>
                                <Box onClick={() => setProgress(67)} width={'16px'} height={'16px'} bgcolor={sliderId === 3 ? '#D86767' : '#FFFFFF'} borderRadius={'50%'} sx={{ opacity: sliderId === 3 ? 1 : 0.1, cursor: "pointer" }}></Box>
                            </Stack>

                            <Typography variant="h1" fontSize={{ xs: "24px", sm: "32px", md: "40px", lg: "48px" }} fontWeight={700} lineHeight={{ lg: '55px' }} color={'#FFFFFF'} align="left" >
                                {sliderTitle}
                            </Typography>
                            <Typography variant="subtitle1" pt={2} pb={2} fontSize={{ xs: "16px", sm: "16px", md: "17px", lg: "18px" }} fontWeight={400} lineHeight={'21.78px'} color={'#FFFFFF'} align="left" >
                                {sliderDescription}
                            </Typography>

                            <button className="slider-button"  >
                                <Stack
                                    direction='row' justifyContent="space-between"
                                    alignItems="center">
                                    <span>Contact us </span>
                                    <ArrowCircleRightOutlined sx={{ color: '#6C002D', width: '22px', height: '22px', border: '1.5px' }} />
                                </Stack>
                            </button>
                            <Stack
                                direction="row"
                                justifyContent="flex-start"
                                
                                alignItems="flex-start"
                                spacing={2}
                                pt={1.5}
                            >
                                <Stack
                                    direction="row"
                                    justifyContent="flex-start"
                                    alignItems="center"
                                    spacing={1}
                                >
                                    <PhoneInTalkOutlined sx={{ color: '#CC7097' }} />
                                    <Typography variant="body1" fontSize={{ xs: "12px", sm: "14px", md: "15px", lg: "16px" }} fontWeight={400} lineHeight={'24px'} color={'#FFFFFF'} align="left" >
                                        +1 (437) 979-1000
                                    </Typography>
                                </Stack>

                                <Divider orientation='vertical' variant='middle' sx={{ height: '20px', borderWidth: '1px', borderColor: '#7B1942' }} />
                                <Stack
                                    direction="row"
                                    justifyContent="flex-start"
                                    alignItems="center"
                                    spacing={1}
                                >
                                    <MailOutlineOutlined sx={{ color: '#CC7097' }} />
                                    <Typography variant="body1" fontSize={{ xs: "12px", sm: "14px", md: "15px", lg: "16px" }} fontWeight={400} lineHeight={'24px'} color={'#FFFFFF'} align="left" >
                                        info@antakya.ca
                                    </Typography>
                                </Stack>
                            </Stack>

                        </Stack>

                        <Stack>
                            <Box sx={{ clipPath: 'polygon(0 70%, 70% 0, 100% 0, 100% 30%, 30% 100%)', background: `linear-gradient( 135deg,  ${sliderColor1} 50%, ${sliderColor2} 50% )`, position: 'absolute', right: 0, top: 0, width: { xs: '250px', sm: '400px', lg: '400px' }, height: { xs: '250px', sm: '400px', lg: '400px' } }}>

                            </Box>
                            <Box sx={{ clipPath: 'circle(50% at 50% 50%)', height: { xs: '200px', sm: '376px', lg: '376px' }, width: { xs: '200px', sm: '376px', lg: '376px' }, background: `${sliderColorCircle}`, position: 'absolute', right: { xs: 100, sm: 150, lg: 150 }, top: { xs: 100, sm: 150, lg: 150 }, }}>

                            </Box>
                            <Box sx={{ height: { xs: '200px', sm: '376px', lg: '376px' }, width: { xs: '200px', sm: '376px', lg: '376px' }, position: 'absolute', right: { xs: 100, sm: 150, lg: 150 }, top: { xs: 100, sm: 150, lg: 150 }, }}>
                                <img src={sliderImage} alt="antakya" style={{ zIndex: 1, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%' }} />
                            </Box>
                        </Stack>

                    </Stack>
                </Stack>

            </Stack>
            <Stack
                direction="row"
                justifyContent="flex-end"
                alignItems="flex-start"
                spacing={2}
                width={'100%'}
                display={{ xs: 'none', lg: 'fixed' }}
            >
                <Box width={820} height={108} bgcolor={'#D86767'}>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" value={progress} sx={{ backgroundColor: 'transparent', ' span': { backgroundColor: '#7B1942' } }} />
                    </Box>
                    <Stack
                        direction="row"
                        justifyContent="space-evenly"
                        alignItems="center"
                        spacing={2}
                        height={'100%'}
                        pl={4}
                        pr={4}
                    >

                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            spacing={1}
                            width={'33%'}
                            onClick={() => setProgress(0)}
                            sx={{ cursor: 'pointer' }}
                        >
                            <Typography variant="subtitle1" fontSize={'40px'} fontWeight={300} lineHeight={'40px'} color={sliderId === 1 ? '#ECB3B3' : '#6C002D'}>
                                01
                            </Typography>

                            <Stack
                                direction="column"
                                justifyContent="flex-start"
                                alignItems="flex-start"
                                spacing={0.5}
                            >
                                <Typography variant="subtitle2" fontSize={'18px'} fontWeight={700} lineHeight={'18px'} color={sliderId === 1 ? '#FBF0F0' : '#6C002D'}>
                                    Çi’köfte
                                </Typography>
                                <Typography variant="subtitle2" fontSize={'12px'} fontWeight={700} lineHeight={'12px'} color={sliderId === 1 ? '#F5D9D9' : '#6C002D'}>
                                    Mediterranean Snack
                                </Typography>

                            </Stack>

                        </Stack>
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            spacing={1}
                            width={'34%'}
                            onClick={() => setProgress(34)}
                            sx={{ cursor: 'pointer' }}
                        >
                            <Divider orientation='vertical' variant='middle' sx={{ height: '56px', borderWidth: '0.5px', borderColor: '#FFFFFF', opacity: 0.4, marginRight: '20px !important' }} />

                            <Typography variant="subtitle1" fontSize={'40px'} fontWeight={300} lineHeight={'40px'} color={sliderId === 2 ? '#ECB3B3' : '#6C002D'}  >
                                02
                            </Typography>

                            <Stack
                                direction="column"
                                justifyContent="flex-start"
                                alignItems="flex-start"
                                spacing={0.5}
                            >
                                <Typography variant="subtitle2" fontSize={'18px'} fontWeight={700} lineHeight={'18px'} color={sliderId === 2 ? '#FBF0F0' : '#6C002D'}>
                                    Farm Halal
                                </Typography>
                                <Typography variant="subtitle2" fontSize={'12px'} fontWeight={700} lineHeight={'12px'} color={sliderId === 2 ? '#F5D9D9' : '#6C002D'}>
                                    Air Dried & Cured Beef
                                </Typography>

                            </Stack>

                        </Stack>

                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            spacing={1}
                            width={'33%'}
                            onClick={() => setProgress(67)}
                            sx={{ cursor: 'pointer' }}
                        >
                            <Divider orientation='vertical' variant='middle' sx={{ height: '56px', borderWidth: '0.5px', borderColor: '#FFFFFF', opacity: 0.4, marginRight: '20px !important' }} />

                            <Typography variant="subtitle1" fontSize={'40px'} fontWeight={300} lineHeight={'40px'} color={sliderId === 3 ? '#ECB3B3' : '#6C002D'}  >
                                03
                            </Typography>

                            <Stack
                                direction="column"
                                justifyContent="flex-start"
                                alignItems="flex-start"
                                spacing={0.5}
                            >
                                <Typography variant="subtitle2" fontSize={'18px'} fontWeight={700} lineHeight={'18px'} color={sliderId === 3 ? '#FBF0F0' : '#6C002D'}>
                                    Products
                                </Typography>
                                <Typography variant="subtitle2" fontSize={'12px'} fontWeight={700} lineHeight={'12px'} color={sliderId === 3 ? '#F5D9D9' : '#6C002D'}>
                                    All Products
                                </Typography>

                            </Stack>

                        </Stack>
                    </Stack>


                </Box>

            </Stack>
        </Stack>
    )
}

export default HomeSlider