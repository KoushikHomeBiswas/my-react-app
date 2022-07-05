import React from 'react'
import { Outlet } from 'react-router-dom'
import FrontendFooter from '../Common/FrontendFooter/FrontendFooter'
import FrontendHeader from '../Common/FrontendHeader/FrontendHeader'
import './FrontendLayout.css'

const FrontendLayout = () => {
    return (
        <>
            <div className="mainContent">

                {/*Start Frontend Header */}
                <FrontendHeader />
                {/*End Frontend Header */}
                
                {/*Start Output Here */}
                <Outlet />
                {/*End Output Here */}                

                {/*Start Frontend Footer */}
                <FrontendFooter />
                {/*End Frontend Footer */}

            </div>
           
        </>
    )
}

export default FrontendLayout
