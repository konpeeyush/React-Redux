import { useSelector } from "react-redux";
import { Cards } from "../components";

const Cart = () => {
    const productCart = useSelector((state) => state.cart);
    return (
        <div>
            <h2>Cart</h2>
            <div className="row">
                {
                    !productCart.length ? <h3>Cart is empty</h3> : (
                        productCart.map((product) => {
                            const { id, title, price, description, category, image } = product;
                            return (
                                <div key={id} className="col-md-3" style={{ marginBottom: '10px' }}>
                                    <Cards
                                        id={id}
                                        product={product}
                                        title={title}
                                        price={price}
                                        description={description}
                                        category={category}
                                        image={image}
                                        btnColor={"danger"}
                                        content={"Remove from Cart"}
                                        onClick={"remove"}
                                    />
                                </div>
                            )
                        })
                    )

                }
            </div>
        </div>
    )
};

export default Cart;
