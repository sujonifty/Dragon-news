import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import {useLoaderData} from "react-router-dom";
import NewsCard from "./NewsCard";

const Home = () => {
    
    const news = useLoaderData()
    console.log(news)
    return (
        <div className="font-poppins">
            <Header></Header>            
            <Navbar></Navbar>

            <BreakingNews></BreakingNews>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className=" col-span-1 lg:col-span-2">
                    {
                        news.map(aNews=><NewsCard key={aNews._id} aNews={aNews}></NewsCard>)
                    }
                </div>
                <div className="">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;