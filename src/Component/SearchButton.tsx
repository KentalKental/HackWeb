import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

// Button Component
function SearchButton(props: { icon: string | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) {
    return (
        <button type="button" className="btn d-flex align-items-center gap-2" style={{background: "#f0f0f0", padding: "8px 16px", borderRadius: "5px"}}>
            <i className={props.icon}></i>
            <span>{props.name}</span>
        </button>
    );
}

export default SearchButton;
