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
	const matches = useMediaQuery('(min-width:1100px)');
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
										typewriter;
										typewriter
											.callFunction(() => {
												details.current.style.fontSize = '65px';
											})

											.pauseFor(1000)
											.typeString(
												`<span>&ldquo;</span>Books and references <strong>contains</strong> `
											)
											.callFunction(() => {
												details.current.style.fontSize = '55px';
											})
											.typeString('...,')
											.deleteChars(4)
											.typeString(
												`  <span style="color: #d35400 ;"><strong> all </strong></span>  <span style="color: #d35400 ;"><strong>the answers to all the questions.</strong></span><span>&rdquo;</span>`
											)
											.pauseFor(2000)
											.typeString(
												'<br/><strong>&#9997;&#127998; shule</strong><span style="color: #a35f2e ;"><strong>.co.tz</strong></span>'
											)
											.pauseFor(3000)
											.callFunction(() => {
												details.current.style.fontSize = '45px';
											})
											.typeString('<br/><br/>Read...')
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
											.callFunction(() => {
												details.current.style.fontSize = '35px';
											})
											.pauseFor(1500)
											.deleteChars(2)

											.typeString(
												' <span style="color: #d35400 ;"><strong>thousands of references...</strong></span>'
											)

											.pauseFor(1500)
											.deleteChars(3)
											.pauseFor(1000)
											.typeString(
												'<span style="color: #d35400 ;"><strong> containing new ideas, concepts and knowledge.</strong></span>'
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
												details.current.style.fontSize = '48px';
											})

											.pauseFor(1000)
											.typeString(
												`<span>&ldquo;</span>Books and references <strong>contains</strong>, `
											)
											.typeString(`<span>&#128079;</span>`)
											.callFunction(() => {
												details.current.style.fontSize = '45px';
											})
											.typeString('...,')
											.deleteChars(6)
											.typeString(
												`  <span style="color: #d35400 ;"><strong> all </strong></span> the information  <span style="color: #d35400 ;"><strong>prepare you need to shape the future.</strong></span><span>&rdquo;</span>`
											)
											.pauseFor(2000)
											.typeString(
												'<br/><strong>&#9997;&#127998; shule</strong><span style="color: #a35f2e ;"><strong>.co.tz</strong></span>.'
											)
											.pauseFor(3000)
											.callFunction(() => {
												details.current.style.fontSize = '40px';
											})
											.typeString('<br/><br/>Read...')
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
												details.current.style.fontSize = '37px';
											})
											.typeString(
												' <span style="color: #d35400 ;"><strong>to thousands of references...</strong></span>'
											)

											.pauseFor(1500)
											.deleteChars(3)
											.typeString(
												'<strong> containing new ideas, concepts and knowledge, </strong>'
											)
											.pauseFor(1000)
											.typeString(
												'<span style="color: #d35400 ;"><strong> to shape the future.</strong></span>'
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
											.typeString(
												`<span>&ldquo;</span>Education is the <strong>passport</strong> to the <strong>future</strong>, `
											)
											.typeString(`<span>&#128079;</span>`)
											.callFunction(() => {
												details.current.style.fontSize = '23px';
											})
											.typeString('...,')
											.deleteChars(6)
											.typeString(
												`  for <span style="color: #d35400 ;"><strong>tomorrow</strong></span> belongs to those who  <span style="color: #d35400 ;"><strong>prepare for it today.</strong></span><span>&rdquo;</span>`
											)
											.pauseFor(2000)
											.typeString(
												'<br/><strong>&#9997;&#127998; Malcom</strong><span style="color: #a35f2e ;"><strong> X</strong></span>.'
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
												' <span style="color: #d35400 ;"><strong>to thousands of references...</strong></span>'
											)

											.pauseFor(1500)
											.deleteChars(3)
											.typeString(
												'<strong> containing new ideas, concepts and knowledge, </strong>'
											)
											.pauseFor(1000)
											.typeString(
												'<span style="color: #d35400 ;"><strong> to shape the future.</strong></span>'
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
