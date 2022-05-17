import { useState, useEffect } from "react"
import axios from "axios"
import apiUtils from "../utils/apiUtils";
import Select from "react-select"

const URL = apiUtils.getUrl()

const CreateReport = () => {
    const [parkingAreas, setParkingAreas] = useState([]);
    const [selectedParkingAreas, setSelectedParkingAreas] = useState([]);

    const options = []
    for (let i = 0; i < parkingAreas.length; i++) {
        const currentobj = { value: parkingAreas[i], label: parkingAreas[i] }
        options.push(currentobj)
    }

    const handleChange = (e) => {
        const selected = e.map(obj => {
            return obj.value
        })
        setSelectedParkingAreas(selected)
    }

    useEffect(() => {
        const getParkingAreas = async () => {
            const response = await axios.get(URL + '/parkingareas')
            setParkingAreas(response.data.parkingareas);
        }
        getParkingAreas()
    }, []);

    return (
        <div>
            <h1 className="centerContent">Overskrift</h1>
            <div className="centerContent container">
                <Select
                    onChange={handleChange}
                    isMulti
                    name="parkingAreas"
                    options={options}
                    className="basic-multi-select"
                    classNamePrefix="select"
                />
            </div>
        </div>
    )
}

export default CreateReport