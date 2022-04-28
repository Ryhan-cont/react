import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Menu from './Menu'
import SideNave from './SideNave'


import DashboardThemeContext from './context/DashboardThemeContext';
import {updateNest} from 'functions.js'

const layoutSetting = {
  menuWidth:300,
  headerHeight:90,
}

const DashboardLayoutMain = prop  => {
  
  const {name, setName, menuData, setMenuData, } = useContext(DashboardThemeContext)
  const updateNameF = params  => event => {
    console.log(params, event)
    //setName('oooooooooooooo');

  }
  return (
    <div className='mn-vh bg-body d-flex'>
      <div>
        <SideNave />
      </div>
      <div className='flex-auto'>
        <div className='d-flex border-b-1 bg-white'>
          <div className='flex-auto align-v-center pa-10'>
            {/* <div onClick={()=>{menuData.menuWidth = 200; setMenuData(menuData); console.log(menuData)}}>Dashboard</div> Layoutx {name} */}
            <div onClick={updateNameF({xxx:'xxx',ooo:'ooo'})}>Dashboard</div> Layoutx {name}
          </div>
          <div>
            <Menu />
          </div>
        </div>
        <div className='pa-20'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
  
export default DashboardLayoutMain;