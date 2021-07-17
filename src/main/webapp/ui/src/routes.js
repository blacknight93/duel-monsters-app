import { Switch, Route } from "react-router-dom";
import Inventory from './pages/inventory';
import Add from './pages/add';
import Home from './pages/home';

const Main = () => {
    return (
        <Switch>
            <Route path={'/inventory'} component={Inventory}/>
            <Route path={'/add'} component={Add}/>
            <Route path={'/'} component={Home}/>
        </Switch>
    )
}

export default Main;