import React from 'react'
import { useGlobalContext } from './contact'

const Search = () => {
    const {query,setQuery,isError}=useGlobalContext();
    
  return (
   <>
   <section className="search-section">
    <h2>Search your Favourite Movie</h2>
    <form onSubmit={(e)=>e.preventDefault()}>
    <div>
    <input type="text" placeholder='serach here' value={query} onChange={(e)=>setQuery(e.target.value)} />
    </div>
    </form>
    <div className="card-error">
    <p>{isError.show && isError.msg}</p>
    </div>
    </section>
   </>
  )
}

export default Search
