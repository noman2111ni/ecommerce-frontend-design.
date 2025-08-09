import { Link } from "react-router-dom"

const Card = ({ items }) => {
  return (
    <Link to={`/Product/${items.id}`}>
      <div className="flex items-center justify-center w-full">
        <div className="flex flex-col justify-between p-4 w-full max-w-xs border border-gray-300 h-[150px] relative bg-white rounded-lg shadow-sm">
          <div>
            <h2 className="font-medium text-base md:text-lg line-clamp-2">
              {items.title.split(' ').length > 1
                ? `${items.title.split(' ')[0]} ${items.title.split(' ').pop()}`
                : items.title}
            </h2>
            <p className="text-[15px] font-semibold">{items.price}$</p>
          </div>
          <img
            className="h-16 w-16 object-contain absolute right-2 bottom-2"
            src={items.image}
            alt="Product"
          />
        </div>
      </div>
    </Link>
  )
}

export default Card