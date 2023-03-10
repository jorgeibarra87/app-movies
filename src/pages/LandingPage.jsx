import React from 'react'
import Search from '../components/Search.jsx'
import { MoviesGrid } from '../components/MoviesGrid.jsx'
import { useQuery } from '../hooks/useQuery';
import { useDebounce } from '../hooks/useDebounce.jsx';

export function LandingPage() {

    const query = useQuery();
    const search = query.get("search")

    const debounceSearch = useDebounce(search, 500)

    return (
        <div>
            <Search />
            <MoviesGrid key={debounceSearch} search={debounceSearch} />
        </div>

    )
}
