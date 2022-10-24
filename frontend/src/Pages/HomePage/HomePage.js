import React, { useEffect } from 'react'
import Detail from '../../Components/Details/Detail'
import Menu from '../../Components/LayoutMenu/Menu'
import {
    BrowserRouter as Router,
    Link,
    useLocation
  } from "react-router-dom";
import { _UseCase } from '../../actions/detailsActions';
import { useDispatch } from 'react-redux';

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}


function HomePage() {
    const dispatch = useDispatch()
    const query = useQuery();
    const id = query.get("id");

    useEffect(() => {
        if (id) {
            dispatch(_UseCase(id))
        }
    }, [id]);


    return (
        <div className='flex w-full bg-[#DFDADA]'>
            <div className='w-[20%] bg-[#FFFFFF] h-screen'>
                <Menu />
            </div>
            <div className='ml-10 flex justify-center items-center' style={{
                width: '100%'
            }}>
                
                   <Detail/>
                
            </div>

        </div>
    )
}

export default HomePage