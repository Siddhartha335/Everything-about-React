import React from 'react';

type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

const layout = ({ children, modal }: Props) => {
  return (
    <div className="relative min-h-screen flex justify-center items-center">
      {modal}
      <div className="absolute top-0 left-0 right-0 bottom-0"></div> {/* Modal backdrop */}
      <div className="relative z-10">
        {children} {/* Main Content */}
      </div>
    </div>
  );
};

export default layout;
