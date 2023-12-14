import { ArrowCircleRightOutlined } from "@mui/icons-material"
import { Button, Stack } from "@mui/material"
import  Logo from '../assets/images/antakya-logo.svg';
import {  useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
  return (
    <Stack
                maxWidth={{ xs: "xs", sm: "sm", md: "md", lg: "lg" }}
                direction="row"
                justifyContent="space-between"
                alignItems="flex-end"
                width="100%"
                position="absolute"
                top="0"
                left="0" 
                right="0"
                margin= "0 auto"
                height={{ xs: "48px", sm: "54px", md: "60px", lg: "80px" }}
                spacing={2}
                zIndex={999}
            >
                <img src={Logo} height='40' onClick={()=> navigate('/')} style={{cursor:'pointer'}}/>
                <Button variant="text" sx={{ color: '#FFFFFF', fontSize: '16px', fontWeight: '400', textTransform: 'none' }}  >
                    <span style={{ paddingRight: '8px' }} >Contact Us</span> <ArrowCircleRightOutlined sx={{ color: '#FFFFFF', width: '24px', height: '24px' }} />
                </Button>

            </Stack>
  )
}

export default Header