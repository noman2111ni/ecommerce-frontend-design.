import React, { useState } from 'react';

const Sidebar = ({ filters, setFilters }) => {
  const toggleFilter = (type, value) => {
    setFilters((prev) => {
      const existing = prev[type] || [];

      return {
        ...prev,
        [type]: existing.includes(value)
          ? existing.filter((v) => v !== value)
          : [...existing, value],
      };
    });
  };

  const clearFilters = () => {
    setFilters({});
  };

  return (
    <div className="w-full max-w-xs bg-white border p-4 space-y-4 rounded-g flex flex-col gap-10 gap shadow-sm">
      {/* Clear Filters Button */}


      {/* Categories */}
      <FilterSection title="Categories">
        {["beauty", "laptops", "fragrances", "groceries"].map((category) => (
          <Checkbox
            key={category}
            label={category}
            checked={filters.category?.includes(category)}
            onChange={() => toggleFilter("category", category)}
          />
        ))}
      </FilterSection>

      {/* Brands */}
      <FilterSection title="Brands">
        {["Apple", "Samsung", "OPPO", "Infinix", "Microsoft"].map((brand) => (
          <Checkbox
            key={brand}
            label={brand}
            checked={filters.brand?.includes(brand)}
            onChange={() => toggleFilter("brand", brand)}
          />
        ))}
      </FilterSection>

      {/* Ratings */}
      <FilterSection title="Ratings">
        {[4, 3, 2, 1].map((rating) => (
          <Checkbox
            key={rating}
            label={`${rating} ★ & above`}
            checked={filters.rating?.includes(rating)}
            onChange={() => toggleFilter("rating", rating)}
          />
        ))}
      </FilterSection>

      {/* Availability */}
      <FilterSection title="Availability">
        {["In Stock", "Out of Stock"].map((status) => (
          <Checkbox
            key={status}
            label={status}
            checked={filters.availability?.includes(status)}
            onChange={() => toggleFilter("availability", status)}
          />
        ))}
      </FilterSection>
      <div className="flex justify-end">
        <button
          onClick={clearFilters}
          className="text-sm text-red-600 hover:text-red-800 font-medium"
        >
          Clear Filters ✕
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

// Reusable components
const FilterSection = ({ title, children }) => {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left font-bold text-gray-700 bg-gray-100 p-2 rounded"
      >
        {title}
      </button>
      {open && <div className="mt-2 pl-2 space-y-1 text-sm text-gray-600">{children}</div>}
    </div>
  );
};

const Checkbox = ({ label, checked, onChange }) => (
  <label className="block cursor-pointer">
    <input type="checkbox" checked={checked} onChange={onChange} className="mr-2" />
    {label}
  </label>
);
