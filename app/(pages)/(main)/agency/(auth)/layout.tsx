import React from 'react';

type AuthlayoutProps = {
    children: React.ReactNode
};

const Authlayout:React.FC<AuthlayoutProps> = ({children}) => {
    
    return <div className="h-full flex items-center justify-center">{children}</div>
}
export default Authlayout;