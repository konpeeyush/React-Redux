import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { removeFromCart } from "../store/cartSlice";

const Cards = ({id, product, title, price, description, category, image, rating, btnColor, content, onClick }) => {
    const dispatch = useDispatch();

    const addProductToCart = (product) => {
        dispatch(addToCart(product));
    }

    const removeProductFromCart = (id) => {
        dispatch(removeFromCart({ id }));

    }

    const handleClick = () => {
        if (onClick === "add") {
            addProductToCart(product);
        } else {
            removeProductFromCart(id);
        }
    }

    return (
        <div>
            <Card className="h-100" style={{ width: '18rem' }}>
                <div className="text-center">
                    <Card.Img variant="top" src={image} style={{ width: "100px", height: "130px" }} />
                </div>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        INR: ₹{price}
                    </Card.Text>
                </Card.Body>

                <Card.Footer className="text-center" style={{ background: "white" }}>
                    <Button variant={btnColor} onClick={() => handleClick()}>{content}</Button>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default Cards;