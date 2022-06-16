import Styles from '../../styles/footer.module.scss';

const Footer = () => {
	return (
		<div className={Styles.container}>
			<div className={Styles.innerContainer}>
				<div className={Styles.footerDetails}>
					<div className={Styles.header}>Shule Info</div>

					<div className={Styles.body}>About Us</div>
					<div className={Styles.body}>Contact Us</div>
					<div className={Styles.body}>Help Line: +255784477999</div>
				</div>
				<div className={Styles.footerDetails}>
					<div className={Styles.header}>INTERNAL LINKS</div>
					<div className={Styles.body}>Notes</div>
					<div className={Styles.body}>Review</div>
					<div className={Styles.body}>Exams</div>
					<div className={Styles.body}>References</div>
				</div>
				<div className={Styles.footerDetails}>
					<div className={Styles.header}>Guide lines</div>
					<div className={Styles.body}>Terms and Conditions </div>
					<div className={Styles.body}>Privacy Policy </div>
				</div>

				<div className={Styles.footerDetails}>
					<div className={Styles.header}>Social Media</div>
					<div className={Styles.body}>Instagram: </div>
					<div className={Styles.body}>Twitter: </div>
					<div className={Styles.body}>Facebook: </div>
				</div>
			</div>
			<div className={Styles.copyrights}>www.shule.co.tz</div>
		</div>
	);
};

export default Footer;
