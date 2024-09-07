
import { Outlet } from 'react-router-dom'
import DashboardSidebarComp from '@/components/DashboardSidebarComp'
import DashboardHeaderComp from '@/components/DashboardHeaderComp'


const AdminLayout = () => {
  return (
   <>
   <div className='w-[100vw] min-h-[90vh] flex flex-col'>
    {/* <DashboardHeader onOpen={() => {}} /> */}
    <DashboardHeaderComp />
    <div className='w-full  justify-center flex'>
        {/* <DashboardSidebarComp /> */}
        <DashboardSidebarComp />
      
          <div className=' w-[90%]   bg-gray-100 h-full flex flex-col p-4 space-y-4'>
          <Outlet />
    </div> 
     
    </div>
</div>

   </>
  )
}

export default AdminLayout
