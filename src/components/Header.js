import React, { useState } from "react";

function Header({handleClickParent, isDarkMode}){
    // function handleClickParent
return (
    <header>
        <h2>Shopster</h2>
        <button onClick={handleClickParent}>
            {isDarkMode ? "Dark" : "Light"} Mode
        </button>
    </header>)

}

export default Header