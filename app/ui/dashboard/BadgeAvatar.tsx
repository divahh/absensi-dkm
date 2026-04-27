import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import CreateIcon from '@mui/icons-material/Create';
import PersonIcon from '@mui/icons-material/Person';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    borderRadius: '50%',
    width: 26,
    height: 26,
    position: 'absolute',
    zIndex: 10,
  },
}));

export default function BadgeAvatar() {
    return (
        <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={<CreateIcon fontSize="small"/>}
        >
            <Avatar sx={{ width: 64, height: 64, bgcolor: "#dbeafe" }}>
                <PersonIcon sx={{ width: 64, height: 64, color: '#93c5fd' }}/>
            </Avatar>
        </StyledBadge>
    )
}