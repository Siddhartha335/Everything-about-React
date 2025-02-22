import React from 'react';

type LayoutProps = {
    children: React.ReactNode;
    users: React.ReactNode;
    notifications: React.ReactNode; 
    revenue: React.ReactNode;
    login: React.ReactNode;
};

const Layout = ({ children, users, notifications, revenue,login }: LayoutProps) => {

  const isLoggedin = false;

  return (
    <>
      {isLoggedin ? 
      <div>
      {children} {/* This is the default slot (complex-dashboard/page.tsx) */}
      <p>Created by Sid</p>
      <div className="flex items-center">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="mb-4 bg-gray-300 w-96 h-40">{users}</div>
          <div className='bg-gray-300 w-96 h-40'>{revenue}</div>
        </div>
        <div className="bg-gray-300 h-screen w-64">{notifications}</div>
      </div>

    </div> : login  
    }
    </>
  );
};

export default Layout;
