import React from 'react'
import { IoAddOutline } from "react-icons/io5";
import { addTodo } from '../../redux/Data/DataSlice';
import { useDispatch, useSelector } from 'react-redux';


export default function NavBar() {
    const AddButtonDispControl = useSelector(state => state.AddControl.value)
    const dispatch = useDispatch()
    return (
        <nav className='bg-[#F24405] p-2'>
            <ul className='flex justify-between items-center'>
                <li className='font-bold text-[#EAF205] text-[20px]'>LOGO</li>
                <li>
                    <button className='flex justify-center items-center bg-[#F27405] pt-[2px] pb-[2px] pr-[8px] pl-[8px] rounded text-[#EAF205] text-[14px] cursor-pointer'
                        onClick={() => {
                            // console.log('add clicked');
                            dispatch(addTodo())
                        }}
                        hidden={AddButtonDispControl}
                    >
                        <p>Add</p>
                        <IoAddOutline className='font-bold' />
                    </button>
                </li>
            </ul>
        </nav>
    )
}
