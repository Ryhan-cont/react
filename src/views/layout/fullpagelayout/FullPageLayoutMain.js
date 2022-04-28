import { Outlet } from 'react-router-dom';

const FullPageLayoutMain = () => {
    return (
      <div>
        <div>FullPageLayoutMain</div>
          <Outlet />
      </div>
    );
  }
  
  export default FullPageLayoutMain;