import PropTypes from 'prop-types';
import { useState, useEffect, useCallback } from 'react';
import { debounce } from 'lodash';
import UiInput from '@ui/UiInput';
import SearchPageInfo from '@components/SearchPage/SearchPageInfo';
import { getApiResource } from '@utils/network';
import { getPeopleImage, getPeopleId } from '@services/getPeopleData';
import { API_SEARCH } from '@constants/api';

import styles from './SearchPage.module.css';

const SearchPage = () => {
    const [inputSearchValue, setInputSearchValue] = useState('');
    const [people, setPeople] = useState([]);
    const [errorApi, setErrorApi] = useState(false);
    const getResponse = async param => {
        const res = await getApiResource(API_SEARCH+param);

        if (res) {
            const peopleList = res.results.map(({ name, url}) => {
                const id = getPeopleId(url);
                const img = getPeopleImage(id);
    
                return {
                    id,
                    name,
                    img,
                }
            });
    
            setPeople(peopleList);
        }

        setErrorApi(!res);
    };

    useEffect(() => {
        getResponse('');
    }, []);

    const debouncedGetResponse = useCallback(
        debounce(value => getResponse(value), 300),
        []
    );

    const handleInputChange = value => {
        setInputSearchValue(value);
        debouncedGetResponse(value);
    }

    return (
        <>
            <h1 className="header__text">Поиск персонажей</h1>

            <UiInput
                value={inputSearchValue}
                handleInputChange={handleInputChange}
                placeholder="Введите имя персонажа"
                classes={styles.input__search}
            />

            <SearchPageInfo people={people} />
        </>
    )
}

SearchPage.propTypes = {
	setErrorApi: PropTypes.func,
}

export default SearchPage;
