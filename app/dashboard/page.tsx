"use client";

import {
  Box,
  Typography,
  Button,
  Stack
} from "@mui/material";
import BadgeAvatar from "@/app/ui/dashboard/BadgeAvatar";
import Divider from '@mui/material/Divider';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DoubleText from "../ui/dashboard/DoubleText";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useRouter } from "next/navigation";

const attendanceData = [
    { date: "14 Apr 2026", jamMasuk: "08.12", jamKeluar: "17.05" },
    { date: "13 Apr 2026", jamMasuk: "08.12", jamKeluar: "17.05" },
    { date: "12 Apr 2026", jamMasuk: "08.12", jamKeluar: "17.05" },
];

export default function Dashboard() {
    const router = useRouter();
    
    return (
        <Stack spacing={5} sx={{ px:2, mt:2 }}>
            <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
                <BadgeAvatar />
                <Box>
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>Lucas Scott</Typography>
                    <Typography variant="body2" sx={{ color:'grey.600' }}>Jabatan</Typography>
                </Box>
            </Stack>

            <Stack
                spacing={2}
                sx={{
                    border: 1,
                    borderColor: "grey.400",
                    borderRadius: 5,
                    bgcolor: "white",
                    p: 2,
                }}
            >
                <Box>
                    <Typography sx={{ color: "grey.600" }}>
                        Hari ini ( Rabu, 15 Apr 2026 )
                    </Typography>
                    <Typography sx={{ fontWeight: "bold", color: "grey.600" }}>
                        Shift 08.00 - 17.00
                    </Typography>
                </Box>

                <Divider variant="middle" />

                <Stack direction="row">
                    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                        <Stack direction="row" spacing={1}>
                            <AccessTimeIcon sx={{ color: 'grey.500', width:46, height:40}} />
                            <DoubleText title="Jam Masuk" text="08.12"/>
                        </Stack>
                    </Box>

                    <Divider orientation="vertical" flexItem />

                    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                        <Stack direction="row" spacing={1}>
                            <AccessTimeIcon sx={{ color: 'primary.main', width:46, height:40}} />
                            <DoubleText title="Jam Keluar" text="08.12" color="primary.main"/>
                        </Stack>
                    </Box>
                </Stack>

                <Button
                    variant="contained"
                    fullWidth
                    sx={{
                        py: 1.5,
                        borderRadius: 3,
                        textTransform: "none",
                        fontWeight: "bold",
                    }}
                    onClick={() => router.push("./detail")}
                >
                    Rekam Waktu
                </Button>

                <Stack sx={{ overflow: 'hidden' }}>
                    {attendanceData.map((item, index) => (
                        <Box key={index}>
                            <Stack
                                direction="row"
                                sx={{ alignItems: "center", px: 2, py: 0.5, cursor: 'pointer', '&:hover': { bgcolor: 'grey.50' } }}
                            >
                                <Typography sx={{ color: 'text.secondary', width: 100, fontSize: 14 }}>
                                    {item.date}
                                </Typography>

                                <Divider orientation="vertical" flexItem />

                                <Box sx={{ px: 2 }}>
                                    <Typography variant="caption" sx={{ color: 'primary.main' }}>
                                        Jam Masuk
                                    </Typography>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: 14, textAlign: 'center' }}>
                                        {item.jamMasuk}
                                    </Typography>
                                </Box>

                                <Divider orientation="vertical" flexItem />

                                <Box sx={{ px: 2 }}>
                                    <Typography variant="caption" sx={{ color: 'primary.main' }}>
                                        Jam Keluar
                                    </Typography>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: 14, textAlign: 'center' }}>
                                        {item.jamKeluar}
                                    </Typography>
                                </Box>

                                <ChevronRightIcon sx={{ color: 'grey.400', ml: 'auto' }} />
                            </Stack>

                            {index < attendanceData.length - 1 && <Divider />}
                        </Box>
                    ))}
                </Stack>

                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        variant="contained"
                        sx={{
                            py: 1.5,
                            width: '60%',
                            borderRadius: 3,
                            textTransform: "none",
                            fontWeight: "bold",
                        }}
                        href="./dashboard"
                    >
                        Lihat Lainnya
                    </Button>
                </Box>
            </Stack>
        </Stack>
    )
}