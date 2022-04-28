import { useContext } from 'react';
import DashboardThemeContext from './context/DashboardThemeContext';

const SideNave = () => {
    const {name, menuData} = useContext(DashboardThemeContext);

    const sideNavBase = {
        width:menuData.menuWidth
    }
    return(
        <div className="side-nav-container vh" style={sideNavBase}>
            Side Nav {name}{menuData.menuWidth}
        </div>
    )
}


export default SideNave