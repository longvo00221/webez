import { getNotificationAndUser, verifyAndAcceptInvitation } from '@/app/_lib/queries';
import { currentUser } from '@clerk/nextjs';
import React from 'react';
import { redirect } from 'next/navigation'
import Unauthorized from '@/app/_components/unauthorized';
import Sidebar from '@/app/_components/sidebar';
import InfoBar from '@/app/_components/global/InfoBar';
import BlurPage from '@/app/_components/global/BlurPage';
type AgencyDetailLayoutProps = {
    children: React.ReactNode
    params: { agencyId: string }
};

const AgencyDetailLayout:React.FC<AgencyDetailLayoutProps> = async ({children,params}) => {
    const agencyId = await verifyAndAcceptInvitation()
    const user = await currentUser()
    if(!user) return redirect('/')
    if(!agencyId) return redirect('/agency')
    if (
        user.privateMetadata.role !== 'AGENCY_OWNER' &&
        user.privateMetadata.role !== 'AGENCY_ADMIN'
    ){
        return <Unauthorized/>
    }
    let allNoti: any = []
    const notifications = await getNotificationAndUser(agencyId)
    if (notifications) allNoti = notifications
    return (
        <div className="h-screen overflow-hidden">
          <Sidebar
            id={params.agencyId}
            type="agency"
          />
          <div className="md:pl-[300px]">
            <InfoBar
              notifications={allNoti}
              role={allNoti.User?.role}
            />
            <div className="relative">
              <BlurPage>{children}</BlurPage>
            </div>
          </div>
        </div>
      )
}
export default AgencyDetailLayout;