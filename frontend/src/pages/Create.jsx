import { useState } from "react";
import axios from "axios";


function Create(){
    const [name, setName] = useState('');
    const [birthdate, setBirthdate] = useState();
    const [type, setType] = useState('');
    const [breed, setBreed] = useState('');

    const addAnimal = async(e) => {
        e.preventDefault();
        await axios.post('http://localhost:3000/animals', {
            name: name,
            birthdate: birthdate,
            type: type,
            breed: breed
        })};
    return (
        <>
            <div className="py-8 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 "> Add new animal</h2>
                <p className="mb-8 font-light text-center text-gray-500 ">Please fill out the form below to add a new animal to our database. Make sure to provide accurate and complete information.</p>
                <form onSubmit={addAnimal} className="space-y-8">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
                        <input onChange={(e)=>{setName(e.target.value)}} type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="Name" required/>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Birthdate</label>
                        <input onChange={(e)=>{setBirthdate(e.target.value)}} type="date" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" required/>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Type</label>
                        <input onChange={(e)=>{setType(e.target.value)}} type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="Type" required/>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Breed</label>
                        <input onChange={(e)=>{setBreed(e.target.value)}} type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="Breed" required/>
                    </div>
                    <input type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#872342] sm:w-fit focus:ring-4 focus:outline-none focus:ring-primary-300"/>
                </form>
            </div>
        </>
    );
};

export default Create;