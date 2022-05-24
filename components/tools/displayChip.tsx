import Styles from '../../styles/ChipDisplay.module.scss';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

type dataType = {
	label: string;
	handleDelete: (label: string) => void;
};

const displayChip = ({ label, handleDelete }: dataType) => {
	return (
		<div>
			<div className={Styles.chipStyle}>
				<div className={Styles.contentDisplay}>
					<div className={Styles.labelText}> {label}</div>
					<HighlightOffIcon
						onClick={() => {
							handleDelete(label);
						}}
						className={Styles.labelIcon}
					/>
				</div>
			</div>
		</div>
	);
};

export default displayChip;
