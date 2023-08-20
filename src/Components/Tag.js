import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
function Tag()
{
    const[gif , setGif] = useState('');
    const[loading , setLoading] = useState(false);
    const[tag , setTag] = useState('');
    async function fetchGif()
    {
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=A93DmsJpZPVEQDDu6lbnDpfOJbJR8CvZ&tag=${tag}`;
        const {data}  = await axios.get(url);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
    }

    function changeHandler(event)
    {
        setTag(event.target.value);
    }
    useEffect(function(){
        fetchGif();
    },[]);
    function clickHandler()
    {
        fetchGif();
    }
    return(
        <div className="w-1/2 bg-blue-600  border-2 border-black  rounded-xl flex flex-col items-center mt-[15px] gap-y-5 overflow-hidden">
            <h1 className="text-center font-extrabold text-2xl uppercase  mt-[15px]">{`Random ${tag} Gif`}</h1>
            { loading ? (<Spinner></Spinner>) : (<img src={gif} className=" max-h-max"/>)}
            <input type="text" className="w-10/12 bg-blue-100 rounded-md text-lg py-2 mb-[3x] text-center" onChange={changeHandler}/>
            <button onClick={clickHandler} className="w-10/12 bg-green-100 rounded-md text-lg py-2 mb-[3px]">Generate</button>
        </div>
    );
}



export default Tag;