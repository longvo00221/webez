import React from 'react';

type AgencyProps = {
    agencyId:string;
};

const Agency:React.FC<AgencyProps> = ({agencyId}) => {
    
    return <div>{agencyId}</div>
}
export default Agency;