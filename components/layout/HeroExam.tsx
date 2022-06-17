import React, { useRef } from 'react';
import styles from '../../styles/hero.module.scss';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'next/image';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

type dataHero = {
	textStart: string;
	textFinish: string;
	image: string;
	explanation: string;
	buttonText: string;
	linker: string;
};

function hero({
	textStart,
	textFinish,
	explanation,
	image,
	buttonText,
	linker,
}: dataHero) {
	const details = useRef<HTMLDivElement>(null!);
	const matches = useMediaQuery('(min-width:1180px)');
	const matchesTab = useMediaQuery('(min-width:880px)');
	return (
		<div className={styles.container}>
			<div className={styles.section}>
				<div className={styles.hero}>
					<div className={styles.info}>
						<div ref={details} className={styles.details}>
							{/* <h1>
								&ldquo;{`${textStart}`}
								<br /> <span>{`${textFinish}`}&rdquo;</span>
							</h1>
							<p>{explanation}</p>
							<Link passHref href={linker}>
								<Button variant='contained' className={styles.button}>
									{buttonText}
								</Button>
							</Link> */}
							{matches ? (
								<Typewriter
									onInit={(typewriter) => {
										typewriter
											.callFunction(() => {
												details.current.style.fontSize = '65px';
											})
											.pauseFor(1000)
											.typeString(`<span>&ldquo;</span>A step, `)
											.callFunction(() => {
												details.current.style.fontSize = '55px';
											})
											.deleteChars(1)
											.typeString(
												`  is what takes you <span style="color: #d35400 ;"><strong>To the top of the mountain.</strong></span><span>&rdquo;</span>`
											)
											.pauseFor(3000)
											.typeString(
												'<br/><strong>&#9997; shule</strong><span style="color: #a35f2e ;"><strong>.co.tz</strong></span>. <br/>'
											)
											.pauseFor(3000)
											.callFunction(() => {
												details.current.style.fontSize = '45px';
											})
											.typeString('<br/>Read...')
											.pauseFor(1500)
											.deleteChars(3)
											.typeString(', Search...')
											.deleteChars(3)
											.typeString(
												'<span style="color: #27ae60;">&#128270;</span>'
											)
											.typeString(
												' and <span style="color: #27ae60;">Explore!.</span>'
											)
											.pauseFor(1500)
											.deleteChars(2)
											.callFunction(() => {
												details.current.style.fontSize = '35px';
											})
											.typeString(
												' <strong> to the </strong><span style="color: #d35400 ;"><strong>collection of answered and unanswered exams,</strong></span>'
											)
											.deleteChars(1)
											.pauseFor(1500)
											.typeString(
												'<strong>. as </strong><span style="color: #800000 ;"><strong> every step counts to take you to the top.</strong></span>'
											)
											.start();
									}}
									options={{
										autoStart: true,
										loop: false,
									}}
								/>
							) : matchesTab ? (
								<Typewriter
									onInit={(typewriter) => {
										typewriter
											.callFunction(() => {
												details.current.style.fontSize = '50px';
											})
											.pauseFor(1000)
											.typeString(`<span>&ldquo;</span>Nothing is impossible, `)
											.typeString(`<span>&#127947;</span>`)
											.callFunction(() => {
												details.current.style.fontSize = '40px';
											})
											.typeString('...,')
											.deleteChars(4)
											.typeString(
												`  the word itself says <span style="color: #d35400 ;"><strong>'Impossible!'</strong></span><span>&rdquo;</span>`
											)
											.pauseFor(300)
											.deleteChars(12)
											.typeString(
												`<span style="color: #d35400 ;"><strong>'m...'!</strong></span>`
											)
											.deleteChars(3)
											.pauseFor(500)
											.typeString(
												` <span style="color: #d35400 ;"><strong> possible!'</strong></span><span>&rdquo;</span>`
											)
											.deleteChars(16)
											.typeString(
												` <span style="color: #d35400 ;"><strong> possible!'</strong></span><span>&rdquo;</span>`
											)
											.pauseFor(2000)
											.typeString(
												'<br/><strong>&#9997; Audrey</strong><span style="color: #a35f2e ;"><strong> Hepburn</strong></span>.'
											)
											.pauseFor(3000)
											.deleteAll()
											.callFunction(() => {
												details.current.style.fontSize = '50px';
											})
											.typeString('Read...')
											.pauseFor(1500)
											.deleteChars(3)
											.typeString(', Search...')
											.deleteChars(3)
											.typeString(
												'<span style="color: #27ae60;">&#128270;</span>'
											)
											.typeString(
												' and <span style="color: #27ae60;">Explore!.<br></span>'
											)
											.pauseFor(1500)
											.deleteChars(2)
											.callFunction(() => {
												details.current.style.fontSize = '40px';
											})
											.typeString(
												' <strong> to </strong> the <span style="color: #d35400 ;"><strong>collection of answered and unanswered exams,</strong></span>'
											)
											.deleteChars(1)
											.pauseFor(1500)
											.typeString(
												'<strong>. And </strong><span style="color: #800000 ;"><strong>nothing will be impossible to achive.</strong></span>'
											)
											.start();
									}}
									options={{
										autoStart: true,
										loop: false,
									}}
								/>
							) : (
								<Typewriter
									onInit={(typewriter) => {
										typewriter
											.callFunction(() => {
												details.current.style.fontSize = '35px';
											})
											.pauseFor(1000)
											.typeString(`<span>&ldquo;</span>Nothing is impossible, `)
											.typeString(`<span>&#127947;</span>`)
											.callFunction(() => {
												details.current.style.fontSize = '25px';
											})
											.typeString('...,')
											.deleteChars(4)
											.typeString(
												`  the word itself says <span style="color: #d35400 ;"><strong>'Impossible!'</strong></span><span>&rdquo;</span>`
											)
											.pauseFor(300)
											.deleteChars(12)
											.typeString(
												`<span style="color: #d35400 ;"><strong>'m...'!</strong></span>`
											)
											.deleteChars(3)
											.pauseFor(500)
											.typeString(
												` <span style="color: #d35400 ;"><strong> possible!'</strong></span><span>&rdquo;</span>`
											)
											.deleteChars(16)
											.typeString(
												` <span style="color: #d35400 ;"><strong> possible!'</strong></span><span>&rdquo;</span>`
											)
											.pauseFor(2000)
											.typeString(
												'<br/><strong>&#9997; Audrey</strong><span style="color: #a35f2e ;"><strong> Hepburn</strong></span>.'
											)
											.pauseFor(3000)
											.deleteAll()
											.callFunction(() => {
												details.current.style.fontSize = '33px';
											})
											.typeString('Read...')
											.pauseFor(1500)
											.deleteChars(3)
											.typeString(', Search...')
											.deleteChars(3)
											.typeString(
												'<span style="color: #27ae60;">&#128270;</span>'
											)
											.typeString(
												' and <span style="color: #27ae60;">Explore!.<br></span>'
											)
											.pauseFor(1500)
											.deleteChars(2)
											.callFunction(() => {
												details.current.style.fontSize = '23px';
											})
											.typeString(
												' <strong> to </strong> the <span style="color: #d35400 ;"><strong>collection of answered and unanswered exams,</strong></span>'
											)
											.deleteChars(1)
											.pauseFor(1500)
											.typeString(
												'<strong>. And </strong><span style="color: #800000 ;"><strong>nothing will be impossible to achive.</strong></span>'
											)
											.start();
									}}
									options={{
										autoStart: true,
										loop: false,
									}}
								/>
							)}
						</div>
					</div>

					<div className={styles.image}>
						<Image
							alt=''
							src={image}
							objectFit={'contain'}
							placeholder='blur'
							blurDataURL={image}
							width={400}
							height={400}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default hero;
