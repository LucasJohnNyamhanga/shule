import Styles from '../../styles/footer.module.scss';

const Footer = () => {
	return (
		<div className={Styles.container}>
			<div className={Styles.innerContainer}>
				<div className={Styles.footerDetails}>
					<div className={Styles.header}> LINKS</div>
					<div className={Styles.body}>Notes</div>
					<div className={Styles.body}>Review</div>
					<div className={Styles.body}>Exams</div>
					<div className={Styles.body}>References</div>
				</div>
				<div className={Styles.footerDetails}>
					<div className={Styles.header}>About Us</div>
				</div>
				<div className={Styles.footerDetails}>
					<div className={Styles.header}>Guide lines</div>
				</div>

				<div className={Styles.footerDetails}>
					<div className={Styles.header}>Social Media</div>
				</div>
			</div>
			<div className={Styles.copyrights}>www.shule.co.tz</div>
		</div>
	);
};

export default Footer;
