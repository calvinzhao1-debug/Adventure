"use client";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface HeroProps {
  imageUrl: string;
  title?: string;
  subtitle?: string;
}

export default function Hero({ 
  imageUrl, 
  title = "UNSW Adventure Society", 
  subtitle = "Exploration • Camaraderie • The Great Outdoors" 
}: HeroProps) {
  return (
    <Box
      id="hero"
      sx={{
        // Force full viewport width and break out of parent containers
        width: '100vw',
        marginLeft: 'calc(50% - 50vw)',
        marginRight: 'calc(50% - 50vw)',
        overflow: 'hidden', // Prevents horizontal scrollbars
        
        minHeight: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        // Low tint (0.3) for better image visibility
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("${imageUrl}")`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4} alignItems="center">
          <Box
            // sx={{
            //   px: { xs: 3, md: 6 },
            //   py: { xs: 2, md: 4 },
            //   borderRadius: 4,
            //   backgroundColor: 'rgba(0, 0, 0, 0.1)', // Slightly more transparent box
            //   backdropFilter: 'blur(8px)',
            //   border: '1px solid rgba(255, 255, 255, 0.15)',
            //   boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            // }}
          >
            <Typography
              variant="h1"
              sx={{
                textAlign: 'center',
                fontWeight: 900,
                fontSize: { xs: '3rem', md: '5.5rem' }, // Increased font size slightly for full screen
                color: 'white',
                letterSpacing: '-0.02em',
                textShadow: '0 4px 20px rgba(0,0,0,0.5)',
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="h5"
              component="p"
              sx={{
                textAlign: 'center',
                color: 'rgba(255,255,255,0.95)',
                mt: 2,
                fontWeight: 500,
                textShadow: '0 2px 10px rgba(0,0,0,0.5)',
              }}
            >
              {subtitle}
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}