import React, { useEffect, useState } from 'react'
import styles from "../pages/Search.module.css"
import { ImSearch } from 'react-icons/im'
import { useNavigate } from "react-router"
import { useQuery } from '../hooks/useQuery';

export default function Search() {

    const query = useQuery();
    const search = query.get("search")

    const [searchText, setSearchText] = useState()
    const navigate = useNavigate();

    useEffect(() => {
        setSearchText(search || "")
    }, [search]);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/?search=" + searchText)

    }
    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input className={styles.searchInput} type="text" placeholder='Search movies' value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <button className={styles.searchButton} type="submit">
                    <ImSearch size={20} />
                </button>
            </div>
        </form>
    )
}
