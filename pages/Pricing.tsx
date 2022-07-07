import { ReactNode } from 'react';
import Styles from '../styles/pricing.module.scss';

function Pricing(props) {
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
								<span>500</span>
							</div>
							<p>Per Day</p>
							<span className={Styles.type}>Basic</span>
						</div>
						<div className={Styles.cardBody}>
							<div className={Styles.topShape1}></div>
							<div className={Styles.cardContent}>
								<ul>
									<li>
										Downloads <div className={Styles.icon}>3</div>
									</li>
									<li>
										Examinations <div className={Styles.icon}>3</div>
									</li>
									<li>
										Reviews <div className={Styles.icon}>10 Excercise</div>
									</li>
									<li>
										Notes <div className={Styles.icon}>Unlimited</div>
									</li>
								</ul>
								<button className={Styles.btn1}>START</button>
							</div>
						</div>
						{/* <div className={Styles.ribbon1}></div> */}
					</div>
					{/* //two */}
					<div className={Styles.pricingCard}>
						<div className={Styles.pricing}>
							<div className={Styles.price}>
								{/* <sup>Tsh</sup> */}
								<span>1500</span>
							</div>
							<p>Per Week</p>
							<span className={Styles.type}>Medium</span>
						</div>
						<div className={Styles.cardBody}>
							<div className={Styles.topShape2}></div>
							<div className={Styles.cardContent}>
								<ul>
									<li>
										Downloads <div className={Styles.icon}>8</div>
									</li>
									<li>
										Examinations <div className={Styles.icon}>5</div>
									</li>
									<li>
										Reviews <div className={Styles.icon}>20 Excercise</div>
									</li>
									<li>
										Notes <div className={Styles.icon}>Unlimited</div>
									</li>
								</ul>
								<button className={Styles.btn2}>START</button>
							</div>
						</div>
						<div className={Styles.ribbon2}></div>
					</div>
					{/* //three */}
					<div className={Styles.pricingCard}>
						<div className={Styles.pricing}>
							<div className={Styles.price}>
								{/* <sup>Tsh</sup> */}
								<span>5000</span>
							</div>
							<p>Per Month</p>
							<span className={Styles.type}>Large</span>
						</div>
						<div className={Styles.cardBody}>
							<div className={Styles.topShape3}></div>
							<div className={Styles.cardContent}>
								<ul>
									<li>
										Downloads <div className={Styles.icon}>15</div>
									</li>
									<li>
										Examinations <div className={Styles.icon}>10</div>
									</li>
									<li>
										Reviews <div className={Styles.icon}>30 Excercise</div>
									</li>
									<li>
										Notes <div className={Styles.icon}>Unlimited</div>
									</li>
								</ul>
								<button className={Styles.btn3}>START</button>
							</div>
						</div>
						<div className={Styles.ribbon3}></div>
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
