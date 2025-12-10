"use client";

import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Link from 'next/link';
// import { NextLinkComposed } from '../src/Link';

// import ColorModeIconDropdown from '.././theme/ColorModeIconDropdown';
// import Sitemark from './SitemarkIcon';
// import AdsocLogo from '../public/logo-black.svg';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 0px)`,
  backdropFilter: 'blur(24px)',
  border: '0px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
  minHeight: 72,
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={(theme) => ({
        boxShadow: 0,
        bgcolor: (theme.vars || theme).palette.primary.main,
        color: (theme.vars || theme).palette.primary.contrastText,
        backgroundImage: 'none',
        mt: 0,
      })}
    >
      {/* <Container maxWidth="lg"> */}
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
              {/* <Sitemark /> */}
              <Link href="/">
                <img src="/logo-white.svg" alt="Adsoc Logo" width={200} height={60} style={{ marginLeft: 8 }} />
              </Link>
            {/* <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              
            </Box> */}
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 2,
              alignItems: 'center',
            }}
          >            
            <Button component={Link} href="/events" variant="text" color="info" size="large" sx={{ px: 2, py: 0, fontWeight: 700, color: '#ffffff' }}>
              Events
            </Button>
            <Button component={Link} href="/about" variant="text" color="info" size="large" sx={{ px: 2, py: 0, fontWeight: 700, color: '#ffffff' }}>
              About
            </Button>
            <Button component={Link} href="/team" variant="text" color="info" size="large" sx={{ px: 2, py: 0, fontWeight: 700, color: '#ffffff' }}>
              Team
            </Button>
            <Button component={Link} href="/membership" variant="text" color="info" size="large" sx={{ px: 2, py: 0, fontWeight: 700, color: '#ffffff' }}>
              Membership
            </Button>
            <Button component={Link} href="/sponsors" variant="text" color="info" size="large" sx={{ px: 2, py: 0, minWidth: 0, fontWeight: 700, color: '#ffffff' }}>
              Sponsors
            </Button>
            {/* <Button color="primary" variant="text" size="small">
              Sign in
            </Button>
            <Button color="primary" variant="contained" size="small">
              Sign up
            </Button> */}
            {/* <ColorModeIconDropdown /> */}
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            {/* <ColorModeIconDropdown size="medium" /> */}
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <MenuItem>About</MenuItem>
                <MenuItem>Events</MenuItem>
                <MenuItem>Sponsors</MenuItem>
                <MenuItem>Membership</MenuItem>
                <MenuItem>Contact us</MenuItem>
                <Divider sx={{ my: 3 }} />
                {/* <MenuItem>
                  <Button color="primary" variant="contained" fullWidth sx={{ fontWeight: 700, color: '#ffffff' }}>
                    Sign up
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button color="primary" variant="outlined" fullWidth>
                    Sign in
                  </Button>
                </MenuItem> */}
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      {/* </Container> */}
    </AppBar>
  );
}
