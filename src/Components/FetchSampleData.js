import React,{useState, useEffect} from 'react'
import Card from './Card';
import axios from 'axios'

function FetchSampleData() {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios('https://api.spacexdata.com/v3/launches?limit=100');
            console.log(result.data)
            setItems(result.data)
            setIsLoading(false);
        }
        fetchItems();
    }, [])

    return (
        <div>
            <Card isLoading={isLoading} items={items}/> 
        </div>
    )
}

export default FetchSampleData
