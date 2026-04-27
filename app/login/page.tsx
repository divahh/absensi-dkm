"use client";

import {
  Box,
  Typography,
  Button
} from "@mui/material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import Divider from '@mui/material/Divider';
import LandscapeIcon from '@mui/icons-material/Landscape';
import { useRouter } from "next/navigation";

export default function Login() {
  const MOBILE_WIDTH = 600;
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  return (
    <Box
      sx={{
        minHeight: "95vh",
        bgcolor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        px: 3, mx: "auto",
        width: { xs: '100%', md: `${MOBILE_WIDTH}px` }
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <Box
          sx={{
            width: 240,
            height: 120,
            bgcolor: "#dbeafe",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 2,
          }}
        >
          <LandscapeIcon sx={{ width: 64, height: 64, color: '#93c5fd' }} />
        </Box>
      </Box>

      <Typography 
        variant="h5"
        sx={{ fontWeight: "bold",  mb: 2}}
      >
        Welcome!
      </Typography>

      <TextField
        fullWidth
        placeholder="Email / Username / NIP"
        variant="outlined"
        sx={{ mb: 2, bgcolor: "white", borderRadius: 3 }}
      />

      <TextField
        fullWidth
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        variant="outlined"
        sx={{ mb: 1, bgcolor: "white", borderRadius: 3 }}
        slotProps={{
            input: {
            endAdornment: (
                <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
                </InputAdornment>
            ),
            },
        }}
      />

      <Typography
        sx={{
          color: "#1976d2",
          fontSize: 14,
          mb: 3,
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Forgot password?
      </Typography>

      <Button
        variant="contained"
        fullWidth
        sx={{
          py: 1.5,
          borderRadius: 3,
          textTransform: "none",
          fontWeight: "bold",
        }}
        onClick={() => router.push("./dashboard")}
      >
        Login
      </Button>

      <Divider orientation="horizontal" variant="middle" sx={{ borderColor: "grey.300", borderBottomWidth: 1, my: 3, }}/>
    </Box>
  );
}