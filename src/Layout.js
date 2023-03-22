import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export function Layout() {
   return <div>
    
        <header>
             <h1>Memories!</h1>
        </header>

        <nav>
            <ul>
                <li> <Link to="/">All Memories</Link> </li>
                <li> <Link to="create">New Memory</Link> </li>
            </ul>
        </nav>

        <div>
           <Outlet />
         </div>

    </div>
  }