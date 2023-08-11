import { Outlet } from "react-router-dom";
import { NavBarComponent } from "../components"
import { Provider } from "react-redux";
import store from "../store";

const Header = () => {
    return (
        <>
            <Provider store={store}>
                <NavBarComponent />
                <main>
                    <Outlet />
                </main>
            </Provider>
        </>
    )

};

export default Header;
