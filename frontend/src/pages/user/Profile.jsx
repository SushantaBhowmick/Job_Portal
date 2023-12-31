import LocationOn from '@mui/icons-material/LocationOn';
import { Avatar,
     Chip,
     Divider, 
     IconButton, 
     Stack,
     Switch, 
     useTheme 
    } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import pp from '../../images/pp.jpeg'


const Profile = () => {
    const { user } = useSelector(state => state.user);
    const { palette } = useTheme();
    return (
        <>
            <Box  sx={{ maxWidth: "50%", margin: "auto", pt: 10 }}>
                <Card  sx={{ minWidth: 275, bgcolor: palette.secondary.midNightBlue }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 16 }} color="#fafafa" gutterBottom>
                            Personal Info
                        </Typography>
                        <hr style={{ marginBottom: "30px" }} />
                        <Typography variant="h6" component="div" sx={{ color: "#fafafa" }} >
                            Full Name: {user && user.name}
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ color: "#fafafa" }} >
                            E-mail:  {user && user.email}
                        </Typography>
                        <Typography sx={{ mb: 1.5, color: "grey", pt: 2 }} color="text.secondary">
                            Status: {user && user.role}
                        </Typography>

                    </CardContent>
                </Card>
            </Box>

        </>
    )
}

export default Profile

