import Products from "./Products"
import Stores from "./Stores"
import StripeConnect from "./StripeConnect"



const DashBoardCard =() => {
    return (
        <div>
            <div className="space-y-12">
                <StripeConnect />
                <Stores />
                <Products />
            </div>
        </div>
    )
}

export default DashBoardCard