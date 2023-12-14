import { Grid, CardContent, Typography, Stack, Avatar, Card } from '@mui/material';

type Ingredient = {
    imageUrl: string;
    name: string;
};

type CardInfoProps = {
    recipeItem: {
        id: number;
        name: string;
        slug: string;
        imageUrl: string;
        description?: string;
        prepTime?: string;
        serves?: string;
        skill?: string;
        cook?: string;
        total?: string;
        ingredients?: Ingredient[];
    };
};

const CardInfo = ({ recipeItem }: CardInfoProps) => {
    return (
        <Grid item xs={12} padding={2}>
            <Card sx={{ maxWidth: "584px", margin: "-15px auto", boxShadow: "4px 4px 4px rgba(0.2, 0.2, 0, 0.2)" }}>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: "16px", color: "#770A33", fontWeight: 600, margin: "10px", textAlign: "center" }}>
                    Ingredients
                </Typography>

                <hr style={{ opacity: "0.3", width: "90%",margin:"0 auto" }} />

                <CardContent>
                    <Stack
                        direction={{ xs: "column", sm: "column", md: "column", lg: "column" }}
                        display="flex"
                        justifyContent="flex-start"
                        alignItems="left"
                        spacing={{ md: 1, lg: 2 }}
                        padding={1}
                    >
                        {recipeItem.ingredients?.map((ingredient, index) => (
                            <Grid key={index} item xs={12} style={{ display: "flex", alignItems: "center" }}>
                                <Avatar
                                    alt={ingredient.name}
                                    src={ingredient.imageUrl}
                                    sx={{ width: "32px",height:"100%", marginRight: 2 , objectFit: "contain"}}
                                    style={{ backgroundSize: 'contain' }}
                                />
                                <Typography
                                    key={index}
                                    fontSize={"16px"}
                                    textAlign={"left"}
                                    fontWeight={500}
                                    color={"#131416"}
                                    margin={"5px 0"}
                                >
                                    {ingredient.name}
                                </Typography>
                            </Grid>
                        ))}
                    </Stack>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default CardInfo;
