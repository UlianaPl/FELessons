import WishList from "../layouts/WishList";
import {useEffect} from "react";

function WishListPage () {

    useEffect(() => {
        document.title = 'Wish list';
    },[]);

    return (
        <WishList />
    )
}

export default WishListPage;