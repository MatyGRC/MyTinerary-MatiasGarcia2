import React from 'react'

function Article({ array }) {
    console.log(array)
    
    const renderCity = (city, index) => {
        return (
            <div className="w-64 h-40 mt-4 bg-white shadow-md rounded-lg overflow-hidden relative transform transition-transform hover:scale-105" key= {index}>
        <img src={city.image} alt="Image1" />
            <div className="absolute top-0 px-6 py-4 justify-center">
                <h3 className="text-white font-bold text-lg absolute"> {city.country}</h3>
                 <p className="font-bold text-white">.</p>
                <h4 className="font-bold text-emerald-700"> {city.city}</h4>
            </div>
        </div>
        )
    }
  return (
    <>
    <div className=" flex flex-wrap flex-col gap-2 md:flex-row items-center justify-center space-x-2">
        {array?.map((city, index)=> renderCity(city, index))}    
        </div>
        {/* <div className=" flex flex-wrap flex-col gap-2 md:flex-row items-center justify-center space-x-2">
        {arrayCities2.map(renderCity)}
        </div> */}
        </>
    )
}

export default Article