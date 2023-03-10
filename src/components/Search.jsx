import styles from "../pages/Search.module.css"
import { ImSearch } from 'react-icons/im'
import { useNavigate } from "react-router"
import { useQuery } from '../hooks/useQuery';

export default function Search() {

    const query = useQuery();
    const search = query.get("search")

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

    }
    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input className={styles.searchInput} type="text" placeholder='Search movies' value={search} onChange={(e) => {
                    const value = e.target.value;
                    navigate("/?search=" + value);
                }} />
                <button className={styles.searchButton} type="submit">
                    <ImSearch size={20} />
                </button>
            </div>
        </form>
    )
}
