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
										typewriter
											.callFunction(() => {
												details.current.style.fontSize = '65px';
											})

											.pauseFor(1000)
											.typeString(
												`<span>&ldquo;</span>Learning is best done through <span style="color: #a35f2e ;"><strong>questions</strong> and </span> <strong>answers.</strong><span style="color: #d35400 ;">`
											)
											.typeString(`<span>&#128079;</span><br/>`)
											.callFunction(() => {
												details.current.style.fontSize = '47px';
											})
											.typeString('And the only way to get it right')
											.typeString('...,')
											.deleteChars(4)
											.pauseFor(1500)
											.typeString(
												`, <span style="color: #800000 ;"><strong>is by knowing the right answer</strong></span>.<span>&rdquo;</span>`
											)
											.pauseFor(2000)
											.typeString(
												'<br/><span style="color: #d35400 ;"><strong>&#9997;&#127998; shule.co.tz</strong></span>'
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
												details.current.style.fontSize = '50px';
											})
											.typeString(
												' <strong> to </strong><span style="color: #d35400 ;"><strong>the collection of infinite questions and answers...</strong></span>'
											)
											.deleteChars(2)
											.pauseFor(1500)
											.typeString(
												'<strong> Lets know <span>&ldquo;</span>WHAT<span>&rdquo;</span> is the answer </strong>'
											)
											.pauseFor(1500)
											.typeString(
												'<span style="color: #27ae60 ;"><strong>and <span>&ldquo;</span>WHY<span>&rdquo;</span> is the answer.</strong></span>'
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
											.typeString(
												`<span>&ldquo;</span>Learning is best done through <span style="color: #a35f2e ;"><strong>questions</strong> and </span> <strong>answers.</strong><span style="color: #d35400 ;">`
											)
											.typeString(`<span>&#128079;</span><br/>`)
											.callFunction(() => {
												details.current.style.fontSize = '38px';
											})
											.typeString('And the only way to get it right')
											.typeString('...,')
											.deleteChars(4)
											.pauseFor(1500)
											.typeString(
												`, <span style="color: #800000 ;"><strong>is by knowing the right answer</strong></span>.<span>&rdquo;</span>`
											)
											.pauseFor(2000)
											.typeString(
												'<br/><span style="color: #d35400 ;"><strong>&#9997;&#127998; shule.co.tz</strong></span>'
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
												details.current.style.fontSize = '38px';
											})
											.typeString(
												' <strong> to </strong><span style="color: #d35400 ;"><strong>the collection of infinite questions and answers...</strong></span>'
											)
											.deleteChars(2)
											.pauseFor(1500)
											.typeString(
												'<strong> Lets know <span>&ldquo;</span>WHAT<span>&rdquo;</span> is the answer </strong>'
											)
											.pauseFor(1500)
											.typeString(
												'<span style="color: #27ae60 ;"><strong>and <span>&ldquo;</span>WHY<span>&rdquo;</span> is the answer.</strong></span>'
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
												details.current.style.fontSize = '33px';
											})

											.pauseFor(1000)
											.typeString(
												`<span>&ldquo;</span>Learning is best done through <span style="color: #a35f2e ;"><strong>questions</strong> and </span> <strong>answers.</strong><span style="color: #d35400 ;">`
											)
											.callFunction(() => {
												details.current.style.fontSize = '21px';
											})
											.pauseFor(1000)
											.typeString(`<span>&#127941;</span><br/>`)

											.typeString('And the only way to get it right')
											.typeString('...,')
											.deleteChars(4)
											.pauseFor(1500)
											.typeString(
												`, <span style="color: #800000 ;"><strong>is by knowing the right answer</strong></span>.<span>&rdquo;</span>`
											)
											.pauseFor(2000)
											.typeString(
												'<br/><span style="color: #d35400 ;"><strong>&#9997;&#127998; shule.co.tz</strong></span>'
											)
											.pauseFor(3000)
											.deleteAll()
											.callFunction(() => {
												details.current.style.fontSize = '31px';
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
												' <strong> to </strong><span style="color: #d35400 ;"><strong>the collection of infinite questions and answers...</strong></span>'
											)
											.deleteChars(2)
											.pauseFor(1500)
											.typeString(
												'<strong> Lets know <span>&ldquo;</span>WHAT<span>&rdquo;</span> is the answer </strong>'
											)
											.pauseFor(1500)
											.typeString(
												'<span style="color: #27ae60 ;"><strong>and <span>&ldquo;</span>WHY<span>&rdquo;</span> is the answer.</strong></span>'
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
