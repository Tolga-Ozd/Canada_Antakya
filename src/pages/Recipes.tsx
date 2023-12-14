import { Avatar, Container, Grid, Typography } from "@mui/material";
import RecipeBanner from "../components/RecipeBanner";
import setBodyColor from "../utils/setBodyColor";
import RecipeCard from "../components/RecipeCard";
import recipeData from "../assets/data/recipes.json";
import Footer from "../components/Footer";


const Recipes = () => {

  setBodyColor({ color: "#F7F8FA" })

  const imageList: React.ReactElement[] = [];

  recipeData.slice(0,4).forEach((item) => (

    imageList.push(
    <Avatar
      key={item.id}
      alt={item.name}
      src={item.imageUrl}
      sx={{ width: { xs: "76px", sm: "100px", md: "160px", lg: "220px" }, height: { xs: "76px", sm: "100px", md: "160px", lg: "220px" } }}
    />)

  ))

  return (
    <>
      <RecipeBanner recipeBannerImages={imageList} recipeName="" />
      <Typography variant="h2" fontSize={{ xs: "24px", sm: "38px", md: "32px", lg: "40px" }} fontWeight={700} lineHeight={2} color={'#6C002D'} align="center" mt={3}>
        Our Picks
      </Typography>
      <Typography variant="subtitle1" fontSize={{ xs: "14px", sm: "14px", md: "15px", lg: "16px" }} fontWeight={500} lineHeight={1} color={'#828282'} align="center" >
        Delicious recipes we choose for you
      </Typography>

      <Container maxWidth="lg" >
        <Grid item container spacing={2} mt={5} mb={10}>
          {recipeData.map((item) => (
            <RecipeCard key={item.id} recipeItem={item} />
          ))}
        </Grid>
      </Container>

      <Footer textColor={'#7B1942'} footerImage={'/Footer.png'} />
    </>
  )
}

export default Recipes