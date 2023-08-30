import { Routes, Route } from 'react-router-dom';

import { New } from '../pages/New'
import { Details } from '../pages/Details'
import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Details/:id" element={<Details />}/>
            <Route path="/Profile" element={<Profile />}/>
            <Route path="/New" element={<New />}/>
        </Routes>
    )
}