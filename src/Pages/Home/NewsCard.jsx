import { Link } from "react-router-dom";


const NewsCard = ({ aNews }) => {
    const { title, thumbnail_url,image_url, details,_id} = aNews;
    return (
        <div>
            <div className=" p-6 rounded-md shadow-md bg-gray-900 text-gray-50">
                <img src={image_url} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                <div className="mt-6 mb-2">
                    <span className="block text-xs font-medium tracking-widest uppercase text-violet-400">Quisque</span>
                    <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
                </div>
                {
                    details.length >150 ?
                     <p className="text-gray-100">{details.slice(0,150)} <Link to={`/news/${_id}`} className="text-blue-500">Read more...</Link></p>
                     :<p className="text-gray-100">{details}</p>
                }
            </div>
        </div>
    );
};

export default NewsCard;