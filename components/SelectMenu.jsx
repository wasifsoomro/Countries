import React from 'react'

export default function SelectMenu({selectRegion, setSelectRegion}) {
  return (
    <select className="filter-by-region" value={selectRegion} onChange={(e)=> setSelectRegion(e.target.value)}>
      <option hidden="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  )
}
