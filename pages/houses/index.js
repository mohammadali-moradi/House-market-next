import React, { useEffect, useState } from 'react'
import database from '../../data/db.json'
import House from '@/components/modules/House'


function Houses() {

  const [houses, setHouses] = useState([...database.homes])
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("-1")
  const [page, setPage] = useState(1)

  useEffect(() => {
    const searchedHouse = database.homes.filter(house => house.title.includes(search))
    setHouses(searchedHouse)
  }, [search])

  useEffect(() => {
    switch (sort) {
      case "price": {
        const sortedHouses = [...houses].sort((a, b) => a.price - b.price)
        setHouses(sortedHouses)
        break;
      }
      case "roomCount": {
        const sortedHouses = [...houses].sort((a, b) => a.roomCount - b.roomCount)
        setHouses(sortedHouses)
        break;
      }
      case "meterage": {
        const sortedHouses = [...houses].sort((a, b) => a.meterage - b.meterage)
        setHouses(sortedHouses)
        break;
      }
      default: {
        setHouses([...database.homes])
      }
    }
  }, [sort])

  const paginationHandler = (event, page) => {
    event.preventDefault()

    const endIndex = 6 * page
    const startIndex = endIndex - 6 

    const paginatedHouses = database.homes.slice(startIndex, endIndex)
    setHouses(paginatedHouses)
  }
  return (
    <>
      <div className="home-section" id="houses">
        {/* top bar /\/\/\/\/\/\ searchbar & filtering */}
        <div className="home-filter-search">
          <div className="home-filter">
            <select defaultValue={sort} onChange={e => setSort(e.target.value)}>
              <option value="-1">انتخاب کنید</option>
              <option value="price">بر اساس قیمت</option>
              <option value="roomCount">بر اساس تعداد اتاق</option>
              {/* <option value="location">بر اساس ادرس</option> */}
              <option value="meterage">بر اساس اندازه</option>
            </select>
          </div>
          <div className="home-search">
            <input type="text" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="جستجو کنید" />
          </div>
        </div>
        <div className="homes">

          {houses.slice(0, 6).map(house => {
            return <House key={house.id} {...house} />
          })}

        </div>

        {/* pagination */}
        <ul className="pagination__list">
          {Array.from({ length: Math.ceil(database.homes.length / 6 )}).map((item, index) => {
            return (
              <li className="pagination__item"
                onClick={(event) => paginationHandler(event, index + 1)}
                key={index}
              >
                <a href="#" className="">{index + 1}
                </a>
              </li>
            )
          })}

        </ul>
      </div>
    </>
  )
}

export default Houses