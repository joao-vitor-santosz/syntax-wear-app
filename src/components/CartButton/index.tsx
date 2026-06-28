import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import IconCart from "@/assets/images/icon-cart.png";

interface CartButtonProps {
    onClick?: () => void;
}

export const CartButton = ({ onClick }: CartButtonProps) => {
    const { cart } =
        useContext(CartContext);

    return(
        <button
        className="relative cursor-pointer flex items-center"
        onClick={onClick}
      >
        <img src={IconCart} alt="Ícone carrinho de compras" />
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-error text-white text-[0.65rem] font-bold flex items-center justify-center shadow-lg">
            {cart.length}
          </span>
        )}
      </button>
    )
}