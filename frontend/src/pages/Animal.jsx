import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Animal(){
    const {id} = useParams();
    const [animal, setAnimal] = useState([]);

    useEffect(()=>{
        axios
            .get(`http://localhost:3000/animals/${id}`)
            .then((response)=>setAnimal(response.data));
            
    }, []);
    return (
        <>
            <div className="flex flex-col items-center">
                <div className="w-full max-w-md p-4 bg-white border border-[#3aeb8a] rounded-lg shadow">
                    <div className="flex items-center justify-between mb-4">
                        <h5 className="text-xl font-bold leading-none text-gray-900">{animal.name}</h5>
                    </div>
                    <div className="flow-root">
                    <ul role="list" className="divide-y divide-gray-200">
                        <li className="py-3" key={animal._id}>
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"> */}
                                </div>
                                <div className="flex-1 min-w-0 ms-4">
                                    <p to={`/animals/${animal._id}`} className="text-sm font-medium text-gray-900 truncate">
                                        {animal.type}
                                    </p>
                                    <p className="text-sm text-gray-500 truncate">
                                        {animal.birthdate}
                                    </p>
                                    <p className="text-sm text-gray-500 truncate">
                                        {animal.breed}
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        </>
    );
};

export default Animal;