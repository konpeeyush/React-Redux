import { STORE_API_URL } from "../utils/constants";
import { Cards } from "../components";
import { useApi } from '../Hooks'

const Product = () => {
    // Custom Hook
    const products = useApi(STORE_API_URL)
    return (
        <div>
            <h2 style={{ textAlign: 'center' }}> Product Dashboard</h2>
            <div className="row">
                {
                    products.map((product) => {
                        const { id, title, price, description, category, image, rating } = product;
                        return (
                            <div key={id} className="col-md-3" style={{ marginBottom: '10px' }}>
                                <Cards
                                    product={product}
                                    title={title}
                                    price={price}
                                    description={description}
                                    category={category}
                                    image={image}
                                    rating={rating}
                                    btnColor={"primary"}
                                    content={"Add to Cart"}
                                    onClick={"add"}
                                />
                            </div>
                        )
                    }
                    )
                }
            </div>

        </div>
    );
};

export default Product;
