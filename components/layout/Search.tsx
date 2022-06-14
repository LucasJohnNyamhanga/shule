import React, { useContext, useEffect } from 'react';
import InputText from '../tools/InputText';
import { useState } from 'react';
import Styles from '../../styles/search.module.scss';
import ClearIcon from '@mui/icons-material/Clear';
import { NavContext } from '../../components/context/StateContext';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Search = () => {
	const router = useRouter();
	type dataInForm = {
		searchText: string;
	};

	type dataContext = {
		searchText: string;
	};

	const { navActive } = useContext(NavContext);

	useEffect(() => {}, [navActive]);

	const [formData, setFormData] = useState<dataInForm>({
		searchText: '',
	});

	let handletext = (e: React.ChangeEvent<HTMLInputElement>) => {
		let value = e.target.value;
		setFormData({ searchText: value });
	};

	let handleClear = () => {
		setFormData({ searchText: '' });
	};

	let handleSearch = () => {
		if (formData.searchText != '') {
			// console.log(formData.searchText);
		}
	};

	let handleEnter = () => {
		if (formData.searchText != '') {
			router.push({
				pathname: `/Search/${navActive}`,
				query: { search: formData.searchText },
			});
		}
	};

	return (
		<div className={Styles.searchContainerMain}>
			<div className={Styles.searchContainer}>
				<div className={Styles.category}>{navActive}</div>
				<InputText
					name='firstName'
					value={formData.searchText}
					textHolder={`Search in ${navActive}`}
					handletext={handletext}
					handleEnter={handleEnter}
				/>
				<div className={Styles.clearContainer}>
					{formData.searchText != '' && (
						<ClearIcon onClick={handleClear} className={Styles.clear} />
					)}
				</div>
				{formData.searchText == '' ? (
					<div className={Styles.searchButton}>Search</div>
				) : (
					<Link
						href={
							navActive == 'Notes'
								? {
										pathname: `Notes/Search/${navActive}`,
										query: { search: formData.searchText },
								  }
								: ''
						}>
						<a>
							<div onClick={handleSearch} className={Styles.searchButton}>
								Search
							</div>
						</a>
					</Link>
				)}
			</div>
		</div>
	);
};

export default Search;
