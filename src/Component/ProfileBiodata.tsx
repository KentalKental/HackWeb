import { useState } from "react";

import ProfileBiodataStyleCard from "./ProfileBiodataStyleCard";

function ProfileBiodata(props) {
    const [activeTab, setActiveTab] = useState("home");

    return (
        <>
            <ul className="nav nav-tabs m-2" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className={"nav-link " + (activeTab === "home" ? "active" : "")} onClick={() => setActiveTab("home")} type="button">Home</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className={"nav-link " + (activeTab === "style" ? "active" : "")} onClick={() => setActiveTab("style")} type="button">Style</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className={"nav-link " + (activeTab === "experience" ? "active" : "")} onClick={() => setActiveTab("experience")} type="button">Experience</button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                {activeTab === "home" && (
                    <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel">
                        <div className="container">
                            <h2>About Me</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                        </div>
                        <div className="container">
                            <h2>My Reason to Be a Mentor</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                        </div>
                        <div className="container">
                            <h2>My Portfolio</h2>
                            <p>Check out my website: </p>
                        </div>
                        <div className="container">
                            <h2>My Contacts</h2>
                            <p>Instagram: {props.instagram}</p>
                            <p>Twitter/X: {props.twitter}</p>
                            <p>LinkedIn: {props.linkedin}</p>
                            <p>Telegram: {props.telegram}</p>
                            <p>WhatsApp: {props.whatsapp}</p>
                            <p>Line ID: {props.lineid}</p>
                        </div>
                    </div>
                )}

                {activeTab === "style" && (
                    <div className="tab-pane fade show active d-flex p-3 w-100 justify-content-between" id="profile-tab-pane" role="tabpanel">
                        <div className="d-flex flex-column w-25">
                            <h1>Teaching Style</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugiat praesentium labore dicta repudiandae, doloribus et iure magni explicabo autem velit voluptatem totam quasi nulla. Quos excepturi quas minus ipsa soluta pariatur iure cupiditate rerum voluptates tenetur eius deleniti, blanditiis, sunt obcaecati magnam incidunt natus saepe et deserunt. Libero, ullam?</p>

                            <h1>Personality</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugiat praesentium labore dicta repudiandae, doloribus et iure magni explicabo autem velit voluptatem totam quasi nulla. Quos excepturi quas minus ipsa soluta pariatur iure cupiditate rerum voluptates tenetur eius deleniti, blanditiis, sunt obcaecati magnam incidunt natus saepe et deserunt. Libero, ullam?</p>

                            <h1>Feedback</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugiat praesentium labore dicta repudiandae, doloribus et iure magni explicabo autem velit voluptatem totam quasi nulla. Quos excepturi quas minus ipsa soluta pariatur iure cupiditate rerum voluptates tenetur eius deleniti, blanditiis, sunt obcaecati magnam incidunt natus saepe et deserunt. Libero, ullam?</p>
                        </div>
                        <div className="d-flex flex-column gap-5 w-50 ">
                            <ProfileBiodataStyleCard/>
                            <ProfileBiodataStyleCard/>
                        </div>
                    </div>
                )}

                {activeTab === "experience" && (
                    <div className="tab-pane fade show active" id="experience-tab-pane" role="tabpanel">
                        <div className="container">
                            <h2>Experience</h2>
                            <p>This is the experience tab content.</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default ProfileBiodata;
