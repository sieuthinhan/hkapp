import leadingimg from "../assets/leading.png";
import searchimg from "../assets/search.png";
import { useState } from "react";

function searchbar(search, setsearch) {

    return (
        <div className="search">
            <img src={leadingimg} alt="leadingimg" />

            <div>
                <input
                    type='text'
                    placeholder='Hinted search text'
                    value={search}
                    onChange={(e) => setsearch(e.target.value)}
                />

                <img src={searchimg} alt="searchimg" />
            </div>
        </div>
    )
}

export default searchbar