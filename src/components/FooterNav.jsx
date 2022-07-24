
import * as React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ContentPasteOffIcon from '@mui/icons-material/ContentPasteOff';
import PersonIcon from '@mui/icons-material/Person';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

const FooterNav = () => {

    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
        if(newValue === "home"){
            window.location = "/HomePage";
        }else if(newValue === "test"){
            window.location = "/Test";
        }else if(newValue === "user"){
            window.location = "/Usuario";
        }
    };

    return (
        <div>
            <BottomNavigation  
            value={value} 
            onChange={handleChange} 
            // aria-label="icon tabs example"
            >
                <BottomNavigationAction 
                icon={<HomeIcon />} 
                value="home"
                label="Home" 
                />
                <BottomNavigationAction 
                icon={<AssignmentIcon />} 
                value="test"
                label="Test" 
                />
                <BottomNavigationAction 
                icon={<ContentPasteOffIcon />} 
                value="undefined"
                label="Undefined"
                />
                <BottomNavigationAction 
                icon={<PersonIcon />} 
                value="user"
                label="User"
                />
            </BottomNavigation >
        </div>
        
        
    )
}

export default FooterNav
