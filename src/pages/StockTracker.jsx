import { useParams } from "react-router-dom";
import ArtData from "/public/ArtData";
import { useState } from "react";

function StockTracker() {
  const { id } = useParams();
  const [showPopup, setShowPopup] = useState(false); 
  const [selectedQuantity, setSelectedQuantity] = useState(0); 
  const [updatedArtData, setUpdatedArtData] = useState(ArtData); 

  const handleReorder = () => {
    const updatedData = updatedArtData.map((art) => {
      if (art.id === Number(id)) {
        return { ...art, quantity: selectedQuantity }; 
      }
      return art;
    });
    setUpdatedArtData(updatedData); 
    setShowPopup(false);
  };

  return (
    <div className="mt-[100px]">
      <h1 className="la-belle-aurore-regular text-center m-5 mt-8 text-[25px] font-semibold text-customPink opacity-70">
        Stock Tracker
      </h1>
      {updatedArtData.map((art) => {
        if (art.id === Number(id)) {
          return (
            <div key={art.id} className="flex flex-col justify-center items-center gap-4">
              <div className="flex justify-center items-center gap-4">
                <img src={art.image} alt={art.name} className="w-48" />
                <div className="text-[16px]">
                  <h2 className="text-customPink font-semibold">{art.name}</h2>
                  <p className="text-gray-400">{art.category}</p>
                  <p className="text-gray-500">
                    Price : <span className="text-customPink">${art.price}</span>{" "}
                  </p>
                  <p className="text-gray-500">
                    Quantity : <span className="text-customPink">{art.quantity}</span>
                  </p>
                  <p className="text-gray-500 w-64 mt-4">
                    Description : <span className="text-customPink block">{art.description}</span>
                  </p>
                </div>
              </div>
              {art.quantity < 10 && (
                <div className="bg-[#D32F2F] text-white p-3 rounded-md mt-4">
                  <p className="font-semibold">Low Stock Alert!</p>
                  <p>Only {art.quantity} items left in stock. Please reorder soon!</p> 
                  <button
                    onClick={() => setShowPopup(true)} 
                    className="text-[13px] text-[#D32F2F] bg-slate-100 rounded-md p-2 m-2 hover:bg-white float-end"
                  >
                    Reorder Now
                  </button>
                </div>
              )}
            </div>
          );
        }
      })}
      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-customPink font-semibold text-lg">Reorder Item</h2>
            <div className="mt-4">
              <label htmlFor="quantity" className="block text-gray-500">Enter Quantity :</label>
              <input
                type="number"
                id="quantity"
                value={selectedQuantity}
                onChange={(e) => setSelectedQuantity(Number(e.target.value))}
                className="w-full text-slate-500 border border-customPink border-1 border-solid outline-none rounded-md p-2 mt-2"
                min="1"
              />
            </div>
            <div className="mt-4 flex justify-between gap-2">
              <button
                onClick={() => setShowPopup(false)} 
                className="bg-gray-400 hover:bg-slate-500 text-white p-2 rounded-lg w-full"
              >
                Cancel
              </button>
              <button
                onClick={handleReorder} 
                className="bg-[#d32f2f] hover:bg-[#d32f2fdc] text-white p-2 rounded-lg w-full"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StockTracker;
