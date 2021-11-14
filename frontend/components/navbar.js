
import { Typography, Button, IconButton, Box, AppBar, Toolbar,  } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { Link } from '@mui/material';

const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" elevation={0}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Button href='/' variant='outlined' color="inherit">
                                Tension
                            </Button>
                    </Typography>
                    <Button color="inherit">Kontakt</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;