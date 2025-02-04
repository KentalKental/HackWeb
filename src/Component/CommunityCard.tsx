import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react"

function CommunityCard(props: { image: string | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined }){
    return(
        <div className="card border-1">
            <img src={props.image} alt="" className="card-img img-fluid" />
            <div className="card-body">
                <div className="card-title">
                    {props.name}
                </div>
                <div className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, excepturi.
                </div>
            </div>
        </div>
    )
}

export default CommunityCard