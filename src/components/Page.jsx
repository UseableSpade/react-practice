import { useEffect } from "react";
import { useState } from "react";
import Paragraph from './Paragraph';

function Page({ data, setData }) {
    const [sortBy, setSortBy] = useState("asc");
    const [searchString, setSearchString] = useState("");
    const [filteredArray, setFilteredArray] = useState([]);

    const handleClick = () => {
        if (sortBy === "asc") {
            setSortBy("desc")
            setData(data => [...data].sort((a, b) => a.localeCompare(b)))
        } else {
            setSortBy("asc")
            setData(data => [...data].sort((a, b) => b.localeCompare(a)))
        }
    };

    useEffect(() => {
        if (searchString.length > 2) setFilteredArray([...data].filter(string => string.includes(searchString)))
    }, [searchString, setData, data])

    /* 
    useEffect(() => {
        sortBy === "asc"
            ? setData(data => [...data].sort((a, b) => a.localeCompare(b)))
            : setData(data => [...data].sort((a, b) => b.localeCompare(a)))
    }, [sortBy]); */

    return (
        <div className="page">
            <button onClick={handleClick}>sort by {sortBy}</button>
            <input type="text" placeholder="search" value={searchString} onChange={({ target }) => setSearchString(target.value)} />
            {searchString.length > 2
                ? filteredArray.map((text, index) => <Paragraph key={index} index={index} text={text} />)
                : data.map((text, index) => <Paragraph key={index} index={index} text={text} />)}
        </div>
    );
};

export default Page;