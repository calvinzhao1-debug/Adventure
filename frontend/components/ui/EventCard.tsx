import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  description: string;
  image?: string;
  tag: string;
}

export default function EventCard({
  title,
  date,
  location,
  description,
  image = "/adsoc-bouldering.jpg",
  tag,
}: EventCardProps) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', bgcolor: 'grey.900', border: '1px solid', borderColor: 'grey.800' }}>
      <CardActionArea sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '100%' }}>
        <Box sx={{ position: 'relative', width: '100%' }}>
          <CardMedia
            component="img"
            height="200"
            image={image}
            alt={title}
          />
          <Chip 
            label={tag} 
            size="small" 
            color="info" 
            sx={{ position: 'absolute', top: 12, left: 12, backdropFilter: 'blur(4px)' }} 
          />
        </Box>
        <CardContent sx={{ flexGrow: 1, width: '100%' }}>
          <Stack direction="row" spacing={2} sx={{ mb: 2, color: 'info.main', fontSize: '0.875rem' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <CalendarTodayIcon fontSize="inherit" /> {date}
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <LocationOnIcon fontSize="inherit" /> {location}
            </Box>
          </Stack>
          <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white', fontWeight: 'bold' }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'grey.400' }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}