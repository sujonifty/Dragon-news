import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
        // console.log(categories);
    },[])
    return (
        <div className="space-y-4">
            <h1>Left Side Navbar</h1>
            {
                categories.map((category)=><NavLink to={`/category/${category.id}`} className="block font-semibold text-lg text-left m-4" key={category.id}>{category.name}</NavLink>)
            }
        </div>
    );
};

export default LeftSideNav;