import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import PageHeader from '@/components/ui/PageHeader';
import CallToAction from '@/components/ui/CallToAction';
import Hero from '@/components/Hero';

export default function SponsorsPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 10, minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Hero 
        imageUrl="/adsoc-bouldering.jpg"
        title="UNSW Adventure Society"
        subtitle="Exploration • Camaraderie • The Great Outdoors"
      />
      <PageHeader 
        title="Our Partners"
        subtitle="Proudly supported by organizations that help make our adventures safer, cheaper, and more accessible."
      />

      {/* Sponsors Grid */}
      <Grid container spacing={4} sx={{ mb: 10, width: '100%' }}>
        {[1, 2, 3, 4].map((i) => (
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

      <CallToAction 
        title="Interested in Sponsoring Us?"
        description="Connect with hundreds of adventurous students. We offer various sponsorship tiers including branding on merchandise and event partnerships."
        buttonText="Get in Touch"
        href="mailto:contact@adsoc.unsw.edu.au"
      />
    </Container>
  );
}