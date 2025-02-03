import React, { useState, useRef, useEffect } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { IoSaveSharp } from 'react-icons/io5';
import { deleteTodo, editTodo } from '../../redux/Data/DataSlice';
import { useDispatch } from 'react-redux';
import { setSwitchofAddCtrl } from '../../redux/AddButtunControll/Addctrl';
import { BiSolidMessageSquareEdit } from "react-icons/bi";
export default function Card({ data, index }) {
    const [Edit, setEdit] = useState(data === '');
    const [inputValue, setInputValue] = useState(data);
    const inputRef = useRef(null);
    const dispatch = useDispatch();


    useEffect(() => {
        if (Edit && inputRef.current) {
            inputRef.current.focus();
        }
        dispatch(setSwitchofAddCtrl(Edit))
    }, [Edit]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSave = () => {
        if (inputValue) {
            dispatch(editTodo({ index, inputValue }));
            setEdit(false)
        } else {
            setEdit(true)
            inputRef.current.focus();
            // dispatch(setSwitchofAddCtrl(true))
        }
    };

    return (
        <div className='bg-[#f2cb053a] m-1 p-2 rounded flex items-center justify-between'>
            <input
                type="text"
                name="disp"
                id="data"
                value={inputValue}
                onChange={handleInputChange}
                className='text-[#EAF205] font-medium flex flex-wrap bg-[#ffffff00] p-1 w-[100%] border-none outline-none'
                disabled={!Edit}
                ref={inputRef}
            />

            <div className='flex items-center align-middle justify-center'>
                <button
                    className='bg-[#F24405] p-1 rounded cursor-pointer m-1'
                    onClick={handleSave}
                    hidden={!Edit}
                >
                    <IoSaveSharp className='text-[#EAF205] text-[24px]' />
                </button>
                <button
                    className='bg-[#F24405] p-1 rounded cursor-pointer m-1'
                    onClick={() => {
                        setEdit(true)
                    }}
                    hidden={Edit}
                >
                    <BiSolidMessageSquareEdit className='text-[#EAF205] text-[24px]' />
                </button>

                <button
                    className='bg-[#F24405] p-1 rounded cursor-pointer m-1'
                    onClick={() => {
                        dispatch(deleteTodo(index));
                        dispatch(setSwitchofAddCtrl(false))
                    }}
                >
                    <MdDeleteForever className='text-[#EAF205] text-[24px]' />
                </button>
            </div>
        </div>
    );
}
