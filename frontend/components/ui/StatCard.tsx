import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <Card 
      sx={{ 
        bgcolor: 'transparent', 
        border: '1px solid', 
        borderColor: 'grey.800', 
        textAlign: 'center',
        height: '100%',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          borderColor: 'info.main',
        }
      }}
    >
      <CardContent>
        <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'info.main', mb: 1 }}>
          {value}
        </Typography>
        <Typography variant="body2" sx={{ color: 'grey.500', textTransform: 'uppercase', letterSpacing: 1 }}>
          {label}
        </Typography>
      </CardContent>
    </Card>
  );
}