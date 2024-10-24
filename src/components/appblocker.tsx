import React from "react";

const AppBlocker: React.FC = () => {
  return (
    <>
      {/* This overlay is shown only on screens smaller than `lg` (less than 1024px) */}
      <div className="lg:hidden fixed inset-0 bg-white flex items-center justify-center z-50">
        <p className="text-black text-2xl font-bold">
          Hi! I ran out of time (60 minutes to design and build). <br /> Please
          review on your desktop! <br />- Reece
        </p>
      </div>

      {/* Main app content is handled in App.tsx */}
    </>
  );
};

export default AppBlocker;
