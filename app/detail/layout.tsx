"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useRouter } from "next/navigation";
import Paper from '@mui/material/Paper';

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const MOBILE_WIDTH = 600;
    const  router = useRouter();

    return (
        <Box>
            <Paper sx={{ 
                position: 'fixed', top: 0, right: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: { xs: '100%', md: `${MOBILE_WIDTH}px` }
            }} elevation={3}>
                <AppBar sx={{ bgcolor: "white", color: "black", boxShadow: "none" }}>
                    <Toolbar variant="regular" sx={{ position: 'relative', mt: 0.5 }}>
                        <IconButton edge="start" color="inherit" aria-label="back" onClick={() => router.back()} sx={{ position: 'absolute', left:20 }}>
                            <ArrowBackIosIcon sx={{ color: 'primary.main' }}/>
                        </IconButton>
                        <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', flex:1, textAlign: 'center' }}>
                            Lihat Langsung
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Paper>

            <Box sx={{ 
                flexGrow: 1, 
                pt: 'calc(40px + env(safe-area-inset-top))',
                maxWidth: { md: `${MOBILE_WIDTH}px` },
                mx: 'auto',
                width: '100%',
            }}>
                { children }
            </Box>
        </Box>
    )
}