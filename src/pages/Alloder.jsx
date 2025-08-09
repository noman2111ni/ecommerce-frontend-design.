import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Main/Sidebar/Sidebar';
import ProductGrid from '../components/Main/Product/ProductGrid';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import { FaThLarge, FaThList } from 'react-icons/fa';

const AllOrder = () => {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [viewMode, setViewMode] = useState('grid'); // or 'list'
    const [searchQuery, setSearchQuery] = useState('');
    // const [loading, setLoading] = useState(true);

    const getProductsPerPage = (view) => (view === 'grid' ? 8 : 4);
    const PRODUCTS_PER_PAGE = getProductsPerPage(viewMode);

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=100')
            .then((res) => res.json())
            .then((data) => setProducts(data.products));
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [filters, viewMode, searchQuery]);

    const filterProducts = () => {
        return products.filter((product) => {
            const {
                category = [],
                brand = [],
                rating = [],
                availability = [],
            } = filters;

            if (category.length && !category.includes(product.category)) return false;
            if (brand.length && !brand.includes(product.brand)) return false;
            if (rating.length && !rating.some((r) => product.rating >= r)) return false;

            if (
                availability.length &&
                !availability.includes(product.stock > 0 ? 'In Stock' : 'Out of Stock')
            )
                return false;

            if (
                searchQuery &&
                !product.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
                return false;

            return true;
        });
    };

    const filteredProducts = filterProducts();
    const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
    const paginatedProducts = filteredProducts.slice(
        (currentPage - 1) * PRODUCTS_PER_PAGE,
        currentPage * PRODUCTS_PER_PAGE
    );

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const generatePaginationItems = () => {
        const items = [];

        if (totalPages <= 5) {
            for (let page = 1; page <= totalPages; page++) {
                items.push(
                    <PaginationItem key={page}>
                        <PaginationLink
                            href="#"
                            isActive={currentPage === page}
                            onClick={(e) => {
                                e.preventDefault();
                                handlePageChange(page);
                            }}
                        >
                            {page}
                        </PaginationLink>
                    </PaginationItem>
                );
            }
        } else {
            items.push(
                <PaginationItem key={1}>
                    <PaginationLink
                        href="#"
                        isActive={currentPage === 1}
                        onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(1);
                        }}
                    >
                        1
                    </PaginationLink>
                </PaginationItem>
            );

            if (currentPage > 3) {
                items.push(<PaginationEllipsis key="start-ellipsis" />);
            }

            const start = Math.max(2, currentPage - 1);
            const end = Math.min(totalPages - 1, currentPage + 1);

            for (let page = start; page <= end; page++) {
                items.push(
                    <PaginationItem key={page}>
                        <PaginationLink
                            href="#"
                            isActive={currentPage === page}
                            onClick={(e) => {
                                e.preventDefault();
                                handlePageChange(page);
                            }}
                        >
                            {page}
                        </PaginationLink>
                    </PaginationItem>
                );
            }

            if (currentPage < totalPages - 2) {
                items.push(<PaginationEllipsis key="end-ellipsis" />);
            }

            items.push(
                <PaginationItem key={totalPages}>
                    <PaginationLink
                        href="#"
                        isActive={currentPage === totalPages}
                        onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(totalPages);
                        }}
                    >
                        {totalPages}
                    </PaginationLink>
                </PaginationItem>
            );
        }

        return items;
    };


    return (
        <div className="min-h-screen p-4">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-2">
                {/* Sidebar */}
                <div className="w-full flex justify-center items-center  lg:w-1/4 ">
                    <Sidebar filters={filters} setFilters={setFilters} />
                </div>

                {/* Main Content */}
                <div className="w-full bg-white roun shadow-md lg:w-3/4 flex flex-col  gap-4">
                    {/* Header: Search + View Mode + Total Products */}
                    <div className="flex flex-col md:flex-row justify-between items-center p-4 gap-4">
                        {/* Search */}
                        <span className="text-gray-600">
                            {filteredProducts.length} Products Found
                        </span>
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full md:w-1/2 px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring"
                        />

                        {/* Product Count + View Toggle */}
                        <div className="flex items-center gap-4">

                            <button
                                onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                                className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-100 transition"
                            >
                                {viewMode === 'grid' ? (
                                    <>
                                        <FaThList />
                                        <span>List View</span>
                                    </>
                                ) : (
                                    <>
                                        <FaThLarge />
                                        <span>Grid View</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Product Grid/List */}
                    <div className="p-4 ">
                        <ProductGrid products={paginatedProducts} view={viewMode} />
                    </div>

                    {/* Pagination */}
                    <div className="px-4 py-2">
                        <Pagination className="flex justify-end">
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handlePageChange(currentPage - 1);
                                        }}
                                        disabled={currentPage === 1}
                                    />
                                </PaginationItem>

                                {generatePaginationItems()}

                                <PaginationItem>
                                    <PaginationNext
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handlePageChange(currentPage + 1);
                                        }}
                                        disabled={currentPage === totalPages}
                                    />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllOrder;
