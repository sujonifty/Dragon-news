import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
    return (
        <div>
            <div className="space-y-4">
                <h1 className="font-bold text-2xl text-left ">Login With</h1>
                <button className="btn w-full text-blue-500">
                    <FaGoogle />
                    Login With Google
                </button>
                <button className="btn w-full">
                    <FaGithub />
                    Login With GitHub
                </button>
            </div>
            <div>
                <h1 className="font-semibold text-2xl text-left my-6">Found on us</h1>
                <button className=" flex justify-start items-center gap-5 p-4 rounded-t-xl border mx-auto w-full ">
                    <span className=" text-blue-500"><FaFacebook /></span>
                    Facebook
                </button>
                <button className=" flex justify-start items-center gap-5 p-4  border mx-auto w-full">
                    <span className="text-sky-400"><FaTwitter /></span>
                    Twitter
                </button>
                <button className=" flex justify-start items-center gap-5 p-4 rounded-b-xl border mx-auto w-full">
                    <span className="text-rose-500"><FaSquareInstagram /></span>
                    Instagram
                </button>
            </div>
            <div className="text-center my-6">
                <h1 className="text-2xl text-left font-semibold">Q-Zone</h1>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;