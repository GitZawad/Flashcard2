'use client'
import Image from "next/image";
import getStripe from "@/utils/get-Stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AppBar, Button, Container, Toolbar, Typography, Box, Grid } from "@mui/material";
import { POST } from "./api/checkout_session/route";

export default function Home() {
  const handleSubmit = async() => {
    const checkoutSession = await fetch('/api/checkout_sessions', {
      method: 'POST',
      headers: {
        origin: 'http://localhost:3000',//need to change it after deploying the app
      },
    })
    const checkoutSessionJson = await checkoutSession.json()

    if(checkoutSession.statusCode === 500){
      console.error(checkoutSession.message)
      return
    }

    const stripe = await getStripe()
    const {error} = await stripe.redirectToCheckout({
      sessionId: checkoutSessionJson.id,
    })

    if(error){
      console.warn(error.message)
    }
    }
  
  return(
    <Box sx={{ width: "100%" }}>
        <head>
          <title>FlashCard Saas</title>
          <meta name ="description" content="Create a flashcard from your text" />
        </head>

        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{flexGrow: 1}}>FlashCard SaaS</Typography>
            <SignedOut>
              <Button color="inherit" href="/sign-in">Login</Button>
              <Button color="inherit" href="/sign-up">Sign Up</Button>
            </SignedOut>
            <SignedIn>
              <UserButton/>
            </SignedIn>
          </Toolbar>
        </AppBar>
        <Box sx={{
          textAlign: 'center',
          my: 4
        }}>
          <Typography variant="h2">Welcome to FlashCard SaaS</Typography>
          <Typography variant="h5">
            {' '}
            The easiest way to make flashcards from your text
            </Typography>
            <Button variant="contained" color="primary" sx={{mt: 2}} onClick={handleSubmit} gutterBottom>
              Get Started
              </Button> 
          
        </Box>
        <Box sx={{my: 6 ,  boxSizing: "border-box", px: 2 }}>
            <Typography variant="h4" components="h2">
              Features
            </Typography>
            <Grid container spacing = {4}>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom>Easy Text Input</Typography>
                <Typography gutterBottom>
                  {' '}
                  Simply Input your text and let our website handle the rest for you. The most easiest way to create flashcards.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom>Smart FlashCards</Typography>
                <Typography gutterBottom>
                  {' '}
                 Our AI intelligently breaks down your text into concise flashcards, perfect for studying.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom>Accessible Anywhere</Typography>
                <Typography gutterBottom>
                  {' '}
                  Access your flashcards anytime, anywhere around the world. Study on the go with ease.
                </Typography>
              </Grid>
            </Grid>
        </Box>

        <Box sx={{my: 6, textAlign: 'center',  boxSizing: "border-box", px: 2 }}>
        <Typography variant="h4" components="h2">
              Pricing
            </Typography>
            <Grid container spacing = {4} sx={{ display: 'flex', alignItems: 'stretch' }}>
              <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
                <Box sx={{
                  p: 3,
                  border: '1px solid',
                  borderColor: 'grey.300',
                  borderRadius: 2, 
                  flex: 1, // Ensures the box stretches to fill available height
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                <div>
                <Typography variant="h5" gutterBottom>Basic</Typography>
                <Typography variant="h6" gutterBottom>$5 / Month</Typography>
                
                <Typography gutterBottom>
                  {' '}
                  Access to the basic flashcard features and limited storage :
                </Typography>
                <ul style={{ textAlign: 'left', margin: 'auto', maxWidth: '600px', paddingLeft: '20px' }}>
                <li><Typography gutterBottom>
                  {' '}
                  Flashcard Creation: Create up to 200 flashcards per month.
                </Typography></li>
                <li><Typography gutterBottom>
                  {' '}
                  Text Input: Simple text input with basic formatting options like bold and italics.
                </Typography></li>
                <li><Typography gutterBottom>
                  {' '}
                  Deck Organization: Organize your flashcards into up to 10 decks.
                </Typography></li>
                <li><Typography gutterBottom>
                  {' '}
                  Review Modes: Access standard review modes, including flip cards and multiple-choice questions.
                </Typography></li>
                <li><Typography gutterBottom>
                  {' '}
                  Cloud Storage: Store your flashcards with up to 500 MB of cloud storage.
                </Typography></li>
                </ul>
                </div>
                <Button variant="contained" color="primary" sx={{mt: 2}}>Buy Now</Button>
                </Box>
              </Grid>
              <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
              <Box sx={{
                  p: 3,
                  border: '1px solid',
                  borderColor: 'grey.300',
                  borderRadius: 2, 
                  flex: 1, // Ensures the box stretches to fill available height
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                <div>
                <Typography variant="h5" gutterBottom>Premium</Typography>
                <Typography variant="h6" gutterBottom>$10 / Month</Typography>
                <Typography gutterBottom>
                  {' '}
                 Unlimited flashcards and storage, with priority support :
                </Typography>
                <ul style={{ textAlign: 'left', margin: 'auto', maxWidth: '600px', paddingLeft: '20px' }}>
                <li><Typography>
                  {' '}
                  Unlimited Flashcard Creation: Create unlimited flashcards each month.
                </Typography></li>
                <li><Typography>
                  {' '}
                  Advanced Text Input: Includes rich text formatting options, such as bold, italics, bullet points, and more.
                </Typography></li>
                <li><Typography>
                  {' '}
                  Enhanced Deck Organization: Organize your flashcards into unlimited decks with customizable tags.
                </Typography></li>
                <li><Typography>
                  {' '}
                  Advanced Review Modes: Access advanced review modes, including spaced repetition and timed quizzes.
                </Typography></li>
                <li><Typography>
                  {' '}
                  Increased Cloud Storage: Enjoy 2 GB of cloud storage for your flashcards.
                </Typography></li>
                <li><Typography>
                  {' '}
                  Multi-Device Sync: Sync your flashcards across unlimited devices, accessible from desktop, mobile, and tablet.
                </Typography></li>
                </ul>
                </div>
                <Button variant="contained" color="primary" sx={{mt: 2}} onClick={handleSubmit}>Buy Now</Button>
                </Box>
              </Grid>
              <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
              <Box sx={{
                  p: 3,
                  border: '1px solid',
                  borderColor: 'grey.300',
                  borderRadius: 2, 
                  flex: 1, // Ensures the box stretches to fill available height
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                <div>
                <Typography variant="h5" gutterBottom>Platinum</Typography>
                <Typography variant="h6" gutterBottom>$15 / Month</Typography>
                <Typography gutterBottom>
                  {' '}
                  Get access to the Platinum customer support as well as advanced features of both basic and premium :
                </Typography>
                <ul style={{ textAlign: 'left', margin: 'auto', maxWidth: '600px', paddingLeft: '20px' }}>
                
                <li><Typography gutterBottom>
                  {' '}
                  Unlimited Flashcard Creation: Create unlimited flashcards with no monthly limit.
                </Typography></li>
                <li><Typography gutterBottom>
                  {' '}
                  Full Text Editor: Access a full-featured text editor with rich formatting, images, and multimedia support.
                </Typography></li>
                <li><Typography gutterBottom>
                  {' '}
                  Ultimate Deck Organization: Organize your flashcards with unlimited decks, custom tags, and hierarchical folders.
                </Typography></li>
                <li><Typography gutterBottom>
                  {' '}
                  All Review Modes: Unlock all review modes, including AI-powered adaptive learning and collaborative study sessions.
                </Typography></li>
                <li><Typography gutterBottom>
                  {' '}
                  Unlimited Cloud Storage: Enjoy unlimited cloud storage for your flashcards and media.
                </Typography></li>
                <li><Typography gutterBottom>
                  {' '}
                  All-Device Sync: Sync and access your flashcards across all your devices, with seamless offline access.
                </Typography></li>
                </ul>
                </div>
                <Button variant="contained" color="primary" sx={{mt: 2}} onClick={handleSubmit}>Buy Now</Button>
                </Box>
              </Grid>
            </Grid>
        </Box>
        
      </Box>
  )
}

