import React from 'react'

const SkeletonListView = ({ count = 5 }) => {
  return (
    <div className="space-y-3 py-2 flex flex-col animate-pulse">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="flex bg-white rounded-lg border shadow-sm overflow-hidden"
        >
          {/* Thumbnail Skeleton */}
          <div className="w-30 h-30 bg-gray-200 flex-shrink-0" />

          {/* Text Skeleton */}
          <div className="p-4 flex flex-col justify-between flex-1">
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-3/4" />
              <div className="h-3 bg-gray-200 rounded w-full" />
              <div className="h-3 bg-gray-200 rounded w-5/6" />
            </div>

            <div className="flex justify-between items-center mt-4">
              <div className="h-4 bg-gray-200 rounded w-16" />
              <div className="h-4 bg-gray-200 rounded w-10" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SkeletonListView
