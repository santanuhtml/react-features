import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import lightTheme from '../assets/lightTheme.png';
import darkTheme from '../assets/darkTheme.png';

function Home(){

    const {theme, toggleTheme} = useContext(ThemeContext);

    return(
        <>  
            <div onClick={toggleTheme} style={{cursor:"pointer"}}>
                {theme === 'light'? (<img src={lightTheme} />) : (<img src={darkTheme} />)}
            </div>
             <div>
                 <h1>Home page</h1>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam enim expedita dicta aliquid ipsa cupiditate aperiam architecto quas minima qui! Unde, ab officia alias autem aspernatur non praesentium quisquam enim.</p>
            </div>  
        </>
    )
}

export default Home;