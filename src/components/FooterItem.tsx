

interface FooterItemProp{
    title: string,
    subList: string[]
}
const FooterItem = ({title,subList}:FooterItemProp) => {
    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-lg font-medium ">{title}</h1>
            <div>
                {subList.map((items,index) => (
                    <div className="text-sm font-normal" key={index}>{items}</div>
                ))}
            </div>
        </div>
    )
}

export default FooterItem