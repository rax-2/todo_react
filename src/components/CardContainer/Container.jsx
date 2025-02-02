import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card/Card'

export default function Container() {
    const Data = useSelector(state => state.ToDoData.value)

    const NoData = () => {
        if (Data.length <= 0) {
            return (
                <div className='bg-[#EAF205] p-4 flex items-center justify-center rounded-2xl text-[#07261D] font-bold'>
                    <p>
                        Currently you Don't have anything to do..
                    </p>
                </div>
            )
        }
    }

    return (
        <div className=' p-3 '>
            {
                Data.map((Todo_Data, index) => {
                    return <Card data={Todo_Data} index={index} key={index} />
                })
            }
            {
                NoData()
            }
        </div>
    )
}
