import { CardMedia, Divider, Stack, Typography } from '@mui/material'

type FooterProps = {
    textColor?: string,
    footerImage?:string
}

const Footer = (props: FooterProps) => {
    return (
        <>
            <Stack
                sx={{ margin: { xs: "20px 0 30px 0", sm: "20px 0 30px 0", md: "70px 0 40px 0", lg: "80px 0 30px 0" } }}
                direction="column"
                justifyContent="center"
                alignItems=""
                // margin={"80px"}
                spacing={2}
                pt={1.5}
            >

                <Stack
                    justifyContent="center"
                    alignItems="center">
                    <CardMedia component="img"
                        alt={"antakya.ca"}
                        src={props.footerImage}
                        sx={{ width: "90px", height: "32px", }}
                    >
                    </CardMedia>
                </Stack>

                <Stack direction="row"
                    justifyContent="center"
                    alignItems="center">
                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={1}
                        marginRight={2}
                    >
                        <CardMedia component="img"
                            alt={""}
                            src={"/call-calling.png"}
                            sx={{ width: "22px", height: "22px", }}
                        >
                        </CardMedia>
                        {/* <PhoneInTalkOutlined sx={{ color: '#CC7097' }} /> */}
                        <Typography variant="body1" fontSize={{ xs: "14px", sm: "14px", md: "15px", lg: "16px" }} fontWeight={400} lineHeight={'24px'} color={props.textColor} align="left" >
                            +1 (437) 979-1000
                        </Typography>
                    </Stack>
                    <Divider orientation='vertical' variant='middle' sx={{ height: '20px', borderWidth: '1px', borderColor: props.textColor }} />
                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={1}
                        marginLeft={2}
                    >
                        {/* <MailOutlineOutlined sx={{ color: '#CC7097' }} /> */}
                        <CardMedia component="img"
                            alt={""}
                            src={"/sms.png"}
                            sx={{ width: "22px", height: "22px", }}
                        >
                        </CardMedia>
                        <Typography variant="body1" fontSize={{ xs: "14px", sm: "14px", md: "15px", lg: "16px" }} fontWeight={400} lineHeight={'24px'} color={props.textColor} align="left" >
                            info@antakya.ca
                        </Typography>
                    </Stack>
                </Stack>

                <Stack direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}>
                    <Typography variant="body1" fontSize={{ xs: "14px", sm: "14px", md: "15px", lg: "16px" }} fontWeight={400} lineHeight={'24px'} color={props.textColor} align="center" >
                        © 2024
                    </Typography>

                    <Divider
                        orientation="horizontal"
                        variant="middle"
                        sx={{ height: '1px', width: '10px', borderColor: props.textColor }}
                    />

                    <Typography variant="body1" fontSize={{ xs: "14px", sm: "14px", md: "15px", lg: "16px" }} fontWeight={400} lineHeight={'24px'} color={props.textColor} align="center" >
                        Antakya.ca
                    </Typography>

                </Stack>

            </Stack>
        </>
    )
}

export default Footer