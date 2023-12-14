import {  Box, Stack, Typography } from '@mui/material';
import Header from './Header';

type BannerImages = {
    recipeBannerImages : React.ReactElement[],
    recipeName?:string
}


const RecipeBanner = ({recipeBannerImages,recipeName}:BannerImages) => {
    return (

        <Stack direction="column"
            justifyContent="flex-end"
            alignItems="center" sx={{
                margin: '0px',
                height: { xs: "280px", sm: "330px", md: "450px", lg: "500px" },
                borderRadius: { xs: '0 0 100% 100%/0 0 50% 50%', sm: '0 0 70% 70%/0 0 80% 80%', md: '0 0 60% 60%/0 0 90% 90%', lg: '0 0 50% 50%/0 0 100% 100%' },
                backgroundColor: '#6C002D',
                boxShadow: '0px 1.5px 4px -1px rgba(10, 9, 11, 0.07)'
            }}>

            <Header />

            <Typography variant='h1' fontSize={{ xs: "32px", sm: "36px", md: "40px", lg: "48px" }} fontWeight={700} lineHeight={{ xs: "3", md: "4", lg: "4" }} color={'#F7F8FA'}>
                <span style={{ color: '#D86767' }}>{recipeName===""? 'All' :'' }</span> {recipeName===""? 'Recipes' :recipeName }
            </Typography>
            <Stack direction="column"
                justifyContent="flex-end"
                alignItems="center"
                spacing={2}>
                <Box
                    pb={4}
                    sx={{ display: 'flex', gap: { xs: "8px", sm: "12px", md: "16px", lg: "32px" } }}
                >
                    {recipeBannerImages}                 
                </Box>

            </Stack>
        </Stack>

    )
}

export default RecipeBanner