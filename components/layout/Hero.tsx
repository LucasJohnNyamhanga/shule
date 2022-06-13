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
												`<span>&ldquo;</span>Education is the most powerful `
											)
											.typeString(`<span>&#128299;</span>`)
											.callFunction(() => {
												details.current.style.fontSize = '55px';
											})
											.typeString('...,')
											.deleteChars(6)
											.typeString(
												` weapon you can use to change the world.<span>&rdquo;</span>`
											)

											.pauseFor(300)

											.typeString(
												'<br/><strong>&#9997;&#127998; Nelson</strong><span style="color: #d35400 ;"><strong> Mandela</strong></span>.'
											)
											.pauseFor(2000)
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
											.callFunction(() => {
												details.current.style.fontSize = '55px';
											})
											.typeString(
												'To <strong>CHANGE</strong> the <span style="color: #d35400 ;"><strong>WORLD,</strong></span>'
											)
											.deleteChars(1)
											.typeString('<span>&#127757;</span>')
											.pauseFor(1500)
											.typeString(
												'<strong> with well </strong><span style="color: #d35400 ;"><strong>prepared Notes.</strong></span>'
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
												`<span>&ldquo;</span>Education is the most powerful `
											)
											.typeString(`<span>&#128299;</span>`)
											.callFunction(() => {
												details.current.style.fontSize = '40px';
											})
											.typeString('...,')
											.deleteChars(6)
											.typeString(
												` weapon you can use to change the world.<span>&rdquo;</span>`
											)

											.pauseFor(300)

											.typeString(
												'<br/><strong>&#9997;&#127998; Nelson</strong><span style="color: #d35400 ;"><strong> Mandela</strong></span>.'
											)
											.pauseFor(2000)
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
												' and <span style="color: #27ae60;">Explore!. <br/></span>'
											)
											.deleteChars(3)
											.pauseFor(1500)
											.callFunction(() => {
												details.current.style.fontSize = '40px';
											})
											.typeString(
												', to <strong>CHANGE</strong> the <span style="color: #d35400 ;"><strong>WORLD,</strong></span><br/>'
											)
											.deleteChars(1)
											.typeString('<span>&#127757;</span>')
											.pauseFor(1500)
											.typeString(
												'<strong> with well </strong><span style="color: #d35400 ;"><strong>prepared Notes.</strong></span>'
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
												`<span>&ldquo;</span>Education is the most powerful `
											)
											.typeString(`<span>&#128299;</span>`)
											.callFunction(() => {
												details.current.style.fontSize = '25px';
											})
											.typeString('...,')
											.deleteChars(6)
											.typeString(
												` weapon you can use to change the world.<span>&rdquo;</span>`
											)

											.pauseFor(300)

											.typeString(
												'<br/><strong>&#9997;&#127998; Nelson</strong><span style="color: #d35400 ;"><strong> Mandela</strong></span>.'
											)
											.pauseFor(2000)
											.deleteAll()
											.callFunction(() => {
												details.current.style.fontSize = '35px';
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
												' and <span style="color: #27ae60;">Explore!. <br/></span>'
											)
											.deleteChars(3)
											.pauseFor(1500)
											.callFunction(() => {
												details.current.style.fontSize = '27px';
											})
											.typeString(
												', to <strong>CHANGE</strong> the <span style="color: #d35400 ;"><strong>WORLD,</strong></span><br/>'
											)
											.deleteChars(1)
											.typeString('<span>&#127757;</span>')
											.pauseFor(1500)
											.typeString(
												'<strong> with well </strong><span style="color: #d35400 ;"><strong>prepared Notes.</strong></span>'
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
