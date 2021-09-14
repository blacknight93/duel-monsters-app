import { Switch, Route } from "react-router-dom";
import Decks from './pages/decks';
import EditCard from './pages/edit_card';
import EditMenu from './pages/edit_menu';
import Inventory from './pages/inventory';
import Add from './pages/add';
import Home from './pages/home';

const Main = () => {
    return (
        <Switch>
            <Route path={'/decks'} component={Decks}/>
            <Route path={'/edit_menu'} component={EditMenu}/>
            <Route path={'/edit'} component={EditCard}/>
            {/* <Route path={'/decks'} component={Decks}/> */}
            <Route path={'/inventory'} component={Inventory}/>
            <Route path={'/add'} component={Add}/>
            <Route path={'/'} component={Home}/>
        </Switch>
    )
}

export default Main;