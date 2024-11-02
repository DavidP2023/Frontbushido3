import { IoCloseOutline } from "react-icons/io5";
import Logo from "../../../../../assets/logopopup.png";
import { useMemo, useState } from "react";

export const Popup = ({ orderPopup, setOrderPopup, shoppingCart, cleanShoppingCart }) => {

  const handleCleanCart = () => { 
    cleanShoppingCart();
    setOrderPopup(false);

   }

  const totalAmount = useMemo(() => {
    let total = 0
    for (const element of shoppingCart) {
      total += element.precio
    }
    return total;
  }, [shoppingCart])

  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm flex items-center justify-center">
            <div className="p-4 shadow-md bg-white dark:bg-gray-900 rounded-lg duration-200 w-[500px] relative">
              {/* header */}
              <div className="flex items-center justify-end">
                <IoCloseOutline
                  className="text-2xl cursor-pointer"
                  onClick={() => setOrderPopup(false)}
                />
              </div>
              <div className="flex flex-col items-center mt-4">
                <img src={Logo} alt="Logo" className="w-16 mb-4" />
                <h1 className="text-lg font-bold">Realizar Pedido</h1>
              </div>
              <div className=" py-5">
                {
                  shoppingCart.map(cart => {

                    return (


                      <div className="flex justify-between items-start w-full">
                        <p className="text-black font-bold">
                          {
                            cart.name
                          }
                        </p>
                        <p className="text-cyan-500 font-bold">
                          {
                            cart.precio.toLocaleString("en-US", { style: "currency", currency: "USD" })
                          }
                        </p>
                      </div>


                    )
                  })

                }
                <hr className="py-2 mt-2" />

                <div className="w-full justify-between flex">
                  <p>
                    {
                      'TOTAL'
                    }
                  </p>
                  <p>
                    {
                      totalAmount.toLocaleString("en-US", { style: "currency", currency: "USD" })
                    }
                  </p>
                </div>
                <button className=" px-3 py-2 bg-orange-500 text-white border-[1px] rounded-lg"
                  onClick={
                    handleCleanCart
                  }
                >
                Limpiar Carrito
                </button>

              </div>


            </div>
          </div>
        </div>

      )}
    </>
  );
};
