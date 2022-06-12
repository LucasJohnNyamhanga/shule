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
	const matches = useMediaQuery('(min-width:888px)');
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
											.typeString(
												`<span>&ldquo;</span>The more that <span style="color: #a35f2e ;"><strong>you read,</strong></span> the more things you <span style="color: #d35400 ;"><strong>will know,</strong></span> `
											)
											.typeString(`<span>&#128079;</span>`)
											.callFunction(() => {
												details.current.style.fontSize = '55px';
											})
											.typeString('...,')
											.deleteChars(6)
											.typeString(
												`the more that <span style="color: #007aff ;"><strong>you learn,</strong></span> <span style="color: #800000 ;"><strong>the more places you’ll go.</strong></span><span>&rdquo;</span>`
											)
											.pauseFor(2000)
											.typeString(
												'<br/><strong>&#9997;&#127998; Dr. </strong><span style="color: #a35f2e ;"><strong>Seuss</strong></span>.'
											)
											.pauseFor(3000)
											.deleteAll()
											.callFunction(() => {
												details.current.style.fontSize = '65px';
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
												details.current.style.fontSize = '55px';
											})
											.typeString(
												' <strong> to </strong> the <span style="color: #d35400 ;"><strong>examination collection,</strong></span>'
											)
											.deleteChars(1)
											.pauseFor(1500)
											.typeString(
												'<strong>. And </strong><span style="color: #d35400 ;"><strong>nothing will be impossible.</strong></span>'
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
												details.current.style.fontSize = '23px';
											})
											.typeString('...,')
											.deleteChars(6)
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
											.deleteChars(7)
											.typeString('Search...')
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
												details.current.style.fontSize = '25px';
											})
											.typeString(
												' <strong> to </strong> the <span style="color: #d35400 ;"><strong>examination collection,</strong></span>'
											)
											.deleteChars(1)
											.pauseFor(1500)
											.typeString(
												'<strong>. And </strong><span style="color: #d35400 ;"><strong>nothing is impossible.</strong></span>'
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
