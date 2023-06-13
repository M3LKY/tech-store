import React, { useContext, useState } from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
import { useNavigate } from "react-router-dom";
import data from '../../../data/products.json'
const Search = ({ setSearchModal }) => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const onChange = (e) => {
        setQuery(e.target.value);
    };


    return (
        <div className="search-modal">
            <div className="form-field">
                <input
                    autoFocus
                    type="text"
                    placeholder=""
                    onChange={onChange}
                />
                <MdClose
                    className="close-btn"
                    onClick={() => setSearchModal(false)}
                />
            </div>
            <div className="search-result-content">
                {!data.products.length && (
                    <div className="start-msg">
                        Start typing to see products you are looking for.
                    </div>
                 )}
                <div className="search-results">
                    {data.products.filter((item) => {
                        if(query == ""){
                            return item;
                        }else if(item.title.toLowerCase().includes(query.toLowerCase())){
                            return item;
                        }
                    }).map((item) => (
                        <div
                            className="search-result-item"
                            key={item.id}
                            onClick={() => {
                                navigate("/tech-store/product/" + item.id);
                                setSearchModal(false);
                            }}
                        >
                            <div className="image-container">
                                <img src={item.thumbnail} />
                            </div>
                            <div className="prod-details">
                                <span className="name">
                                    {item.title}
                                </span>
                                <span className="desc">
                                    {item.description}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Search;
