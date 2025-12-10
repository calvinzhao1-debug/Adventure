import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface PageHeaderProps {
  title: React.ReactNode;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <Box sx={{ textAlign: 'center', mb: 8 }}>
      <Typography 
        variant="h2" 
        component="h1" 
        gutterBottom 
        sx={{ fontWeight: 'bold', color: 'white' }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography 
          variant="h5" 
          color="text.secondary" 
          sx={{ maxWidth: 600, mx: 'auto' }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}