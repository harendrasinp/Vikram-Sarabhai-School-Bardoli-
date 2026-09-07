"use client";
import React, { useEffect } from 'react'
import SideBar_DeatilBar from '@/components/Sidebar_DetailBar';
import { getAboutUsThunk } from '@/redux/thunkAPI/AboutUsThunk';
import { useDispatch, useSelector } from 'react-redux';
const AboutUs = () => {
    const { data, loading, message } = useSelector((state) => state.getAboutData)
    console.log(data);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAboutUsThunk());
    }, [dispatch]);

    return (
        <div>
            <SideBar_DeatilBar title="About Us" componentData={data} />
        </div>
    )
}

export default AboutUs