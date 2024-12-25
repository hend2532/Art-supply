import { Link } from "react-router-dom";
import ArtData from "/public/ArtData";
function SupplyList() {
    
  return (
    <div className="mt-[100px] mb-[60px]">
      <h1 className=" la-belle-aurore-regular text-center m-5 mt-8 text-[25px] font-semibold text-customPink opacity-70">
        Manage Your Art Supplies
      </h1>
      <div className="flex flex-wrap justify-center gap-6 m-3 p-3 ">
      {ArtData.map((art) => (
        <Link  to={`/stockTracker/${art.id}`} key={art.id} className="flex flex-col shadow-customShadow cursor-pointer rounded-lg overflow-hidden p-3 duration-100 hover:scale-105">
          <img src={art.image} alt={art.name} className="w-36" />
          <div className="text-[14px]">
            <h2 className=" text-customPink font-semibold">
              {art.name}
            </h2>
            <p className="text-gray-500">{art.category}</p>
            <p className="text-gray-500">Price : <span className="text-customPink">${art.price}</span> </p>
          </div>
        </Link>
      ))}
      </div>
    </div>
  );
}

export default SupplyList;
