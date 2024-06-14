'use client'
import { Agency } from '@prisma/client';
import React, { useState } from 'react';
import { toast } from 'sonner';
import {useRouter} from 'next/navigation';
import { AlertDialog } from '../ui/alert-dialog';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
type AgencyDetailsProps = {
    data?: Partial<Agency>
};
const FormSchema = z.object({
    name: z.string().min(2, { message: 'Agency name must be at least 2 characters' }),
    companyEmail: z.string().min(1, { message: 'Email must be at least 2 characters' }),
    companyPhone: z.string().min(9, { message: 'Agency company phone must have 9 characters' }),
    whiteLabel: z.boolean(),
    address: z.string().min(5, { message: 'Address must be at least 5 characters' }),
    city: z.string().min(1, { message: 'City must be at least 1 character' }),
    zipCode: z.string().min(1, { message: 'Zip Code must be at least 1 character' }),
    state: z.string().min(1, { message: 'State must be at least 1 character' }),
    country: z.string().min(1, { message: 'Country must be at least 1 character' }),
    agencyLogo: z.string().min(1, { message: 'Agency logo URL must be at least 1 character' })

})
const AgencyDetails:React.FC<AgencyDetailsProps> = ({data}) => {
    const router = useRouter()
    const [deletingAgency,setDeletingAgency] = useState<boolean>(false)
    const form = useForm<z.infer<typeof FormSchema>>()
    return (
        <AlertDialog>
            <Card>
                <CardHeader>
                    <CardTitle>Agency Information</CardTitle>
                    <CardDescription>Lets create an agency for your business. You can edit agency settings later from the agency settings tab.</CardDescription>
                </CardHeader>
                <CardContent>
                    
                </CardContent>
            </Card>
        </AlertDialog>
    )
}
export default AgencyDetails;