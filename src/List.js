import axios from "axios";
import { useEffect, useState } from "react";
import Add from "./Add";
import Edit from "./Edit";

export default function List() {
    let [list, setList] = useState([]);
    let [show, setIsShow] = useState(false);
    let [show1, setIsShow1] = useState(false);
    let [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/students').then(x => {
            setList(x.data)
        });
    }, []);

    const handleEdit = (item) => {
        setSelectedItem(item);
        setIsShow1(true);
    };

    return (
        <>
            <button onClick={() => setIsShow(!show)}>Add</button>
            {show && <Add />}
            {list.map((item, index) => (
                <div key={index}>
                    <h2>
                        {item.id}, {item.name}, {item.description}, {item.action}, {item.score}{' '}
                        <button onClick={() => handleEdit(item)}>Edit</button>
                        <button onClick={()=>{
                            axios.delete(`http://localhost:3000/students/${item.id}`).then(() => {
                                window.location.reload();
                            });
                        }}>Delete</button>
                    </h2>
                    {selectedItem && selectedItem.id === item.id && <Edit item={selectedItem} />}
                </div>
            ))}
        </>
    );
}
