import React from 'react';

const ShimmerUI = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between gap-6">
        {/* Left Content */}
        <div className="flex-1 space-y-3">
          <div className="animate-pulse space-y-3">
            {/* Veg/Non-veg indicator */}
            <div className="h-5 w-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded shimmer"></div>
            
            {/* Item Name */}
            <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded-md w-3/4 shimmer"></div>
            
            {/* Price */}
            <div className="h-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded-md w-1/4 shimmer"></div>
            
            {/* Description */}
            <div className="space-y-2">
              <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded-md w-full shimmer"></div>
              <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded-md w-5/6 shimmer"></div>
            </div>
          </div>
        </div>

        {/* Right Image & Button */}
        <div className="relative flex-shrink-0">
          <div className="animate-pulse">
            {/* Image placeholder */}
            <div className="h-32 w-32 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded-lg shimmer"></div>
            
            {/* Add button placeholder */}
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
              <div className="h-10 w-24 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded-lg shimmer shadow-md"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .shimmer {
          animation: shimmer 2s infinite linear;
        }
      `}</style>
    </div>
  );
};

export default ShimmerUI;