const cart = JSON.parse(localStorage.getItem("cartItems")) || [];


const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":

            //check if product is already exist
            const exist = state.find((x) => x.id === product.id)
            if (exist) {
                //increment the quantity
                let updateCart = state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x
                );
                localStorage.setItem("cartItems", JSON.stringify(updateCart));
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x
                );
            }
            else {
                const product = action.payload;
                localStorage.setItem("cartItems", JSON.stringify([
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]))
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }
            break;

        case "DELITEM":
            const exist1 = state.find((x) => x.id === product.id)
            if (exist1.qty === 1) {
                return state.filter((x) => x.id !== exist1.id);
            } else {
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty - 1 } : x

                );
            }
            break;

        default:
            return state;
            break;
    }

}


export default handleCart;