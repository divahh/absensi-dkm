import {
  Box,
  Typography,
  Stack
} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function DoubleText({ title = "-", text = "-", color = "grey.500" }) {
  return (
    <Box>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        {title}
      </Typography>
      <Stack direction="row" spacing={1}>
        <Typography variant="body1" sx={{ fontWeight: "bold", color: "text.primary" }}>
            {text}
        </Typography>
        <LocationOnIcon sx={{ width:20, height:20, color: color }} />
      </Stack>
    </Box>
  );
}