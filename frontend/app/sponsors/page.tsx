import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function SponsorsPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 10, minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ textAlign: 'center', mb: 8, maxWidth: 'sm' }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Our Partners
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Proudly supported by organizations that help make our adventures safer, cheaper, and more accessible.
        </Typography>
      </Box>

      {/* Sponsors Grid */}
      <Grid container spacing={4} sx={{ mb: 10, width: '100%' }}>
        {[1, 2, 3, 4].map((i) => (
          // Fixed: Removed 'item' prop and used 'size' prop for Grid2
          <Grid size={{ xs: 6, md: 3 }} key={i}>
            <Box
              sx={{
                aspectRatio: '3/2',
                bgcolor: 'rgba(255,255,255,0.05)',
                border: '1px solid',
                borderColor: 'grey.800',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s',
                '&:hover': {
                  borderColor: 'info.main',
                  bgcolor: 'rgba(255,255,255,0.1)',
                }
              }}
            >
              <Typography variant="button" color="text.secondary">LOGO {i}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Call to Action */}
      <Box
        sx={{
          width: '100%',
          maxWidth: 'md',
          background: 'linear-gradient(45deg, rgba(13,71,161,0.2), rgba(81,45,168,0.2))',
          border: '1px solid',
          borderColor: 'rgba(66,165,245,0.3)',
          borderRadius: 4,
          p: { xs: 4, md: 6 },
          textAlign: 'center'
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'white' }}>
          Interested in Sponsoring Us?
        </Typography>
        <Typography variant="body1" sx={{ color: 'grey.300', mb: 4, maxWidth: 'sm', mx: 'auto' }}>
          Connect with hundreds of adventurous students. We offer various sponsorship tiers including branding on merchandise and event partnerships.
        </Typography>
        <Button 
          variant="contained" 
          color="inherit" 
          size="large"
          href="mailto:contact@adsoc.unsw.edu.au"
          sx={{ color: 'black', fontWeight: 'bold', borderRadius: 50, px: 4 }}
        >
          Get in Touch
        </Button>
      </Box>
    </Container>
  );
}