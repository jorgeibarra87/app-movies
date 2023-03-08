import React from 'react'
import styles from "../App.module.css"
import { MovieDetails } from './MovieDetails'
import { LandingPage } from './LandingPage.jsx'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";


export function Index() {
    return (
        <Router>
            <header>
                <Link to="/">
                    <h1 className={styles.title}>Movies</h1>
                </Link>
            </header>
            <main>
                <Routes>
                    <Route path="/movies/:movieId" element={<MovieDetails />} />
                    <Route path="/" element={<LandingPage />} />
                </Routes>
            </main>
        </Router>
    )
}
