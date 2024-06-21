import { Button } from "./ui/button"


const StripeConnect = () => {
    return (
        <div>
            <div className="space-y-4 p-4 border-[1px] border-blue-200 rounded-lg shadow-sm">
                <div>
                    <h1 className="text-3xl font-semibold">Connect to Stripe</h1>
                    <h3 className="text-muted-foreground">Connect your store to stripe to start accepting payments</h3>
                </div>
                
                <Button>Connect to Stripe</Button>
            </div>
        </div>
    )
}

export default StripeConnect