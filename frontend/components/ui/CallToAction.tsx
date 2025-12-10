import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

export default function CallToAction({ title, description, buttonText, href }: CallToActionProps) {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 'md',
        background: 'linear-gradient(45deg, rgba(13,71,161,0.2), rgba(81,45,168,0.2))',
        border: '1px solid',
        borderColor: 'rgba(66,165,245,0.3)',
        borderRadius: 4,
        p: { xs: 4, md: 6 },
        textAlign: 'center',
        mx: 'auto'
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'white' }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ color: 'grey.300', mb: 4, maxWidth: 'sm', mx: 'auto' }}>
        {description}
      </Typography>
      <Button 
        variant="contained" 
        color="inherit" 
        size="large"
        href={href}
        sx={{ color: 'black', fontWeight: 'bold', borderRadius: 50, px: 4 }}
      >
        {buttonText}
      </Button>
    </Box>
  );
}