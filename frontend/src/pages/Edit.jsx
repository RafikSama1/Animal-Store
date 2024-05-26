import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function Edit(){
    const {id} = useParams();
    const [animal, setAnimal] = useState([]);
    useEffect(()=>{
        axios
            .get(`http://localhost:3000/animals/${id}`)
            .then((response)=>setAnimal(response.data));
    }, []);
    
    const [name, setName] = useState(animal.name);
    const [birthdate, setBirthdate] = useState(animal.birthdate);
    const [type, setType] = useState(animal.type);
    const [breed, setBreed] = useState(animal.breed);

    const updateAnimal = async(e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3000/animals/${id}`, {
            name: name,
            birthdate: birthdate,
            type: type,
            breed: breed
        })};
    return(
        <>
            <div className="py-8 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 "> Updating {animal.name} info</h2>
                <p className="mb-8 font-light text-center text-gray-500 ">Please fill out the form below to update {animal.name}'s info in our database. Make sure to provide accurate and complete information.</p>
                <form onSubmit={updateAnimal} className="space-y-8">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
                        <input onChange={(e)=>{setName(e.target.value)}} value={name} type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"/>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Birthdate</label>
                        <input onChange={(e)=>{setBirthdate(e.target.value)}} value={birthdate} type="date" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"/>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Type</label>
                        <input onChange={(e)=>{setType(e.target.value)}} value={type} type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"/>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Breed</label>
                        <input onChange={(e)=>{setBreed(e.target.value)}} value={breed} type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"/>
                    </div>
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#872342] sm:w-fit focus:ring-4 focus:outline-none focus:ring-primary-300">Send</button>
                </form>
            </div>
        </>
    )
}

export default Edit;