import { FC } from "react";

const PropertyDetail: FC<{ property: any }> = ({ property }) => {
  const { name, image, price, rating, description } = property;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <img src={image} alt={name} className="w-full h-64 object-cover rounded-lg" />
      <h1 className="text-2xl font-bold mt-4">{name}</h1>
      <p className="text-blue-500 font-bold mt-2">${price} / night</p>
      <p className="text-yellow-500 mt-1">Rating: {rating}</p>
      {description && <p className="mt-4">{description}</p>}
    </div>
  );
};

export default PropertyDetail;
