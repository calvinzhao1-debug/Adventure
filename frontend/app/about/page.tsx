import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function AboutPage() {
  const stats = [
    { label: "Members", value: "500+" },
    { label: "Events per Year", value: "40+" },
    { label: "Mountains Climbed", value: "12" },
    { label: "Years Active", value: "15" },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'white' }}>
          About <Box component="span" sx={{ color: 'info.main' }}>ADSOC</Box>
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          We are the University of New South Wales Adventure Society.
        </Typography>
      </Box>

      {/* Mission Section */}
      <Grid container spacing={6} alignItems="center" sx={{ mb: 10 }}>
        {/* Changed 'item xs={12}' to 'size={{ xs: 12 }}' */}
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
            {/* Placeholder for Mission Image */}
            [Mission Image Placeholder]
          </Box>
        </Grid>
      </Grid>

      {/* Stats Grid */}
      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          // Updated stats grid items
          <Grid size={{ xs: 6, md: 3 }} key={index}>
            <Card sx={{ bgcolor: 'transparent', border: '1px solid', borderColor: 'grey.800', textAlign: 'center' }}>
              <CardContent>
                <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'info.main', mb: 1 }}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" sx={{ color: 'grey.500', textTransform: 'uppercase', letterSpacing: 1 }}>
                  {stat.label}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}