import leadingimg from "../assets/leading.png";
import searchimg from "../assets/search.png";
import { useState } from "react";

function searchbar() {

    return (
        <div className="search">
            <img src={leadingimg} alt="leadingimg" />

            <div>
                <input
                    type='text'
                    placeholder='Hinted search text'
                />

                <img src={searchimg} alt="searchimg" />
            </div>
        </div>
    )
}

export default searchbar