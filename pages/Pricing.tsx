import { ReactNode, useContext } from 'react';
import Styles from '../styles/pricing.module.scss';
import { useRouter } from 'next/router';
import { NavContext } from '../components/context/StateContext';

function Pricing(props) {
	const { navActive, setNavActive, userData } = useContext(NavContext);
	const { query, push } = useRouter();
	let callback = query.callbackUrl;
	let handleNotes = () => {
		console.log(userData);
		if (userData.id != '') {
			push(`${callback}`);
		} else {
			console.log('Please wait..');
		}
	};
	return (
		<div className={Styles.container}>
			<div className={Styles.innerContainer}>
				<div className={Styles.intro}>
					Find the right package to power your learning.
				</div>
				<div className={Styles.details}>
					We believe education is free, all costs are subjected to system
					mentainance and upkeep.
				</div>
				<div className={Styles.cardContainer}>
					<div className={Styles.pricingCard}>
						<div className={Styles.pricing}>
							<div className={Styles.price}>
								{/* <sup>Tsh</sup> */}
								<span>1000</span>
							</div>
							<p>Per Month</p>
							<span className={Styles.type}>Notes</span>
						</div>
						<div className={Styles.cardBody}>
							<div className={Styles.topShape1}></div>
							<div className={Styles.cardContent}>
								<ul>
									<li>
										Notes Download <div className={Styles.icon}>1</div>
									</li>

									<li>
										Reviews <div className={Styles.icon}>3 Excercises</div>
									</li>
									<li>
										Examinations Download <div className={Styles.icon}>0</div>
									</li>
									<li>
										Books Download <div className={Styles.icon}>0</div>
									</li>
								</ul>
								<button className={Styles.btn1} onClick={handleNotes}>
									START
								</button>
							</div>
						</div>
						<div className={Styles.ribbon1}></div>
					</div>
					{/* //two */}

					{/* //three */}
					<div className={Styles.pricingCard}>
						<div className={Styles.pricing}>
							<div className={Styles.price}>
								{/* <sup>Tsh</sup> */}
								<span>1000</span>
							</div>
							<p>Per Month</p>
							<span className={Styles.type}>Exams</span>
						</div>
						<div className={Styles.cardBody}>
							<div className={Styles.topShape3}></div>
							<div className={Styles.cardContent}>
								<ul>
									<li>
										Examinations Download <div className={Styles.icon}>1</div>
									</li>
									<li>
										Reviews <div className={Styles.icon}>3 Excercises</div>
									</li>
									<li>
										Notes Download <div className={Styles.icon}>0</div>
									</li>
									<li>
										Books Download <div className={Styles.icon}>0</div>
									</li>
								</ul>
								<button className={Styles.btn3}>START</button>
							</div>
						</div>
						<div className={Styles.ribbon3}></div>
					</div>
					<div className={Styles.pricingCard}>
						<div className={Styles.pricing}>
							<div className={Styles.price}>
								{/* <sup>Tsh</sup> */}
								<span>1000</span>
							</div>
							<p>Per Month</p>
							<span className={Styles.type}>Books</span>
						</div>
						<div className={Styles.cardBody}>
							<div className={Styles.topShape4}></div>
							<div className={Styles.cardContent}>
								<ul>
									<li>
										Books Download <div className={Styles.icon}>1</div>
									</li>
									<li>
										Reviews <div className={Styles.icon}>3 Excercises</div>
									</li>
									<li>
										Examinations Download <div className={Styles.icon}>0</div>
									</li>

									<li>
										Notes Download <div className={Styles.icon}>0</div>
									</li>
								</ul>
								<button className={Styles.btn4}>START</button>
							</div>
						</div>
						<div className={Styles.ribbon4}></div>
					</div>
					<div className={Styles.pricingCard}>
						<div className={Styles.pricing}>
							<div className={Styles.price}>
								{/* <sup>Tsh</sup> */}
								<span>3000</span>
							</div>
							<p>Per Month</p>
							<span className={Styles.type}>COMBO</span>
						</div>
						<div className={Styles.cardBody}>
							<div className={Styles.topShape2}></div>
							<div className={Styles.cardContent}>
								<ul>
									<li>
										Reviews <div className={Styles.icon}>15 Excercises</div>
									</li>
									<li>
										Notes Download <div className={Styles.icon}>1</div>
									</li>
									<li>
										Examinations Download <div className={Styles.icon}>1</div>
									</li>
									<li>
										Books Download <div className={Styles.icon}>1</div>
									</li>
								</ul>
								<button className={Styles.btn2}>START</button>
							</div>
						</div>
						<div className={Styles.ribbon2}></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Pricing;

//*Removing default search bar :)
Pricing.getLayout = function PageLayout(page: ReactNode) {
	return <>{page}</>;
};
