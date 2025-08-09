import { Link } from "react-router-dom";
import SkeletonListView from "../../Sekelton/SkeletonListView";
import SkeletonGridView from "../../Sekelton/SkeletonGridView";

const ProductGrid = ({ products, view  }) => {

    if (!products || products.length === 0) {
        return (
            <div className="text-center text-gray-500 py-10">
                <SkeletonGridView count={8}/>
            </div>
        );
    }
    // 🧾 List View
    if (view === 'list') {
        return (
            <div className="space-y-3 py-2 flex flex-col">
                {products.map((product) => (
                    <Link key={product.id} to={`/Product2/${product.id}`}>
                        <div className="flex bg-white rounded-lg border shadow-sm overflow-hidden">
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="w-30 h-30 object-cover"
                            />
                            <div className="p-4 flex flex-col justify-between flex-1">
                                <div>
                                    <h2 className="text-lg font-semibold">{product.title}</h2>
                                    <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
                                </div>
                                <div className="flex justify-between items-center mt-2">
                                    <p className="text-gray-800 font-medium">${product.price}</p>
                                    <p className="text-sm text-yellow-500">★ {product.rating}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        );
    }

    // 🧱 Grid View (default)
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {products.map((product) => (
                <Link key={product.id} to={`/Product2/${product.id}`}>
                    <div className="w-full h-[270px] bg-white rounded-lg border shadow-sm overflow-hidden flex flex-col">
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-3 flex-1 flex flex-col justify-between">
                            <h2 className="font-semibold text-sm truncate">{product.title}</h2>
                            <p className="text-gray-600 text-sm">${product.price}</p>
                            <p className="text-sm text-yellow-500">★ {product.rating}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ProductGrid;
