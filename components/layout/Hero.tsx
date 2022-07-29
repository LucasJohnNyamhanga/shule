import styles from '../../styles/hero.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

type dataHero = {
	text1: string;
	text2: string;
	text3: string;
	text4: string;
	text5: string;
	explanation1: string;
	explanation2: string;
	image: string;
	color1: string;
	color2: string;
};

function hero({
	text1,
	text2,
	text3,
	text4,
	text5,
	explanation1,
	explanation2,
	image,
	color1,
	color2,
}: dataHero) {
	return (
		<div className={styles.container}>
			<div className={styles.section}>
				<div className={styles.hero}>
					<div className={styles.info}>
						<div className={styles.details}>
							<h1>Best and well preparared notes.</h1>
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
							{/* <Typewriter
								onInit={(typewriter) => {
									typewriter
										.typeString(text1)
										.pauseFor(1500)
										.deleteAll()
										.typeString(text2)
										.pauseFor(1500)
										.deleteAll()
										.typeString(text3)
										.pauseFor(1500)
										.deleteAll()
										.typeString(text4)
										.pauseFor(1500)
										.deleteAll()
										.typeString(text5)
										.pauseFor(1500)
										.deleteAll()
										.start();
								}}
								options={{
									autoStart: true,
									loop: true,
								}}
							/> */}
							<div className={styles.permanentLetters}>
								{/* <span style={{ color: `${color1}` }}>
									<strong>{explanation1}</strong>
								</span>
								<span style={{ color: `${color2}` }}>
									<strong>{explanation2}</strong>
								</span> */}
								<p>
									Written by the best teachers using language which is easy to
									understand. This is the perfect learning point for you, start
									by searching or go straight to subjects below.
								</p>
							</div>
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
