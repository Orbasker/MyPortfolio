import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import Link from '@mui/material/Link';

const PhoneNumber = () => {
    const phoneNumber = process.env.NEXT_PUBLIC_PERSONAL_PHONE_NUMBER;

    return (
        <>
            <PhoneIcon className="text-gray-300" />
            <Link href={`tel:${phoneNumber}`} className="text-gray-300 hover:text-white">
                {phoneNumber}
            </Link>
        </>
    );
};

export default PhoneNumber;