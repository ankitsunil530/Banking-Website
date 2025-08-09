import BankPage from './components/BankPage';
import AccountOpeningPage from './components/AccountOpeningPage';
import Login from './components/Login';
import Display from './components/Display';
import { FormDataProvider } from './context/Context';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from './pages/Layout';
import AboutUs from './pages/AboutUs';


import MainPage from './main_page/MainPage';
import Dashboard from './main_page/Dashboard';
import SignUp from './components/SignUp';
function App() {
  

  return (
   
   <FormDataProvider>
<Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route path='/' element={<BankPage />} />
        <Route path='/about' element={<AboutUs/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path='/display' element={<Display/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        
        </Route>
        <Route path="/mainpage" element={<MainPage/>} >
          <Route path='/mainpage/dashboard' element={<Dashboard/>}/>
        </Route>
        <Route path='/account-opening' element={<AccountOpeningPage />} />
        
        
        
        
      </Routes>

    </Router>
   </FormDataProvider>
    
    
    
  )
}

export default App
