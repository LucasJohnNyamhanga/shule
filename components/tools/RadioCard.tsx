import Styles from '../../styles/radioCard.module.scss';
import Image from 'next/image';
import { useState } from 'react';

type dataType = {
	handleSelectValue: (value: string) => void;
};

const RadioCard = ({ handleSelectValue }: dataType) => {
	const handleSelect = (value: string) => {
		handleSelectValue(value);
	};
	return (
		<div className={Styles.container}>
			<div className={Styles.grid}>
				<label className={Styles.card}>
					<input
						name='plan'
						className={Styles.radio}
						type='radio'
						// defaultChecked
						// checked={selected=='vodacom'}
						onChange={() => {
							handleSelect('vodacom');
						}}
					/>
					<span className={Styles.plandetails}>
						<span className={Styles.plantype}>
							<Image
								src={'/vodacom.svg'}
								alt={'vodacom'}
								placeholder='blur'
								blurDataURL={'/vodacom.svg'}
								width={300}
								height={100}
								objectFit='contain'
							/>
						</span>
						{/* <span className={Styles.plancost}>
							$0<span className={Styles.slash}>/</span>
							<abbr className={Styles.plancycle} title='month'>
								mo
							</abbr>
						</span> */}
						<span className={Styles.text}>Use Vodacom MPESA</span>
						{/* <span>100 GB/mo</span>
						<span>1 concurrent build</span> */}
					</span>
				</label>
				<label className={Styles.card}>
					<input
						name='plan'
						className={Styles.radio}
						type='radio'
						onChange={() => {
							handleSelect('airtel');
						}}
					/>
					<span className={Styles.plandetails}>
						<span className={Styles.plantype}>
							<Image
								src={'/airtel.svg'}
								alt={'airtel'}
								placeholder='blur'
								blurDataURL={'/airtel.svg'}
								width={300}
								height={100}
								objectFit='contain'
							/>
						</span>
						{/* <span className={Styles.plancost}>
							$0<span className={Styles.slash}>/</span>
							<abbr className={Styles.plancycle} title='month'>
								mo
							</abbr>
						</span> */}
						<span className={Styles.text}>Use Airtel Money</span>
						{/* <span>100 GB/mo</span>
						<span>1 concurrent build</span> */}
					</span>
				</label>
				<label className={Styles.card}>
					<input
						name='plan'
						className={Styles.radio}
						type='radio'
						onChange={() => {
							handleSelect('tigo');
						}}
					/>
					<span className={Styles.plandetails}>
						<span className={Styles.plantype}>
							<Image
								src={'/tigo.svg'}
								alt={'tigo'}
								placeholder='blur'
								blurDataURL={'/tigo.svg'}
								width={300}
								height={100}
								objectFit='contain'
							/>
						</span>
						{/* <span className={Styles.plancost}>
							$0<span className={Styles.slash}>/</span>
							<abbr className={Styles.plancycle} title='month'>
								mo
							</abbr>
						</span> */}
						<span className={Styles.text}>Use Tigo PESA</span>
						{/* <span>100 GB/mo</span>
						<span>1 concurrent build</span> */}
					</span>
				</label>
				<label className={Styles.card}>
					<input
						name='plan'
						className={Styles.radio}
						type='radio'
						onChange={() => {
							handleSelect('ttcl');
						}}
					/>
					<span className={Styles.plandetails}>
						<span className={Styles.plantype}>
							<Image
								src={'/ttcl.png'}
								alt={'ttcl'}
								placeholder='blur'
								blurDataURL={'/ttcl.png'}
								width={300}
								height={100}
								objectFit='contain'
							/>
						</span>
						{/* <span className={Styles.plancost}>
							$0<span className={Styles.slash}>/</span>
							<abbr className={Styles.plancycle} title='month'>
								mo
							</abbr>
						</span> */}
						<span className={Styles.text}>Use TTCL T-PESA</span>
						{/* <span>100 GB/mo</span>
						<span>1 concurrent build</span> */}
					</span>
				</label>
				<label className={Styles.card}>
					<input
						name='plan'
						className={Styles.radio}
						type='radio'
						onChange={() => {
							handleSelect('halotel');
						}}
					/>
					<span className={Styles.plandetails}>
						<span className={Styles.plantype}>
							<Image
								src={'/halotel.png'}
								alt={'halotel'}
								placeholder='blur'
								blurDataURL={'/halotel.png'}
								width={300}
								height={100}
								objectFit='cover'
							/>
						</span>
						{/* <span className={Styles.plancost}>
							$0<span className={Styles.slash}>/</span>
							<abbr className={Styles.plancycle} title='month'>
								mo
							</abbr>
						</span> */}
						<span className={Styles.text}>Use Halotel HaloPESA</span>
						{/* <span>100 GB/mo</span>
						<span>1 concurrent build</span> */}
					</span>
				</label>
				<label className={Styles.card}>
					<input
						name='plan'
						className={Styles.radio}
						type='radio'
						onChange={() => {
							handleSelect('zantel');
						}}
					/>
					<span className={Styles.plandetails}>
						<span className={Styles.plantype}>
							<Image
								src={'/zantel.png'}
								alt={'zantel'}
								placeholder='blur'
								blurDataURL={'/zantel.png'}
								width={300}
								height={100}
								objectFit='cover'
							/>
						</span>
						{/* <span className={Styles.plancost}>
							$0<span className={Styles.slash}>/</span>
							<abbr className={Styles.plancycle} title='month'>
								mo
							</abbr>
						</span> */}
						<span className={Styles.text}>Use Zantel EZYPESA</span>
						{/* <span>100 GB/mo</span>
						<span>1 concurrent build</span> */}
					</span>
				</label>
			</div>
		</div>
	);
};

export default RadioCard;
