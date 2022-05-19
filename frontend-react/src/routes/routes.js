import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Error404 from '../Screens/error404'
import PrincipalPage from '../Screens/principalScreen'
import SignPage from '../Screens/signScreen'
import LoginPage from '../Screens/loginScreen'

const RouterPages = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<PrincipalPage/>}/>
                <Route exact path="*" element={<Error404/>}/>
                <Route exact path='/sign' element={<SignPage/>}/>
                <Route exact path='/login' element={<LoginPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterPages