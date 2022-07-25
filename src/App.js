import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import {Tooltip, TooltipComponent} from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar, ThemeSettings} from './components';
import {Ecommerce, Orders, calendar, Employees, Stacked, Pyramid, Customers, Kanban, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, Calendar, Line} from './pages';
import {useStateContext} from './contexts/ContextProvider';

const App = () => {
    const {activeMenu, themeSettings, setThemeSettings, currentColor, currentMode} = useStateContext();
//    {themeSettings && <ThemeSettings />}   will appear only if themesettings is true and themeseitings component is ready
  return (
      <div className={currentMode === 'Dark' ? 'dark': ''}>
          <BrowserRouter>
            <div className='flex relative dark:bg-main-dark-bg'> 
                <div className='fixed right-4 bottom-4' style={{zIndex: '1000'}}>
                    <TooltipComponent content='Settings' position='Top'>
                        <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{background: {currentColor}, borderRadius: '50%'}} onClick={() => setThemeSettings(true)}>
                            <FiSettings />
                        </button>
                    </TooltipComponent>
                </div>
                {activeMenu ? (
                    <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                        <Sidebar />
                         </div>
                ) :(
                    <div className='w-0 dark:bg-secondary-dark-bg'>
                        <Sidebar />
                        </div>
                ) }
                <div className={
                    `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu  // if it is ture from the start it will be the first
                        ? 'md:ml-72' 
                        :'flex-2' }`
                }>
                    <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                        <Navbar />
                    </div>
            

                <div>
                   {themeSettings && <ThemeSettings />}  
                <Routes>
                    {/* Dashboard */}
                    <Route path='/ecommerce' element={<Ecommerce />} />
                    <Route path='/' element={<Ecommerce />} />

                    {/* Pages */}
                    <Route path='/orders' element={<Orders/>} />
                    <Route path='/employees' element={<Employees/>} />
                    <Route path='/customers' element={<Customers/>} />
                    
                    {/* Apps  use control + forwardd slash for this*/}
                    <Route path='/kanban' element={<Kanban/>} />
                    <Route path='/editor' element={<Editor/>} />
                    <Route path='/calendar' element={<Calendar/>} />
                    <Route path='/ecommerce' element={<Ecommerce/>} />
                    <Route path='/color-picker' element={<ColorPicker/>} />
                    
                    {/* Charts */}
                    <Route path='/line' element={<Line/>} />
                    <Route path='/area' element={<Area/>} />
                    <Route path='/bar' element={<Bar/>} />
                    <Route path='/pie' element={<Pie/>} />
                    <Route path='/financial' element={<Financial/>} />
                    <Route path='/color-mapping' element={<ColorMapping/>} />
                    <Route path='/pyramid' element={<Pyramid/>} />
                    <Route path='/stacked' element={<Stacked/>} />
                    
                </Routes>
                </div>
                </div>
            </div>

          </BrowserRouter>

      </div>
  )
}

export default App;