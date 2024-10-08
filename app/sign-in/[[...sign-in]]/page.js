import { SignIn } from "@clerk/nextjs";
import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

export default function SignUpPage(){
    return <Box sx={{maxWidth: "100%"}}>
        <AppBar position="static" >
            <Toolbar>
                <Typography variant="h6" sx={{flexGrow: 1,}}>
                    FlashCard SaaS
                </Typography>
                <Button color="inherit">
                    <Link href="/sign-in" passHref>Login</Link>
                </Button>
                <Button color="inherit">
                    <Link href="/sign-up" passHref>Sign Up</Link>
                </Button>
            </Toolbar>
        </AppBar>
        <Box display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center">

        <Typography variant="h4" gutterBottom>Sign In</Typography>
        <SignIn/>

        </Box>
    </Box>
}