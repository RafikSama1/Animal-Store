import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

function AnimalsList(){
    const [animals, setAnimals] = useState([]);

    const deleteAnimal = async(id) => {
        await axios.delete(`http://localhost:3000/animals/${id}`);
        const newAnimals = animals.filter((animal) => animal._id != id);
        setAnimals(newAnimals);
    };

    useEffect(()=>{
        axios
            .get('http://localhost:3000/animals')
            .then((response)=>setAnimals(response.data));
    }, []);

    return (
        <>
        <div className="flex flex-col items-center">
        <div className="w-full max-w-md p-4 bg-white border border-[#872342] rounded-lg shadow">
                <div className="flex items-center justify-between mb-4">
                    <h5 className="text-xl font-bold leading-none text-gray-900">Animals List</h5>
                    <NavLink to={'/create'} className="text-white font-medium bg-[#3aeb8a] px-4 py-1 rounded-lg shadow">Add</NavLink>
                </div>
                <div className="flow-root">
                    <ul role="list" className="divide-y divide-gray-200">
                    {animals.map((animal)=>{
                        return(
                            <li className="py-3" key={animal._id}>
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"> */}
                                    </div>
                                    <div className="flex-1 min-w-0 ms-4">
                                        <NavLink to={`/animals/${animal._id}`} className="text-sm font-medium text-gray-900 truncate">
                                            {animal.name}
                                        </NavLink>
                                        <p className="text-sm text-gray-500 truncate">
                                            {animal.birthdate}
                                        </p>
                                    </div>
                                    <div className="items-center text-base font-semibold text-gray-900 flex gap-2">
                                            <NavLink to={`/edit/${animal._id}`} className="text-white font-medium bg-[#34a1cc] ml-2 px-3 py-1 rounded-lg shadow">Edit</NavLink>
                                            <button onClick={()=>deleteAnimal(animal._id)} className="text-white font-medium bg-[#872342] px-3 py-1 rounded-lg shadow">Remove</button>
                                    </div>
                                </div>
                            </li>
                        ) 
                    })}
                    </ul>
                </div>
            </div>
        </div>
            
        </>
    );
};

export default AnimalsList;