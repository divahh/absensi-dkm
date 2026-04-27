"use client";

import {
  Box,
  Typography,
  Button,
  Stack
} from "@mui/material";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("../ui/dashboard/LeafletMap"), { ssr: false });

export default function DetailDashboard() {
    const router = useRouter();
    const [showNote, setShowNote] = useState(false);
    const [position, setPosition] = useState<[number, number] | null>(null);
    const [locationStatus, setLocationStatus] = useState<"loading" | "granted" | "denied">("loading");

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setPosition([pos.coords.latitude, pos.coords.longitude]);
                setLocationStatus("granted");
            },
            (error) => {
                console.error("Gagal mendapatkan lokasi: ", error);
                setLocationStatus("denied");

                // setPosition([-6.9932, 110.4203]); // Lokasi default di Semarang
            },
            
            {
                enableHighAccuracy: true, // akurasi tinggi gps
                timeout: 10000, // waktu tunggu 10 detik
                maximumAge: 0, // lokasi fresh
            }
        )
    }, []);

    return (
        <Stack spacing={4} sx={{ py:4 }}>
            <Box>
                <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: 'center' }}>Lucas Scott</Typography>
                <Typography sx={{ textAlign: 'center' }}>Jabatan</Typography>
            </Box>

            <Box
                sx={{
                    width: '100%',
                    height: 300,
                    overflow: 'hidden',
                    border: 1,
                    borderColor: 'grey.300',
                }}
            >
                {locationStatus === "loading" && (
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                        <Typography color="text.secondary">Mengambil lokasi...</Typography>
                    </Box>
                )}

                {locationStatus === "denied" && (
                    <Box sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                        <Typography color="error">Akses lokasi ditolak. Mohon izinkan akses lokasi di browser untuk menggunakan fitur ini.</Typography>
                    </Box>
                )}

                {locationStatus === "granted" && position && (
                    <LeafletMap position={position} />
                )}
            </Box>

            <Stack spacing={1} sx={{ px: 3 }}>
                <Stack direction="row" spacing={0.5} sx={{ display: "flex", justifyContent: "center"}}>
                    <Typography>Rabu, 15 Apr 2026,</Typography>
                    <Typography sx={{ color: 'primary.main' }}>16:08</Typography>
                </Stack>
                <FormGroup>
                    <FormControlLabel 
                        control={
                            <Checkbox 
                                checked={showNote}
                                onChange={(e) => setShowNote(e.target.checked)}
                            />} 
                        label="Tambahkan Catatan" 
                    />
                </FormGroup>
                
                {showNote && (
                    <TextField
                        fullWidth
                        id="outlined-multiline-static"
                        label="Catatan Anda"
                        multiline
                        rows={4}
                    />
                )}

                <Box>
                    <Button
                        variant="contained"
                        fullWidth
                        sx={{
                            py: 1.5,
                            borderRadius: 3,
                            textTransform: "none",
                            fontWeight: "bold",
                        }}
                        onClick={() => router.push("/dashboard")}
                    >
                        Rekam Waktu
                    </Button>
                </Box>
            </Stack>
        </Stack>
    )
}