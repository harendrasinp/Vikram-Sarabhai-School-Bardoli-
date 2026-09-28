"use client"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeLoginModal} from '@/redux/slices/Loginslice';
import { loginThunk } from '@/redux/thunkAPI/authThunk';
import { useRouter } from 'next/navigation';
const LoginModal = () => {
    const dispatch = useDispatch()
    const router=useRouter()
    const [formData, setFormData] = useState({ email: "", password: "" })
    const authDatas=useSelector((state)=>state.auth)
    const isOpenmodal = useSelector((state) => state.login.isOpenModal)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        const result= await dispatch(loginThunk(formData))
        if(loginThunk.fulfilled.match(result)){
            router.replace("/admin");
        }
        setFormData({ email: "", password: "" })


    }

    if (!isOpenmodal) return null;
    return (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
            <div className="absolute top-52 left-1/2 transform -translate-x-1/2 bg-gray-300 p-6 rounded shadow-lg z-100 flex flex-col gap-4 w-80">
                {/*---------------------------------------Close Button---------------------------------------------  */}
                <button onClick={() => dispatch(closeLoginModal())} className="absolute right-3 top-3 cursor-pointer">✕</button>
                {/*---------------------------------------Login Name---------------------------------------------  */}
                <div>
                    <h1 className="text-center text-lg font-bold ">Login</h1>
                </div>
                {/*--------------------------------login form----------------------------------------------*/}
                <div>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            placeholder="Email"
                            onChange={handleChange}
                            className="border border-gray-400 rounded py-1 px-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
                        />

                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            placeholder="Password"
                            onChange={handleChange}
                            className="border border-gray-400 rounded py-1 px-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
                        />
                        {/*---------------------------------------Login Submit Button-----------------------------------*/}
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                        >
                            Login
                        </button>
                    </form>
                    {authDatas.pending? "Loading......" :authDatas.error}
                </div>
            </div>
        </div>
    )
}

export default LoginModal