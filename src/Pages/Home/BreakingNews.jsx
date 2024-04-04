import Marquee from "react-fast-marquee";
import { NavLink } from "react-router-dom";


const BreakingNews = () => {
    return (
        <div>
            <div className="flex">
                <button className="btn bg-pink-500 text-white ">Breaking news</button>
                <Marquee className="space-x-10"  pauseOnHover={true} speed={150}>
                <NavLink to="/">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as... </NavLink>
                <NavLink to="/">I can be a React component, multiple React components, or just some text...</NavLink>
                <NavLink to="/">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as... </NavLink>
                </Marquee>
            </div>
        </div>
    );
};

export default BreakingNews;