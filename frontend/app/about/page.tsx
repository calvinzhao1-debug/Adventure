import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'; 
import PageHeader from '@/components/ui/PageHeader';
import StatCard from '@/components/ui/StatCard';
import Hero from '@/components/Hero';

export default function AboutPage() {
  const stats = [
    { label: "Members", value: "500+" },
    { label: "Events per Year", value: "40+" },
    { label: "Mountains Climbed", value: "12" },
    { label: "Years Active", value: "15" },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 0 }}>
      <Hero 
        imageUrl="/adsoc-bouldering.jpg"
        title="UNSW Adventure Society"
        subtitle="Exploration • Camaraderie • The Great Outdoors"
      />
      <PageHeader 
        title={<>About <Box component="span" sx={{ color: 'info.main' }}>ADSOC</Box></>}
        subtitle="We are the University of New South Wales Adventure Society."
      />

      {/* Mission Section */}
      <Grid container spacing={6} alignItems="center" sx={{ mb: 10 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ borderLeft: 4, borderColor: 'info.main', pl: 3 }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'white' }}>
              Our Mission
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ color: 'grey.400', fontSize: '1.1rem', lineHeight: 1.8 }}>
            ADSOC is dedicated to bringing students together through shared experiences in nature.
            From hiking and bouldering to camping and kayaking, we aim to make outdoor adventures
            accessible to everyone, regardless of experience level. We believe that the best
            stories are written off the beaten path.
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              height: 350,
              width: '100%',
              bgcolor: 'grey.900',
              borderRadius: 4,
              border: '1px solid',
              borderColor: 'grey.800',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'grey.600'
            }}
          >
            [Mission Image Placeholder]
          </Box>
        </Grid>
      </Grid>

      {/* Stats Grid */}
      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          <Grid size={{ xs: 6, md: 3 }} key={index}>
            <StatCard value={stat.value} label={stat.label} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}