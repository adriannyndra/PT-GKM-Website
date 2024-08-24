import React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

// Define the prop types
interface HeaderBreadcrumbsProps {
  currentLocation: string;
}

const HeaderBreadcrumbs: React.FC<HeaderBreadcrumbsProps> = ({ currentLocation }) => {
  return (
    <div className='relative w-full h-[132px] flex items-center justify-center'>
      {/* Background Image */}
      <div 
        className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: 'url(/assets/breadcrumbs-header2.jpg)' }} 
      />
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Breadcrumbs Container */}
      <div className='relative z-10 text-white'>
        <Breadcrumbs 
            aria-label="breadcrumb"
            separator={<span style={{ color: '#FFFFFF' }}>{'>'}</span>} // Custom separator color
            >
            <Link 
              underline="hover" 
              color="inherit" 
              href="/"
              className="text-white"
            >
                Beranda
            </Link>
            <Typography className="text-white">
              {currentLocation}
            </Typography>
        </Breadcrumbs>
      </div>
    </div>
  );
}

export default HeaderBreadcrumbs;
