import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

const MyReport = () => {

    const id = parseInt(useParams().id)

    return (
        <div>
            <h1 className="centerContent">My Report</h1>
        </div>
    )
}

export default MyReport