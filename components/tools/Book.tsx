import React from 'react';
import Styles from '../../styles/book.module.scss';

const Book = () => {
	function shuffleArray(array: string[]) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	}

	let colors = [
		'yanga',
		'yangaBright',
		'green',
		'grey',
		'orange',
		'blue',
		'zambarau',
		'black',
		'yellow',
		'brown',
	];

	shuffleArray(colors);
	console.log(colors);
	return (
		<div>
			<div className={Styles.container}>
				{/* <!-- Books --> */}
				<div className={Styles.component}>
					<ul className={Styles.align}>
						{/* <!-- Book 1 --> */}
						<li>
							<figure className={Styles.book}>
								{/* <!-- Front --> */}
								<ul className={Styles.hardcoverfront}>
									<li>
										<div className={`${Styles.coverDesign} ${Styles.yellow}`}>
											<span className={Styles.ribbon}>NEW</span>
											<h2>THE BOYS</h2>
											<p>DAWN OF THE SEVEN COMMANDOS</p>
										</div>
									</li>

									<li></li>
								</ul>
								{/* <!--/ Front -->
            
            <!-- Pages --> */}
								<ul className={Styles.page}>
									<li></li>
									<li>
										<a href='#' className={Styles.btn}>
											Preview
										</a>
									</li>
									<li></li>
									<li></li>
									<li></li>
								</ul>
								{/* <!--/ Pages -->
            
            <!-- Back --> */}
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
									<h1>CSS Ninja</h1>
									<span>Form One, Form Three.</span>
									<p>
										Tomatillo water chestnut mustard cabbage yarrow sierra leone
										bologi. Watercress green bean groundnut earthnut pea
										dandelion radicchio.
									</p>
									<span>
										<div className={Styles.linksButtons}>
											<div className={Styles.button}>Preview</div>
										</div>
									</span>
								</figcaption>
							</figure>
						</li>
						{/* <!--/ Book 1 -->
        
        <!-- Book 2 --> */}
						<li>
							<figure className={Styles.book}>
								{/* <!-- Front --> */}
								<ul className={Styles.hardcoverfront}>
									<li>
										<div className={`${Styles.coverDesign} ${Styles.blue}`}>
											<h1>JS</h1>
											<p>FUNCTION</p>
										</div>
									</li>

									<li></li>
								</ul>
								{/* <!--/ Front -->
            
            <!-- Pages --> */}
								<ul className={Styles.page}>
									<li></li>
									<li>
										<a href='#' className={Styles.btn}>
											Download
										</a>
									</li>
									<li></li>
									<li></li>
									<li></li>
								</ul>
								{/* <!--/ Pages -->
            
            <!-- Back --> */}
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
									<h1>Storm JS</h1>
									<span>By Marco Barría for Codrops</span>
									<p>
										Leek winter purslane sierra leone bologi caulie tomatillo
										soko turnip greens bunya nuts silver beet melon green bean
										celery. Gram kakadu plum wakame.
									</p>
								</figcaption>
							</figure>
						</li>
						{/* <!--/ Book 2 -->
                        // *kitabu kinaanzia hapa
                        <!-- Book 2 --> */}
						<li>
							<figure className={Styles.book}>
								{/* <!-- Front --> */}
								<ul className={Styles.hardcoverfront}>
									<li>
										<div className={`${Styles.coverDesign} ${Styles.green}`}>
											<h1>JS</h1>
											<p>FUNCTION</p>
										</div>
									</li>

									<li></li>
								</ul>
								{/* <!--/ Front -->
            
            <!-- Pages --> */}
								<ul className={Styles.page}>
									<li></li>
									<li>
										<a href='#' className={Styles.btn}>
											Download
										</a>
									</li>
									<li></li>
									<li></li>
									<li></li>
								</ul>
								{/* <!--/ Pages -->
            
            <!-- Back --> */}
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
									<h1>Storm JS</h1>
									<span>By Marco Barría for Codrops</span>
									<p>
										Leek winter purslane sierra leone bologi caulie tomatillo
										soko turnip greens bunya nuts silver beet melon green bean
										celery. Gram kakadu plum wakame.
									</p>
								</figcaption>
							</figure>
						</li>
						{/* <!--/ Book 2 -->
        // !kinaishia hapa
        <!-- Book 3 --> */}
						<li>
							<figure className={Styles.book}>
								{/* <!-- Front --> */}
								<ul className={Styles.hardcoverfront}>
									<li>
										<div className={`${Styles.coverDesign} ${Styles.grey}`}>
											<span className={Styles.ribbon}>#BEST</span>
											<h1>HTML5</h1>
											<p>CANVAS</p>
										</div>
									</li>

									<li></li>
								</ul>
								{/* <!--/ Front -->
            
            <!-- Pages --> */}
								<ul className={Styles.page}>
									<li></li>
									<li>
										<a href='#' className={Styles.btn}>
											Download
										</a>
									</li>
									<li></li>
									<li></li>
									<li></li>
								</ul>
								{/* <!--/ Pages --> */}

								{/* <!-- Back --> */}
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
									<h1>Zen HTML5</h1>
									<span>By Marco Barría for Codrops</span>
									<p>
										Salsify horseradish winter purslane yarrow zucchini bush
										tomato aubergine cauliflower broccoli. Kohlrabi azuki bean
										chickpea quandong dandelion seakale.
									</p>
								</figcaption>
							</figure>
						</li>
						{/* <!--/ Book 3 -->
        
        <!-- Book 4 --> */}
						<li>
							<figure className={Styles.book}>
								{/* <!-- Front --> */}
								<ul className={Styles.hardcoverfront}>
									<li>
										<img
											src='https://assets.codepen.io/3922063/cover-AnimatedBooksCodrops.jpg'
											alt="The book's hardcover image is a picture of a little boy with goose hair, big forehead and big ears, small dark eyes, leaning on the wall and watching you, looking sad and worried."
											width='160px'
											height='250px'
										/>
									</li>

									<li></li>
								</ul>
								{/* <!--/ Front -->
            
            <!-- Pages --> */}
								<ul className={Styles.page}>
									<li></li>
									<li>
										<a href='#' className={Styles.btn}>
											Download
										</a>
									</li>
									<li></li>
									<li></li>
									<li></li>
								</ul>
								{/* <!--/ Pages -->
            
            <!-- Back --> */}
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
									<h1>CSS Ninja</h1>
									<span>By Marco Barría for Codrops</span>
									<p>
										Tomatillo water chestnut mustard cabbage yarrow sierra leone
										bologi. Watercress green bean groundnut earthnut pea
										dandelion radicchio.
									</p>
								</figcaption>
							</figure>
						</li>
						{/* <!--/ Book 4 --> */}
					</ul>

					<p className={Styles.note}>
						Please note that this only works in browsers that support CSS 3D
						Transforms. Also note that IE10 <strong>does not</strong> support{' '}
						<em>preserve-3d</em> which is needed for this demo.
					</p>
				</div>
				{/* <!--/ Books --> */}
			</div>
		</div>
	);
};

export default Book;
