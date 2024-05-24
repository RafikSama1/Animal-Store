import { Link } from "react-router-dom";

function AnimalsList(){
    const animals = [1, 2, 3, 4, 5];
    return (
        <div className="flex flex-col gap-2">
            {animals.map((animal) => {
                <Link key={animal} to={`/animals/${animal}`}> Profile {animal}</Link>
            })}
        </div>
    );
};

export default AnimalsList;