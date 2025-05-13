import House from '@/components/modules/House'
import React from 'react'
import dataBase from '../../../data/db.json'


function Houses() {
    // console.log(dataBase.homes);
    return (
        <>
            <div className="homes">
                {
                    dataBase.homes.slice(0,6).map(house => {
                        return <House key={house.id} {...house}/>
                    })
                }

            </div>
        </>
    )
}

export default Houses