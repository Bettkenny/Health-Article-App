import React from "react"
import pina from "../image/pina.png"

function Home() {
    return (
        <div className= "Home-div">
        <div className= "Home">  
        <h1 className="home-head" > HEALTH-ARTICLE-APP</h1>
        <p className="home-par" >"Thank you for visiting our extensive resource for health articles. 
        Our goal is to give you up-to-date, trustworthy information on a variety of health-related subjects.
        Our team of knowledgeable writers and medical experts creates thoughtful articles about a wide range of topics. <br></br> 
        Our platform provides useful insights to help you make decisions regarding your health and well-being, whether you're searching for detailed assessments of state-of-the-art medical research or for doable advice on living a better lifestyle.
         Discover our extensive library of articles, keep up to date, and give yourself the tools you need to live a longer, healthier life."</p>
        </div>
        <img src={pina} alt="medicine" className="pina"></img>
        </div>
    )
}
export default Home 