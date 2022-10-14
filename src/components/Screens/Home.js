import { color, ThemeProvider } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { createTheme, ThemProvider, styled } from '@mui/material/styles';
import AddIcon from "@mui/icons-material/Add";
import Fab from '@mui/material/Fab';

import Title from '../Title';
import Terminal from '../Terminal';

const Home = (props) => {

    const initAppData = () => {
        let number_of_screens = 4
        let app_data = {
            screen: [...Array(number_of_screens).keys()]
        }
        return app_data
    }

    const fabStyle = {
        position: 'absolute',
        bottom: "15%",
        right: "5%",
    }
    
    const [appData, setAppData] = useState(initAppData())    

    return (
        <div>
            <Title title="aj-collins"/>
            <p className="blurb">I'm me</p>
            <Terminal/>

        </div>

    )
}

export default Home;
