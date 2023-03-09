import React from 'react'
import Search from '../components/Search.jsx'
import { MoviesGrid } from '../components/MoviesGrid.jsx'

export function LandingPage() {
    return (
        <div>
            <Search />
            <MoviesGrid />
        </div>

    )
}
