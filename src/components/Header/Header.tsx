import React from 'react'
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import BoltIcon from '@mui/icons-material/Bolt';
import Button from '@mui/joy/Button';
import { HeaderContainer } from './styles';


type Props = {}

export default function Header({}: Props) {
  return (
    <HeaderContainer>
        <Box
            component="header"
            className="Header"
            sx={[
                {
                p: 2,
                gap: 2,
                bgcolor: 'background.surface',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                gridColumn: '1 / -1',
                borderBottom: '1px solid',
                borderColor: 'divider',
                position: 'sticky',
                width: "100%",
                top: 0,
                zIndex: 1100,
                }
            ]}
            >
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 1.5,
            }}
            >
                <IconButton
                    variant="outlined"
                    size="sm"
                    onClick={() => {}}
                    sx={{ display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <IconButton
                    size="sm"
                    variant="solid"
                    sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
                >
                    <BoltIcon />
                </IconButton>
                <Typography component="h1" fontWeight="xl">
                    Group Quiz
                </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1.5 }}>
                <Button>Sign Up</Button>
                <Button variant="outlined">Log In</Button>
            </Box>
        </Box>
    </HeaderContainer>
  )
}