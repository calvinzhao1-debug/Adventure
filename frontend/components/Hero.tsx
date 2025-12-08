"use client";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import visuallyHidden from '@mui/utils/visuallyHidden';
import { styled } from '@mui/material/styles';

const StyledBox = styled('div')(({ theme }) => ({
  alignSelf: 'center',
  width: '100%',
  height: 400,
  marginTop: theme.spacing(8),
  borderRadius: (theme.vars || theme).shape.borderRadius,
  outline: '6px solid',
  outlineColor: 'hsla(220, 25%, 80%, 0.2)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.grey[200],
  boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
  backgroundImage: `url(${process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/screenshots/material-ui/getting-started/templates/dashboard.jpg)`,
  backgroundSize: 'cover',
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(10),
    height: 700,
  },
  ...theme.applyStyles('dark', {
    boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
    backgroundImage: `url(${process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/screenshots/material-ui/getting-started/templates/dashboard-dark.jpg)`,
    outlineColor: 'hsla(220, 20%, 42%, 0.1)',
    borderColor: (theme.vars || theme).palette.grey[700],
  }),
}));

// Add a prop for the hero image
export default function Hero({ imageUrl }: { imageUrl: string }) {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100vw',
        mx: 'calc(50% - 50vw)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '100% auto',
        minHeight: { xs: 400, sm: 700 },

        backgroundImage:
          `linear-gradient(rgba(255,255,255,0.06), rgba(255,255,255,0.02)), radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent), url(${imageUrl})`,
        ...theme.applyStyles('dark', {
          backgroundImage:
            `linear-gradient(rgba(0,0,0,0.28), rgba(0,0,0,0.18)), radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent), url(${imageUrl})`,
        }),
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
        >
          <Box
            sx={(theme) => ({
              display: 'inline-block',
              px: { xs: 2, sm: 3 },
              py: { xs: 1, sm: 1.5 },
              borderRadius: 2,
              backgroundColor: 'rgba(255,255,255,0.64)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
              boxShadow: '0 6px 18px rgba(0,0,0,0.12)',
              ...theme.applyStyles('dark', {
                backgroundColor: 'rgba(0,0,0,0.44)',
                boxShadow: '0 6px 18px rgba(0,0,0,0.36)',
              }),
            })}
          >
            <Typography
              variant="h1"
              sx={(theme) => ({
                textAlign: 'center',
                fontWeight: 900,
                fontSize: 'clamp(2.5rem, 8vw, 4rem)',
                letterSpacing: '0.02em',
                color: (theme.vars || theme).palette.text.primary,
                ...theme.applyStyles('dark', {
                  color: '#ffffff',
                }),
              })}
            >
              UNSW Adventure Society
            </Typography>
          </Box>
        </Stack>
        {/* <StyledBox id="image" /> */}
      </Container>
    </Box>
  );
}
