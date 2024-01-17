import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
export default function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext);
  const style ={color:theme.color,outline:'none', backgroundColor:theme.backgroundColor}
  return (
 

  <div style={{}}>
   <div style={{position: "relative"}}>
      <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
       
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
      <ul >
          <li>
            <a className="active" href="/"  style={style}>
              Home
            </a>
          </li>
          <li>
            <a href="#news"style={style}>News</a>
          </li>
          <li>
            <a href="#about" style={style}>About</a>
          </li>
          <li>
            <a href="contact" style={style}>Contact</a>
          </li>
        
        </ul>
        <div style={{ justifyItems:'center'}}>
    <a
      className="switch-mode"
      href="#"
      onClick={toggle}
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color,
        outline: "none",
      }}
      data-testid="toggle-theme-btn"
    >
      Switch Nav to {!dark ? "Dark" : "Light"} mode
    </a>
  </div>
      </div>
      </nav>
      
      
    </div>
   
  </div>
  );
}
