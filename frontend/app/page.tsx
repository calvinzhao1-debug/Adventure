import Hero from "@/components/Hero";
import LinkButton from "@/components/ui/LinkButton"; // Import the new component
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Home() {
  return (
    <Box sx={{ bgcolor: 'black', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* 1. Hero Section */}
      <Hero 
        imageUrl="/Ski_trip_banner.jpg"
        title="UNSW Adventure Society"
        subtitle="Exploration • Camaraderie • The Great Outdoors"
      />

      {/* 2. Main Content Section */}
      <Container maxWidth="md" sx={{ py: { xs: 8, md: 12 }, textAlign: 'center' }}>
        <Stack spacing={4} alignItems="center">
          
          {/* Welcome Badge */}
          <Chip 
            label="Welcome to Term 1, 2025 🚀" 
            variant="outlined" 
            color="info" 
            sx={{ 
              borderColor: 'rgba(56, 189, 248, 0.3)', 
              color: '#38bdf8',
              bgcolor: 'rgba(56, 189, 248, 0.1)',
              fontWeight: 500,
              px: 1
            }} 
          />

          {/* Main Headline */}
          <Typography variant="h2" component="h1" sx={{ fontWeight: 800, color: 'white', letterSpacing: '-0.02em' }}>
            Unlocking your next <br />
            <Box component="span" sx={{ 
              background: 'linear-gradient(90deg, #38bdf8, #22d3ee)', 
              backgroundClip: 'text', 
              textFillColor: 'transparent', 
              color: 'transparent' // Fallback
            }}>
              Great Adventure
            </Box>
          </Typography>
          
          {/* Subtext */}
          <Typography variant="h6" sx={{ color: 'grey.400', maxWidth: 'sm', lineHeight: 1.6 }}>
            We are the UNSW Adventure Society. We bridge the gap between campus life and the wilderness through hiking, camping, and climbing events.
          </Typography>

          {/* Action Buttons - Updated to use LinkButton */}
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 2 }}>
            <LinkButton 
              href="/membership" 
              variant="contained" 
              size="large"
              color="inherit"
              sx={{ 
                bgcolor: 'white', 
                color: 'black', 
                fontWeight: 'bold', 
                px: 4, 
                py: 1.5,
                borderRadius: 50,
                '&:hover': { bgcolor: 'grey.200' }
              }}
            >
              Become a Member
            </LinkButton>
            
            <LinkButton 
              href="/events" 
              variant="outlined" 
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{ 
                color: 'white', 
                borderColor: 'grey.700', 
                px: 4, 
                py: 1.5,
                borderRadius: 50,
                '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.05)' }
              }}
            >
              View Upcoming Events
            </LinkButton>
          </Stack>

        </Stack>
      </Container>
    </Box>
  );
}