import React from 'react'

function Header(){

const firstName='Rupak'
const lastName='Chaulagain'

return (
<header>
<h3>Welcome to this Page {firstName+" "+lastName}</h3>
    <nav className="navbar">
       <ul>
         <li>Home</li>
          <li>Contact</li>
           <li>Gallery</li>
            <li>Setting</li>
       </ul>
    </nav>
</header>
)

}

export default Header;