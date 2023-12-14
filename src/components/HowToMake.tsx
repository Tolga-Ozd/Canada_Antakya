import { CardMedia, Grid, Typography } from '@mui/material'

type Ingredient = {
    imageUrl: string;
    name: string;
};
type HowToMake = {
    imageUrl: string;
    title: string;
    step:Step[];
};
type Step ={
    description:string;
}

type HowToMakeProps = {
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
        howToMake?: HowToMake[];
    };
};

const HowToMake = ({ recipeItem }: HowToMakeProps) => {
  return (
    <Grid container direction="column" spacing={2}>
    <Grid item xs={12}>
        <Typography gutterBottom variant="h5" component="div" sx={{ display: "flex", fontSize: "20px", color: "#770A33", fontWeight: 600, margin: "40px 5px 0px 10px" }}>
        How to make {recipeItem.name}
        </Typography>
    </Grid>

    <Grid container direction="column" spacing={8} item xs={12} sm={10} md={8} lg={6}> 
    {recipeItem?.howToMake?.map((step, index) => (
        <Grid item key={index} margin={"10px 0 20px 0"} 
        sx={{ margin: { xs: "-10px 0 -20px 0", sm: "-10px 0 -20px 0", md: "0px 0 -20px 0", lg: "10px 0 30px 0" }}}
        >
            <Grid container alignItems="center" >
                <Grid item>
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: "16px", width: "30px", height: "30px", margin: "5px", backgroundColor: "#770A33", display: "flex", color: "white", justifyContent: "center", alignItems: "center", borderRadius: "50%", fontWeight: 400 }}>
                        {index + 1}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: "16px", color: "#770A33", fontWeight: 600 ,marginTop:"6px" }}>
                        {step.title}
                    </Typography>
                </Grid>
            </Grid>
            <Typography sx={{ fontSize: "16px", color: "black", fontWeight: "400", lineHeight: "1.5", margin: "5px 10px 10px 15px" }}>
                    {step?.step?.map((description, idx) => (
                        <Typography key={idx} textAlign={"left"} sx={{ display: "flex", alignItems: "flex-start" }}>
                            <Typography component="span" sx={{ marginRight: "5px" }}>
                                &bull;
                            </Typography>
                            <Typography component="span">
                                {description.description}
                            </Typography>
                        </Typography>
                    ))}
            </Typography>

            <CardMedia component="img" src={step.imageUrl} sx={{ width: "100%", borderRadius: "10px" }} />
        </Grid>
    ))}
</Grid>

</Grid>
  )
}

export default HowToMake



