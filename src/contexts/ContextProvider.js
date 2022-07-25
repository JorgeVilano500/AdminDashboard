import React, {createContext, useContext, useState} from 'react'; 

const StateContext = createContext();

const initialState ={
    chat: false, 
    cart: false, 
    userProfile: false, 
    notification: false
}

export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined); // becaise we dont know screen size
    const[currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode',  e.target.value)
        setThemeSettings(false)
    }
    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode',  color)
        setThemeSettings(false)
    }
    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]: true})// ... spreads the initialState and for the clicked attribute will change when used 
    }
    const [themeSettings, setThemeSettings] = useState(false);

    return ( // all info will be passe dthrough al lcomponents
        <StateContext.Provider
        value={{
            activeMenu,
            setActiveMenu, 
            isClicked, 
            setIsClicked,
            handleClick, 
            screenSize, setScreenSize,
            currentColor, currentMode,
            themeSettings, setThemeSettings, 
            setMode, setColor
        }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext =() => useContext(StateContext);