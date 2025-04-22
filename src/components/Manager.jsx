import React, { useEffect } from 'react'
import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

const Manager = () => {

    const ref = useRef()
    const ratingRef = useRef()
    const [form, setform] = useState({
        medianame: " ",
        mediaview: " ",
        rating: " "
    });
    const [ratingArray, setratingArray] = useState([])

    useEffect(() => {
        let ratings = localStorage.getItem("ratings");
        // let ratingArray;
        if ((ratings)) {
            setratingArray(JSON.parse(ratings))
        }
        // else{
        //     ratingArray = []
        // }
    }, [])


    const showRating = () => {
        // alert("show password")
        ratingRef.current.type = "text"
        console.log(ref.current.src)
        if (ref.current.src.includes("icon/eyecutoff.png")) {
            ref.current.src = "icon/eyeopen.png";
            ratingRef.current.type = "text"
        }
        else {
            ref.current.src = "icon/eyecutoff.png";
            ratingRef.current.type = "rating"
        }
    }

    const save = () => {
        console.log(form)
        setratingArray([...ratingArray, {...form, id:uuidv4()}])
        localStorage.setItem("ratings", JSON.stringify([...ratingArray, {...form, id:uuidv4()}]))
        console.log([...ratingArray, form])
    }

    const editCol = (id) => {
        console.log("edit col", id)
        setform(ratingArray.filter(i=>i.id===id)[0])
        setratingArray(ratingArray.filter(item=>item.id!==id))
    }

    const deleteCol = (id) => {
        toast('🦄 Deleted sucessfully', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            // transition: "Slide",
        });
        console.log("deleting password with this id", id)
        let confirmation = window.confirm("do you really ant to delete this?")
        if(confirmation){
            setratingArray(ratingArray.filter(item=>item.id!==id))
            localStorage.setItem("ratings", JSON.stringify(ratingArray.filter(item=>item.id!==id)))
        }
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const copyText = (text) => {
        toast('🦄 Copied to clipboard', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            // transition: "Slide",
        });
        navigator.clipboard.writeText(text);
        // alert("text is copied" + text)
        // console.log(copyText)
    }

    return (
        <>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            // transition={Slide}
            />

            <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>

            <div className='max-w-full mycontainer'>

                <h1 className='font-serif text-4xl text font-bold text-center'>
                    <span className='text-fuchsia-500'>&lt;  My</span> Watch<span className='text-fuchsia-500'>list /&gt;</span>
                </h1>

                <p className='text-center text-black text-2xl w-full m-3'>This is your own entertainment meneger, which you have made by yourself</p>
                <div className='text-black flex flex-col p-4 gap-6'>
                    <input value={form.medianame} onChange={handleChange} placeholder='Enter Show/Movie Name' className='border-1 w-full border-fuchsia-500 p-4 py-2 rounded-2xl' type='' name='medianame' id='' />
                    <div className='flex w-full justify-between gap-6'>
                        <input value={form.mediaview} onChange={handleChange} placeholder='Have You Watched it?' className='w-full p-4 py-2 border-1 border-fuchsia-500 rounded-2xl' type='' name='mediaview' id='' />
                        <input ref={ratingRef} value={form.rating} onChange={handleChange} placeholder='Is It Good?' className='w-full p-4 py-2 border-1 border-fuchsia-500 rounded-2xl' type='password' name='rating' id='' />
                        <span className='absolute right-48 top-83 cursor-pointer' onClick={showRating}> <img width={30} ref={ref} src='icon/eyeopen.png' alt='' /> </span>
                    </div>

                    <button onClick={save} className='save bg-emerald-700 hover:bg-emerald-950 w-fit border-2 border-fuchsia-700 flex justify-center items-center-center gap-2 font-bold text-white rounded-full px-8 py-2 mx-auto cursor-pointer hover:border-2 m-3 hover:border-fuchsia-400'><lord-icon
                        src="https://cdn.lordicon.com/jgnvfzqg.json"
                        trigger="loop"
                        colors="primary:#ffffff,secondary:#ffffff"  >
                    </lord-icon>Add show/movie</button>
                </div>
                <div className='ratings'>
                    <h2 className='text-2xl text-black font-bold py-4'>Your Media</h2>
                    {ratingArray.length === 0 && <div>No Data to show</div>}
                    {ratingArray.length != 0 && <table className="table-auto w-full">
                        <thead className='border-4 border-white'>
                            <tr className='bg-fuchsia-800 text-white text-lg'>
                                <th className='py-2'>Show/Movie</th>
                                <th className='py-2'>Have you watched it ?</th>
                                <th className='py-2'>Ratings</th>
                                <th className='py-2'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-emerald-950 text-white font-mono font-semibold font-stretch-50% '>
                            {ratingArray.map((item, index) => {
                                return <tr key={index}>
                                    <td className='border-1 border-fuchsia-300 items-center flex justify-center cursor-pointer text-center min-w-[100%] py-2'><a href={item.medianame} target='_blank'>{item.medianame}</a>
                                        <div className='cursor-pointer size-7 items-center justify-center' onClick={() => { copyText(item.medianame) }}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                                trigger="hover"
                                                colors="primary:#ffffff,secondary:#ffffff"
                                                style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}>
                                            </lord-icon>
                                        </div>
                                    </td>
                                    <td className='border-1 border-fuchsia-300 text-center w-[35%] py-2'>
                                        <div className='flex items-center justify-center'>
                                            <span>{item.mediaview}</span>
                                            <div className='cursor-pointer size-7' onClick={() => { copyText(item.mediaview) }} >
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover"
                                                    colors="primary:#ffffff,secondary:#ffffff"
                                                    style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}>
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='border-1 border-fuchsia-300 text-center w-[20%] py-2'>
                                        <div className='flex items-center justify-center'>
                                            <span>{item.rating}</span>
                                            <div className='cursor-pointer size-7' onClick={() => { copyText(item.rating) }} >
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover"
                                                    colors="primary:#ffffff,secondary:#ffffff"
                                                    style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}>
                                                </lord-icon>
                                            </div>
                                        </div></td>
                                        <td className='border-1 border-fuchsia-300 items-center flex justify-center cursor-pointer text-center min-w-[100%] py-2'>
                                        <span className='mx-2.5' onClick={()=>{editCol(item.id)}}>
                                        <lord-icon
                                                    src="https://cdn.lordicon.com/gwlusjdu.json"
                                                    trigger="hover"
                                                    colors="primary:#ffffff,secondary:#ffffff"
                                                    style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}>
                                                </lord-icon>
                                        </span>
                                        <span className='mx-2.5' onClick={()=>{deleteCol(item.id)}}>
                                        <lord-icon
                                                    src="https://cdn.lordicon.com/skkahier.json"
                                                    trigger="hover"
                                                    colors="primary:#ffffff,secondary:#ffffff"
                                                    style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}>
                                                </lord-icon>
                                        </span>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>}
                </div>
            </div>
        </>
    )
}

export default Manager
