import { useEffect, useState } from "react";

export default function useFilterData(initialData, initialFilters = []){
    const [data, setData] = useState(initialData)   

     const [filters, setFilters] = useState(initialFilters)

    useEffect(()=>{
        let filteredData = initialData;

        filters.forEach(filterFunc => {
            filteredData = filterFunc(filteredData)
        })
        setData(filteredData)
    }, [initialData, filters])

    const updateFilters = (newFilters) => {
        setFilters(newFilters)
    }
    return {
        filteredData: data, updateFilters
    }
}