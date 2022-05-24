import React, { useContext, useEffect } from 'react'
import InputText from '../tools/InputText'
import { useState } from 'react'
import Styles from '../../styles/search.module.scss'
import ClearIcon from '@mui/icons-material/Clear';
import { NavContext } from '../../components/context/StateContext';

const Search = () => {
    type dataInForm = {
        searchText:string,
    }

    type dataContext = {
        searchText:string
    }


    const { navActive } = useContext(NavContext);
    
    useEffect(() => {
    },[navActive])
    
    const [formData, setFormData] = useState<dataInForm>({
    searchText:'',
    });
    
    let handletext = (e: React.ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormData({ searchText:value });
    
    }

    let handleClear = () => {
        setFormData({ searchText: '' });
    }

    return (
        <div className={Styles.searchContainerMain}>
            <div className={Styles.searchContainer}>
                <div className={Styles.category}>{navActive }</div>
                <InputText
                    name='firstName'
                    value={formData.searchText}
                    textHolder={`Search in ${navActive}`}
                    handletext={handletext} />
                {/* <div className={Styles.clearContainer}>
                    <ClearIcon onClick={handleClear } className={Styles.clear}/>
                </div> */}
                <div className={Styles.searchButton}>
                    Search
                </div>
            </div>
        </div>
    )
}

export default Search