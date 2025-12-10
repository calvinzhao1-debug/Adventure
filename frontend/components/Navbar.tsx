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

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 0px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  // Modern Light Blue Border with low opacity
  borderColor: alpha('#38bdf8', 0.3), 
  // Modern Light Blue Background (Sky 500) with transparency for glass effect
  backgroundColor: alpha('#0ea5e9', 0.15), 
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: alpha('#0ea5e9', 0.25),
    borderColor: alpha('#38bdf8', 0.5),
  }
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
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
              <Link href="/">
                <img src="/logo-white.svg" alt="Adsoc Logo" width={120} height={40} style={{ marginLeft: 8 }} />
              </Link>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
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
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
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
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
    </AppBar>
  );
}
