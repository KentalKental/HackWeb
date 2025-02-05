function Footer() {
    return (
        <>
            <div className="container-expand  d-flex justify-content-around p-4" style={{ background: "#8f83ff", color: "white", borderTopLeftRadius: "90px", borderTopRightRadius: "90px",minHeight:""}}>
                <div>
                    <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", lineHeight: "0.75" }}>
                        BOND, 
                    </h1>
                    <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", lineHeight: "0.75" }}>
                        BUILD, 
                    </h1>
                    <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", lineHeight: "0.75" }}>
                        BREAKTHROUGH
                    </h1>
                </div>
                <div className="d-flex flex-column gap-4 justify-content-around" style={{ alignItems: "center", width: "40%" }}>
                    <div className="d-flex justify-content-around" style={{ gap: "1.5rem", fontSize: "1.5rem" }}>
                        <i className="bi bi-twitter" style={{ cursor: "pointer" }}></i>
                        <i className="bi bi-facebook" style={{ cursor: "pointer" }}></i>
                        <i className="bi bi-envelope-at-fill" style={{ cursor: "pointer" }}></i>
                        <i className="bi bi-linkedin" style={{ cursor: "pointer" }}></i>
                        <i className="bi bi-discord" style={{ cursor: "pointer" }}></i>
                    </div>
                    <div className="d-flex justify-content-between" style={{ gap: "2rem", fontWeight: "500", marginTop: "1rem" }}>
                        <a href="#" className="text-decoration-none" style={{ color: "white", textAlign: "center" }}>ABOUT US</a>
                        <a href="#" className="text-decoration-none" style={{ color: "white", textAlign: "center" }}>PRIVACY POLICY</a>
                        <a href="#" className="text-decoration-none" style={{ color: "white", textAlign: "center" }}>TERMS & CONDITION</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer