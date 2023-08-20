import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
function Random()
{
    const[gif , setGif] = useState('');
    const[loading , setLoading] = useState(false);
    async function fetchGif()
    {
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=A93DmsJpZPVEQDDu6lbnDpfOJbJR8CvZ&tag=&rating=g`;
        const {data}  = await axios.get(url);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
    }

    useEffect(function(){
        fetchGif();
    },[]);
    function clickHandler()
    {
        fetchGif();
    }
    return(
        <div className="w-1/2  bg-green-500  border-2 border-black  rounded-xl flex flex-col items-center mt-[15px] gap-y-5 overflow-hidden">
            <h1 className="text-center font-extrabold text-2xl uppercase  mt-[15px]">A Random Gif</h1>
            { loading ? (<Spinner></Spinner>) : (<img src={gif} className=" max-h-max"/>)}
            <button onClick={clickHandler} className="w-10/12 bg-green-100 rounded-md text-lg py-2 mb-[20px]">Generate</button>
        </div>
    );
}



export default Random;