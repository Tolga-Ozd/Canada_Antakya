import Info from "../components/Info";
import { Avatar, Container} from "@mui/material";
import RecipeBanner from "../components/RecipeBanner";
import setBodyColor from "../utils/setBodyColor";
import recipeData from "../assets/data/recipes.json";
import { useParams } from "react-router-dom";
import CardInfo from "../components/CardInfo";
import HowToMake from "../components/HowToMake";
import Footer from "../components/Footer";


const Recipe_Detail = () => {
  const params = useParams()

  setBodyColor({ color: "#F7F8FA" })
  const imageList: React.ReactElement[] = [];
 
const recipeItem = recipeData.find((item)=>item.slug == params.slug)

if (!recipeItem) {
  return <div>The requested recipe was not found.</div>;
}

imageList.push(
  <Avatar
    key={recipeItem?.id}
    alt={recipeItem?.name}
    src={recipeItem?.imageUrl}
    sx={{ width: { xs: "76px", sm: "100px", md: "160px", lg: "220px" }, height: { xs: "76px", sm: "100px", md: "160px", lg: "220px" } }}
/>)

  return (
    
    <>
    <RecipeBanner recipeBannerImages={imageList}  recipeName= {recipeItem?.name} />
    <Info 
    name={recipeItem?.name} 
    prep={recipeItem?.prep}  
    total={recipeItem?.total}  
    cook={recipeItem?.cook} 
    serving={recipeItem?.serves}  />

    <Container maxWidth="lg" >
        <CardInfo recipeItem={recipeItem} />
    </Container>

    <Container maxWidth="lg" >
        <HowToMake  recipeItem={recipeItem} />
    </Container>
    
    <Footer textColor={'#7B1942'} footerImage={'/Footer.png'} />

    </>

  )
}

export default Recipe_Detail