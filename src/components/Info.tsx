import {  CardMedia, Container, Grid, Typography } from "@mui/material"

type Info = {
   name?:string, prep?:string, total?:string, cook?:string,serving?:string,
}


const Info = (props:Info) => {
  
  return (
    <>
    
    <Container sx={{backgroundColor:"#f7f8fa"}}>
        
        <Grid container sx={{display:"flex", justifyContent:"center",alignItems:"center" ,padding:"10px"}}>
            <Grid container sx={{display:"flex", justifyContent:"center",padding:"10px" ,maxWidth:"564px",alignItems:"center"}}>
                <Grid item  xs={6} sm={3} md={3} lg={3}  sx={{display:"flex",justifyContent:"center",width: "80px",alignItems:"center",flexDirection:"column" ,padding:"10px"}}>
                    <CardMedia  component="img"
                            alt={""}
                            src={"/Frame 38.png"}
                            sx={{ width: "40px", height: "64px",}}
                            >
                    </CardMedia>
                    <hr style={{width:"35px",backgroundColor: "#770A33" ,height:"1px",margin:"5px 15px"}} />
                    <Typography sx={{color:"#770A33",
                                    fontSize: "16px",
                                    fontWeight: "700",
                                    height: "24px",
                                    
                                    }}>
                        {props.prep}
                    </Typography>
                </Grid>
                <Grid item  xs={6} sm={3} md={3} lg={3} sx={{display:"flex",justifyContent:"center",width: "80px" ,alignItems:"center",flexDirection:"column"}}>
                    <CardMedia  component="img"
                            alt={""}
                            src={"/Frame 38 (1).png"}
                            sx={{ width: "40px", height: "64px"}}
                            >
                    </CardMedia>
                    <hr style={{width:"35px",backgroundColor: "#770A33" ,height:"1px",margin:"5px 3px"}} />
                    <Typography sx={{color:"#770A33",
                                    fontSize: "16px",
                                    fontWeight: 700,
                                    height: "24px",
                                
                                    
                                    }}>
                        {props.cook}
                    </Typography>
                </Grid>
                <Grid item  xs={6} sm={3} md={3} lg={3} sx={{display:"flex",justifyContent:"center",width: "80px" ,alignItems:"center",flexDirection:"column"}}>
                    <CardMedia  component="img"
                            alt={""}
                            src={"/Frame 38 (2).png"}
                            sx={{ width: "40px", height: "64px"}}
                            >
                    </CardMedia>
                    <hr style={{width:"35px",backgroundColor: "#770A33" ,height:"1px",margin:"5px 3px"}} />
                    <Typography sx={{color:"#770A33",
                                    fontSize: "16px",
                                    fontWeight: "700",
                                    height: "24px",
                                
                                    }}>
                         {props.total} 
                    </Typography>
                </Grid>
                <Grid item  xs={6} sm={3} md={3} lg={3}  sx={{display:"flex",justifyContent:"center",width: "200px" ,alignItems:"center",flexDirection:"column"}}>
                    <CardMedia  component="img"
                            alt={""}
                            src={"/Frame 38 (3).png"}
                            sx={{ width: "66px", height: "64px"}}
                            >
                    </CardMedia>
                    <hr style={{width:"35px",backgroundColor: "#770A33" ,height:"1px",margin:"5px 15px"}} />
                    <Typography sx={{color:"#770A33",
                                    fontSize: "16px",
                                    fontWeight: 700,
                                    height: "24px",
                                    }}>
                       {props.serving} to 6 servings
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    
      

    </Container>
    </>
  
  )
}

export default Info