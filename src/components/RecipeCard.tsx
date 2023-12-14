import { Grid, Card, CardContent, Typography, Stack, Avatar, Divider } from '@mui/material'
import { useNavigate } from 'react-router-dom';

type Recipe = {
    recipeItem: {
        id: number,
        name: string,
        slug: string,
        imageUrl: string,
        description?: string,
        prepTime?: string,
        serves?: string,
        skill?: string
    }
}

const RecipeCard = ({ recipeItem }: Recipe) => {
    const navigate = useNavigate();


    return (
        <Grid item xs={12} md={6} padding={2} >

            <Card onClick={() => navigate(`/recipes/${recipeItem.slug}`)} variant="outlined" sx={{
                backgroundColor: '#FFFFFF', borderWidth: '0', borderRadius: '10px', '&:hover': {
                    boxShadow: '0px 1.5px 4px -1px rgba(10, 9, 11, 0.07)', transition: 'all 0.2s', transform: 'scale(1.03)', cursor: 'pointer'
                },
            }}>

                <CardContent>
                    <Stack
                        direction={{ xs: "column", sm: "row", md: "row", lg: "row" }}
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={{ md: 2, lg: 3 }}
                        padding={1} >

                        <Avatar
                            alt={recipeItem.name}
                            src={recipeItem.imageUrl}
                            sx={{ width: 140, height: 140 }} />

                        <Stack
                            direction="column"
                            justifyContent="center"
                            alignItems="left"
                            spacing={1}
                        >

                            <Typography variant="h3" pt={2} fontSize={{ xs: "20px", sm: "21px", md: "22px", lg: "24px" }} textAlign={{ xs: "center", sm: "center", md: "left", lg: "left" }} fontWeight={700} color={"#131416"} >
                                {recipeItem.name}
                            </Typography>
                            <Typography variant="body2" color={"#828282"} fontSize={{ xs: "14px", sm: "14px", md: "15px", lg: "16px" }} textAlign={{ xs: "center", sm: "center", md: "left", lg: "left" }} fontWeight={500}>
                                {recipeItem.description}
                            </Typography>

                            <Stack
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={2.8} pt={1}>
                                <Stack
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="left"
                                    spacing={1}
                                >
                                    <Typography variant="body2" color={"#828282"} fontSize={{ xs: "14px", sm: "14px", md: "15px", lg: "16px" }} fontWeight={500}>
                                        Prep time
                                    </Typography>
                                    <Typography variant="body1" color={"#131416"} fontSize={{ xs: "14px", sm: "14px", md: "15px", lg: "16px" }} fontWeight={700} align='center'>
                                        {recipeItem.prepTime}
                                    </Typography>
                                </Stack>
                                <Divider orientation='vertical' variant='middle' sx={{ height: '33px', borderWidth: '1px', borderColor: '#E6E6E6' }} />
                                <Stack
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={1}
                                >
                                    <Typography variant="body2" color={"#828282"} fontSize={16} fontWeight={500}>
                                        Serves
                                    </Typography>
                                    <Typography variant="body1" color={"#131416"} fontSize={16} fontWeight={700} align='center'>
                                        {recipeItem.serves}
                                    </Typography>
                                </Stack>
                                <Divider orientation='vertical' variant='middle' sx={{ height: '33px', borderWidth: '1px', borderColor: 'E6E6E6' }} />
                                <Stack
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={1}
                                >
                                    <Typography variant="body2" color={"#828282"} fontSize={16} fontWeight={500}>
                                        Skill
                                    </Typography>
                                    <Typography variant="body1" color={"#131416"} fontSize={16} fontWeight={700} align='center'>
                                        {recipeItem.skill}
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Stack>

                    </Stack>

                </CardContent>

            </Card>
        </Grid>
    )
}

export default RecipeCard