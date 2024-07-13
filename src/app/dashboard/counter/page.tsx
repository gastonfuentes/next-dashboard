import { CartCounter } from "@/app/shopping-cart/components";

export const metadata = {
    title: 'Shopping cart page',
    description: 'un simple contador'
}


export default function CounterPage() {

    return (

        < div className="flex flex-col items-center justify-center w-full h-full" >
            <span>productos en el carrito</span>

            <CartCounter value={5} />

        </div >
    );
}