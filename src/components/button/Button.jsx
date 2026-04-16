
import { useContext } from "react";
// import { useRouter } from "next/navigation";
import { TimelineContext } from "../context/TimeContext";
import { IoCall } from "react-icons/io5";
import { FaVideo } from "react-icons/fa";
import { IoMdText } from "react-icons/io";

const Button = ({ id, name }) => {
    // const router = useRouter();
    const { addTimeline } = useContext(TimelineContext);

    const handleClick = (type) => {
        const newEntry = {
            id,
            name, 
            type,
            time: new Date().toLocaleString(),
        };

        addTimeline(newEntry); 
        // router.push(`/timeline/${id}`);
    };

    return (
        <div className="flex mb-5 gap-4">
            <button 
                onClick={() => handleClick("call")}
                className="flex-1 bg-gray-100 p-3 rounded-lg flex flex-col items-center hover:bg-gray-200"
            >   
                <span className="flex items-center justify-center gap-2 text-xs mt-1"><IoCall /> Call</span>
            </button>

            <button
                onClick={() => handleClick("text")}
                className="flex-1 bg-gray-100 p-3 rounded-lg flex flex-col items-center hover:bg-gray-200"
            >
                <span className="flex items-center justify-center gap-2 text-xs mt-1"><IoMdText /> Text</span>
            </button>

            <button
                onClick={() => handleClick("video")}
                className="flex-1 bg-gray-100 p-3 rounded-lg flex flex-col items-center hover:bg-gray-200"
            >
                <span className="flex items-center justify-center gap-2 text-xs mt-1"><FaVideo /> Video</span>
            </button>
        </div>
    );
};

export default Button;