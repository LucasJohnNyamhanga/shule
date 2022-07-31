import Styles from '../../styles/radioCard.module.scss';

const RadioCard = () => {
	return (
		<div className={Styles.container}>
			<div className={Styles.grid}>
				<label className={Styles.card}>
					<input
						name='plan'
						className={Styles.radio}
						type='radio'
						defaultChecked
					/>
					<span className={Styles.plandetails}>
						<span className={Styles.plantype}>Basic</span>
						<span className={Styles.plancost}>
							$0<span className={Styles.slash}>/</span>
							<abbr className={Styles.plancycle} title='month'>
								mo
							</abbr>
						</span>
						<span>1 team member</span>
						<span>100 GB/mo</span>
						<span>1 concurrent build</span>
					</span>
				</label>
				<label className={Styles.card}>
					<input name='plan' className={Styles.radio} type='radio' />
					<span className={Styles.hiddenvisually}>
						Pro - $50 per month, 5 team members, 500 GB per month, 5 concurrent
						builds
					</span>
					<span className={Styles.plandetails} aria-hidden='true'>
						<span className={Styles.plantype}>Pro</span>
						<span className={Styles.plancost}>
							$50<span className={Styles.slash}>/</span>
							<span className={Styles.plancycle}>mo</span>
						</span>
						<span>5 team members</span>
						<span>500 GB/mo</span>
						<span>5 concurrent builds</span>
					</span>
				</label>
				<label className={Styles.card}>
					<input name='plan' className={Styles.radio} type='radio' />
					<span className={Styles.hiddenvisually}>
						Pro - $50 per month, 5 team members, 500 GB per month, 5 concurrent
						builds
					</span>
					<span className={Styles.plandetails} aria-hidden='true'>
						<span className={Styles.plantype}>Pro</span>
						<span className={Styles.plancost}>
							$50<span className={Styles.slash}>/</span>
							<span className={Styles.plancycle}>mo</span>
						</span>
						<span>5 team members</span>
						<span>500 GB/mo</span>
						<span>5 concurrent builds</span>
					</span>
				</label>
				<label className={Styles.card}>
					<input name='plan' className={Styles.radio} type='radio' />
					<span className={Styles.hiddenvisually}>
						Pro - $50 per month, 5 team members, 500 GB per month, 5 concurrent
						builds
					</span>
					<span className={Styles.plandetails} aria-hidden='true'>
						<span className={Styles.plantype}>Pro</span>
						<span className={Styles.plancost}>
							$50<span className={Styles.slash}>/</span>
							<span className={Styles.plancycle}>mo</span>
						</span>
						<span>5 team members</span>
						<span>500 GB/mo</span>
						<span>5 concurrent builds</span>
					</span>
				</label>
			</div>
		</div>
	);
};

export default RadioCard;
