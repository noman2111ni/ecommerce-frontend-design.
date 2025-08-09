import React from 'react';

const ProductDetailSkeleton = () => {
    return (
        <div className="min-h-screen py-10 px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 bg-white bg-opacity-90 backdrop-blur rounded-2xl shadow-2xl lg:p-10 relative animate-pulse">

                {/* Left: Image Gallery Skeleton */}
                <div className="flex flex-col gap-4 justify-center items-center">
                    <div className="w-[300px] h-[300px] rounded-xl bg-gray-200" />
                    <div className="flex gap-3 mt-4 justify-center">
                        {[...Array(1)].map((_, idx) => (
                            <div key={idx} className="w-16 h-16 rounded-lg bg-gray-200" />
                        ))}
                    </div>
                </div>

                {/* Right: Info Panel Skeleton */}
                <div className="flex flex-col justify-between space-y-4">
                    <div>
                        <div className="h-6 bg-gray-200 rounded w-3/4 mb-3" />
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-5 h-5 bg-gray-200 rounded-full" />
                            <div className="w-10 h-4 bg-gray-200 rounded" />
                        </div>
                        <div className="space-y-2 mb-6">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="h-3 bg-gray-200 rounded w-full" />
                            ))}
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            <div className="w-20 h-6 bg-gray-200 rounded" />
                            <div className="w-24 h-6 bg-gray-200 rounded" />
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex-1 h-12 bg-gray-200 rounded-xl" />
                        <div className="w-10 h-10 bg-gray-200 rounded-full" />
                        <div className="w-10 h-10 bg-gray-200 rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailSkeleton;
