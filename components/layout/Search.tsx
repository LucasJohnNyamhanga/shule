import React, { useContext, useEffect } from 'react';
import InputText from '../tools/InputText';
import { useState } from 'react';
import Styles from '../../styles/search.module.scss';
import ClearIcon from '@mui/icons-material/Clear';
import { NavContext } from '../../components/context/StateContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Exams from '../../pages/Exams';

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
			switch (navActive) {
				case 'Notes':
					router.push({
						pathname: `/Notes/Search/`,
						query: { find: formData.searchText },
					});
					break;
				case 'Review':
					router.push({
						pathname: `/Review/Search/`,
						query: { find: formData.searchText },
					});
					break;
				case 'Exams':
					router.push({
						pathname: `/Exams/Search/`,
						query: { find: formData.searchText },
					});
					break;
				case 'References':
					router.push({
						pathname: `/References/Search/`,
						query: { find: formData.searchText },
					});
					break;

				default:
					break;
			}
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
										pathname: `/Notes/Search/`,
										query: { find: formData.searchText },
								  }
								: navActive == 'Review'
								? {
										pathname: `/Review/Search/`,
										query: { find: formData.searchText },
								  }
								: navActive == 'Exams'
								? {
										pathname: `/Exams/Search/`,
										query: { find: formData.searchText },
								  }
								: navActive == 'References'
								? {
										pathname: `/References/Search/`,
										query: { find: formData.searchText },
								  }
								: ''
						}>
						<a>
							<button
								onSubmit={(e) => {
									e.preventDefault();
									handleSearch();
								}}
								className={Styles.searchButton}>
								Search
							</button>
						</a>
					</Link>
				)}
			</div>
		</div>
	);
};

export default Search;
