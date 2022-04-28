import { Outlet } from 'react-router-dom';
import Menu from './Menu'

function DashboardLayoutMain() {
  console.log('DashboardLayoutMain')
    return (
      <div className='mn-vh bg-body'>
          <div className='d-flex border-b-1 bg-white'>
            <div className='flex-auto align-v-center pa-10'>
              Site Layout
            </div>
            <div>
              <Menu />
            </div>
          </div>
          
          <div className='pa-20'>
            <Outlet />
          </div>
          
      </div>
    );
  }
  
  export default DashboardLayoutMain;