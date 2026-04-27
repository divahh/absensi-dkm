"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ExploreIcon from '@mui/icons-material/Explore';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { usePathname } from "next/navigation"
import Link from "next/link";
import Paper from '@mui/material/Paper';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
    const MOBILE_WIDTH = 600;
    const pathname = usePathname();
    const getValue = () => {
        if (pathname === "/dashboard") return 0;
        if (pathname === "/dashboard/feature") return 1;
        if (pathname === "/dashboard/profile") return 2;
        return 0;
    }

    return (
        <Box 
            sx={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <AppBar position="fixed" sx={{ 
                bgcolor: "white", color: "black", boxShadow: "none",
                left: '48%', transform: 'translateX(-50%)', width: { xs: '100%', md: `${MOBILE_WIDTH}px` }
            }}>
                <Toolbar variant="regular">
                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', ml:1, mt:1 }}>
                    Nama Perusahaan
                    </Typography>
                </Toolbar>
            </AppBar>

            <Box sx={{ 
                flexGrow: 1, 
                pt: 'calc(56px + env(safe-area-inset-top))',
                pb: 'calc(56px + env(safe-area-inset-bottom))',
                maxWidth: { md: `${MOBILE_WIDTH}px` },
                mx: 'auto',
                width: '100%',
            }}>
                { children }
            </Box>
            
            <Paper sx={{ 
                position: 'fixed', bottom: 0, right: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: { xs: '100%', md: `${MOBILE_WIDTH}px` }, 
            }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={getValue()}
                >
                    <BottomNavigationAction
                        component={Link}
                        href="/dashboard"
                        label="Beranda"
                        icon={<ExploreIcon />}
                    />
                    <BottomNavigationAction
                        component={Link}
                        href="/dashboard/feature"
                        label="Fitur"
                        icon={<EmailIcon />}
                    />
                    <BottomNavigationAction
                        component={Link}
                        href="/dashboard/profile"
                        label="Profil"
                        icon={<PersonIcon />}
                    />
                </BottomNavigation>
            </Paper>
        </Box>
    );
}
