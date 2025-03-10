import SubCategoriesCard from "./SubCategoriesCard";
import "../SubCategoriesCard.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SubCategories() {

    const location = useLocation();
    const { title, imageUrl, ids } = location.state || {};
    const [subcategories, setSubcategories] = useState([]);
    
    
    useEffect(() => {
        if (ids) {
            fetch(`http://localhost:8086/api/subcategory/${ids}`)
                .then(response => response.json())
                .then(data => setSubcategories(data))
                .catch(error => console.error("Error fetching subcategories:", error));
        }
    }, [ids]);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    console.log("Location state:", location.state);

    console.log("Fetching subcategories for catMasterID:", ids);
     console.log(subcategories)

    return (
        <div className="subcategories-tour-container">
            <div className="header" style={{ backgroundImage: `url(${imageUrl})` }}>
                <div className="overlay"></div>
                <h1 className="tour-name">{title}</h1>
            </div>
            <div className="subcategories-details">
                {subcategories.map((packageData, index) => (
                    <div key={index} className="w-full sm:w-1/2 md:w-1/3">
                        <SubCategoriesCard {...packageData} />
                    </div>
                ))}
            </div>
        </div>
    );
};