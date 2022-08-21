import styles from '../../styles/hero.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

type dataHero = {
	header: string;
	explanation: string;
	image: string;
};

function hero({ header, explanation, image }: dataHero) {
	return (
		<div className={styles.container}>
			<div className={styles.section}>
				<div className={styles.hero}>
					<div className={styles.info}>
						<div className={styles.details}>
							<h1>{header}</h1>
							<div className={styles.permanentLetters}>
								<p>{explanation}</p>
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
