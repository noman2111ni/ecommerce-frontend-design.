import React from 'react';

const ProductDetailSkeleton = () => {
    const shimmer = 'animate-pulse bg-gray-200';

    return (
        <div className="max-l mx-auto ">
            <div className="bg-white rounded-lg shadow-md p-4 mb- flex justify-between flex-col lg:flex-row gap-6">
                {/* Image Gallery Skeleton */}
                <div className="w-full lg:w-1/3 flex flex-col">
                    <div className={`rounded-sm border border-gray-300 mb-4 h-80 ${shimmer}`} />

                    <div className="flex gap-2 flex-wrap">
                        {[...Array(3)].map((_, idx) => (
                            <div key={idx} className={`w-16 h-16 rounded border border-gray-300 ${shimmer}`} />
                        ))}
                    </div>

                    <div className={`mt-5 h-10 w-full rounded-sm ${shimmer}`} />
                </div>

                {/* Info Panel Skeleton */}
                <div className="w-full lg:w-1/3 flex flex-col gap-4">
                    <div className={`h-5 w-40 ${shimmer}`} />
                    <div className={`h-8 w-2/3 ${shimmer}`} />

                    <div className="flex items-center gap-4">
                        <div className={`h-5 w-20 ${shimmer}`} />
                        <div className={`h-5 w-32 ${shimmer}`} />
                    </div>

                    <div className="bg-orange-100 p-3 rounded shadow-sm mb-4 flex gap-6">
                        <div className="flex flex-col gap-2">
                            <div className={`h-5 w-16 ${shimmer}`} />
                            <div className={`h-4 w-10 ${shimmer}`} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className={`h-5 w-20 ${shimmer}`} />
                            <div className={`h-4 w-10 ${shimmer}`} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className={`h-5 w-20 ${shimmer}`} />
                            <div className={`h-4 w-10 ${shimmer}`} />
                        </div>
                    </div>

                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="flex justify-between">
                            <div className={`h-4 w-24 ${shimmer}`} />
                            <div className={`h-4 w-32 ${shimmer}`} />
                        </div>
                    ))}

                    <hr className="my-2 border-gray-200" />

                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="flex justify-between">
                            <div className={`h-4 w-28 ${shimmer}`} />
                            <div className={`h-4 w-36 ${shimmer}`} />
                        </div>
                    ))}
                </div>

                {/* Right Panel Skeleton */}
                <div className="w-full lg:w-1/4">
                    <div className="border rounded-sm border-gray-300 py-3 p-4 flex flex-col gap-4">
                        <div className="flex gap-2">
                            <div className={`w-14 h-14 rounded-full ${shimmer}`} />
                            <div className="flex flex-col gap-2">
                                <div className={`w-24 h-5 ${shimmer}`} />
                                <div className={`w-20 h-4 ${shimmer}`} />
                            </div>
                        </div>

                        <hr className="border-gray-300" />

                        {[...Array(3)].map((_, idx) => (
                            <div key={idx} className="flex items-center gap-6">
                                <div className={`w-6 h-6 rounded-full ${shimmer}`} />
                                <div className={`h-4 w-36 ${shimmer}`} />
                            </div>
                        ))}

                        <div className={`w-full h-10 rounded-md mt-2 ${shimmer}`} />
                        <div className={`w-full h-10 rounded-sm mt-2 ${shimmer}`} />
                    </div>

                    <div className="p-4 flex justify-center items-center mt-4">
                        <div className={`h-5 w-40 ${shimmer}`} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailSkeleton;
