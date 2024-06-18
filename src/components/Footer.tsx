import FooterItem from "./FooterItem"
import Logo from "./Logo"
import NewsLetter from "./Newsletter"



const Footer = () => {

    const FooterItems = [
        {title:"Credits",items:["mention","mention","mention","mention","mention"]},
        {title:"Help",items:["mention","mention","mention","mention","mention"]},
        {title:"Social",items:["mention","mention","mention","mention","mention"]},
        {title:"Works",items:["mention","mention","mention","mention","mention"]},

    ]
    return (
        <div className="mt-4 w-full h-full p-3">
            <div className="grid grid-cols-2 md:grid-cols-8 gap-x-5 space-y-6">
                <div className="col-span-2 items-start ">
                    <Logo />
                </div>
                <div className="col-span-2 md:col-span-4  flex space-x-12">
                    {FooterItems.map((footer) => (
                        <FooterItem key={footer.title} title={footer.title} subList={footer.items} />
                    ))}
                </div>
                <div className="col-span-2">
                    <NewsLetter />
                </div>
            </div>
        </div>
    )
}

export default Footer