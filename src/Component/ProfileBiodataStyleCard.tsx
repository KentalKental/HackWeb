function ProfileBiodataStyleCard() {
    return (
        <>
            <div className="card">
                <div className="card-header d-flex justify-content-between">
                    <div className="card-user">
                        <h2>Alota Bushi</h2>
                        <p className="text-mute">ID27021023456</p>
                    </div>
                    <div className="card-rating">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                    </div>
                </div>
                <div className="card-body">
                    <h2>Review</h2>
                    <div className="card-feedback ">
                        <p className="text-italic">
                            “One of the best coaching sessions
                            I've ever had in my career. All of Jerome's
                            insights led my team and I to our first
                            ever hackathon win! 5/5
                        </p>
                    </div>
                    <h2>Collaborated In</h2>
                    <p text-muted>Samsung Inovation Batch 6 | 2025</p>
                </div>
            </div>
        </>
    )
}

export default ProfileBiodataStyleCard;