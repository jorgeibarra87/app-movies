import React from 'react'
import { MoviesGrid } from '../components/MoviesGrid'
import styles from "../App.module.css"

export function Index() {
    return (
        <div>
            <header>
                <h1 className={styles.title}>Movies</h1>
            </header>
            <main>
                <MoviesGrid />
            </main>
        </div>
    )
}