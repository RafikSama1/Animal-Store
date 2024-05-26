import { NavLink, Outlet} from "react-router-dom";

function Layout(){
    return(
        <>
            <header>
                <nav className="border-gray-200 bg-gray-50 flex flex-row mx-32 justify-between">
                    <NavLink className="font-black max-w-screen-xl flex flex-wrap items-center p-4 text-[#329911]" to={'/'}>AnimalCare</NavLink>
                    <ul className="font-medium flex flex-row justify-end p-4 mt-4 gap-10">
                        <li><NavLink className={'block py-2 px-3 text-white bg-[#329911] rounded-lg'} to={'/'}>home</NavLink></li>
                        <li><NavLink className={'block py-2 px-3 text-gray-900 rounded hover:bg-gray-200'} to={'/about'}>About</NavLink></li>
                        <li><NavLink className={'block py-2 px-3 text-gray-900 rounded hover:bg-gray-200'} to={'/animals'}>Animals List</NavLink></li>
                        <li><NavLink className={'block py-2 px-3 text-gray-900 rounded hover:bg-gray-200'} to={'/contact'}>Contact</NavLink></li>
                    </ul>
                </nav>
            </header>
            <Outlet/>
            <footer className="bg-white rounded-lg shadow flex flex-row justify-around">
                <div className=" p-4 ">
                    <span className="text-sm text-gray-500">© 2024 
                        <NavLink className="font-medium hover:underline" to={'/'}>AnimalCare</NavLink>
                        . All Rights Reserved.
                    </span>
                </div>
            </footer>

        </>
    )
};

export default Layout;