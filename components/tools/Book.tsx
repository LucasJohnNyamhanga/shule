import Link from 'next/link';
import React from 'react';
import Styles from '../../styles/book.module.scss';

type dataReference = {
	reference: {
		id: number;
		name: string;
		description: string;
		data: string;
		isPdf: boolean;
		published: boolean;
		subjectId: number;
		usersId: number;
		formReference: {
			formName: string;
		}[];
	}[];
	link: string;
};

const Book = ({ reference, link }: dataReference) => {
	function shuffleArray(array: number[]) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	}

	let numberIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	shuffleArray(numberIndex);

	let rangiTamu = (index: number) => {
		const value = String(index).slice(-1);
		let incommingIndex = numberIndex[Number(value)];
		switch (incommingIndex) {
			case 0:
				return Styles.yanga;
				break;
			case 1:
				return Styles.yangaBright;
				break;
			case 2:
				return Styles.green;
				break;
			case 3:
				return Styles.grey;
				break;
			case 4:
				return Styles.orange;
				break;
			case 5:
				return Styles.blue;
				break;
			case 6:
				return Styles.zambarau;
				break;
			case 7:
				return Styles.black;
				break;
			case 8:
				return Styles.yellow;
				break;
			case 9:
				return Styles.brown;
				break;
			default:
				return Styles.zambarau;
				break;
		}
	};

	let truncateLimit = 100;
	function truncate(str: string) {
		return str.length > truncateLimit
			? str.slice(0, truncateLimit) + '...'
			: str;
	}

	return (
		<div>
			<div className={Styles.container}>
				{/* <!-- Books --> */}
				<div className={Styles.component}>
					<ul className={Styles.align}>
						{/* <!-- Book 1 --> */}
						{reference.map((ref, index) => (
							<li key={ref.id}>
								<figure className={Styles.book}>
									{/* <!-- Front --> */}
									<ul className={Styles.hardcoverfront}>
										<li>
											<div
												className={`${Styles.coverDesign}  ${rangiTamu(
													index
												)}`}>
												{/* //*Activate to add a rebon with text. */}
												{ref.isPdf && (
													<span className={Styles.ribbon}>BOOK</span>
												)}
												<h2>{ref.name}</h2>
												<p></p>
											</div>
											{/* //activate altenative for image on cover of book */}
											{/* <img
												src='https://assets.codepen.io/3922063/cover-AnimatedBooksCodrops.jpg'
												alt="The book's hardcover image is a picture of a little boy with goose hair, big forehead and big ears, small dark eyes, leaning on the wall and watching you, looking sad and worried."
												width='160px'
												height='250px'
											/> */}
										</li>

										<li></li>
									</ul>
									{/* <!--/ Front --> <!-- Pages --> */}
									<ul className={Styles.page}>
										<li></li>
										<li>
											<Link href={`${link}/${ref.id}`}>
												<a className={Styles.btn}>Preview</a>
											</Link>
										</li>
										<li></li>
										<li></li>
										<li></li>
									</ul>
									{/* <!--/ Pages --> <!-- Back --> */}
									<ul className={Styles.hardcoverback}>
										<li></li>
										<li></li>
									</ul>
									{/* <!--/ Back --> */}

									<ul className={Styles.bookspine}>
										<li></li>
										<li></li>
									</ul>

									<figcaption>
										<h1>{ref.name}</h1>
										<span>
											{ref.formReference.map(
												(
													form: {
														formName:
															| string
															| number
															| boolean
															| React.ReactElement<
																	any,
																	string | React.JSXElementConstructor<any>
															  >
															| React.ReactFragment
															| React.ReactPortal
															| null
															| undefined;
													},
													index,
													array
												) => (
													<React.Fragment key={index + 111}>{`${
														index == 0 ? 'For ' : ''
													}${
														index == 0
															? form.formName
															: typeof form.formName == 'string'
															? form.formName.replace('Form ', '')
															: ''
													}${
														index + 1 != array.length
															? index + 1 == array.length - 1
																? ' and '
																: ', '
															: '.'
													}`}</React.Fragment>
												)
											)}
										</span>
										<p>{truncate(ref.description)}</p>
										<span>
											<div className={Styles.linksButtons}>
												<Link href={`${link}/${ref.id}`}>
													<a>
														<div className={Styles.buttonPreview}>Preview</div>
													</a>
												</Link>
											</div>
										</span>
									</figcaption>
								</figure>
							</li>
						))}
					</ul>
				</div>
				{/* <!--/ Books --> */}
			</div>
		</div>
	);
};

export default Book;
