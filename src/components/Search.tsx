"use client"
import React, {useEffect, useState} from 'react';
import classes from "../Style/Components/main.module.scss";
import {data} from "./data";

const Search = () => {
    const [cardList, setCardList] = useState(data);
    const [searchItem, setSearchItem] = useState("");

    const filter = (searchText: string, data: any[]) => {
        if (!searchText) {
            return data;
        }
        return data.filter(({ name }) =>
            name.toLowerCase().includes(searchText.toLowerCase())
        );
    };

    useEffect(() => {
        const Debounce = setTimeout(() => {
            const filtered = filter(searchItem, data);
            setCardList(filtered);
        }, 300);
        return () => clearTimeout(Debounce);
    }, [searchItem]);

    return (
        <>
        <div className={classes["Main__Search"]}>
            <label className={classes["Main__Search-label"]}>
                <input
                    id="search"
                    className={classes["Main__Search-label__input"]}
                    placeholder="Search the world's largest fan wiki platform"
                    name="s"
                    value={searchItem}
                    onChange={(e) => setSearchItem(e.target.value)}
                />
            </label>
            <button className={classes["Main__Search__button"]} type="submit">
                <svg
                    className="search-box__search-icon-submit"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 7.947C7.991 7.955 7.981 7.964 7.973 7.973C7.963 7.982 7.955 7.991 7.946 8.001C7.315 8.619 6.451 9 5.5 9C3.57 9 2 7.43 2 5.5C2 3.571 3.57 2 5.5 2C7.429 2 9 3.571 9 5.5C9 6.451 8.618 7.316 8 7.947ZM11.707 10.293L10.03 8.616C10.641 7.73 11 6.656 11 5.5C11 2.468 8.532 0 5.5 0C2.467 0 0 2.468 0 5.5C0 8.533 2.467 11 5.5 11C6.655 11 7.729 10.642 8.615 10.03L10.292 11.707C10.488 11.903 10.744 12 11 12C11.255 12 11.511 11.903 11.707 11.707C12.097 11.317 12.097 10.684 11.707 10.293Z"
                        fill="#520044"
                    ></path>
                </svg>
            </button>

        </div>
    <div className={classes["Main__Catalog"]}>
        {cardList.map((i) => (
            <div className={classes["Main__Catalog__card"]}>
                <img className={classes["Main__Catalog__card-img"]} src={i.img} />
                <p className={classes["Main__Catalog__card-naming"]}>{i.name}</p>
                <h4 className={classes["Main__Catalog__card-description"]}>
                    {i.description}
                </h4>
            </div>
        ))}
    </div></>
    );
};

export default Search;