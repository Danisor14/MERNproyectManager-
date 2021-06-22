import React, { Fragment, useState } from 'react'
import {Hidden} from '@material-ui/core'
import DrawerComponent from './DrawerComponent'
import Header from './Header'


const Projects = () => {
    const [open, setOpen] = useState(true);

    const handleOpen = () => {
        setOpen(!open);
    }

    return ( 
        <Fragment>
            <Header handleOpen={handleOpen}/>
            <Hidden smDown>
                <DrawerComponent variant='permanent' open={true}/>
            </Hidden>
            <Hidden mdUp>
            <DrawerComponent 
                variant='temporary'
                open={open}
                onClose={() => handleOpen()}
            />
            </Hidden>
        </Fragment>
    );
}
 
export default Projects;
