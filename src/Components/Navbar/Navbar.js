import React from 'react'
import './style.css'

// @dev import components
import { Button } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';


// @dev import images
import SangyaIcon from '../../Images/Sangya.jpg'
import CWSIcon from '../../Images/cws.png'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="brand-icon">
                <img src={CWSIcon} alt="CodewithSudeep"/> <div>CodewithSudeep.Network</div>
            </div>

            <div className="user-utility">
                <Button className="new-post"><AddCircleOutlineIcon/> &nbsp; Add Photo</Button>
                <Button>
                    <img src={SangyaIcon} alt="User Icon"/>
                </Button>
            </div>
        </div>
    )
}
