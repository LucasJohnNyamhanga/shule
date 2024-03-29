import { useState, useRef, useEffect } from 'react';
import Styles from '../../styles/imageUpload.module.scss';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

type dataType = {
	uploadToServer: (image: string | Blob, action: boolean) => void;
	clear?: boolean;
	clearData?: () => void;
	image?: string;
	deactiveteImage?: boolean;
};

export default function PrivatePage({
	uploadToServer,
	deactiveteImage,
	image,
	clear,
	clearData,
}: dataType) {
	const [display, setDisplay] = useState(false);
	const [createObjectURL, setCreateObjectURL] = useState<
		string | null | undefined
	>(null);
	const fileSelector = useRef<HTMLInputElement>(null!);

	interface HTMLInputEvent extends Event {
		target: HTMLInputElement & EventTarget;
	}

	const uploadToClient = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files[0]) {
			const i = event.target.files[0];
			setCreateObjectURL(URL.createObjectURL(i));
			setDisplay(true);
			uploadToServer(i, true);
		}
	};

	let format = () => {
		setCreateObjectURL(null);
		if (deactiveteImage) {
			setDisplay(false);
		} else {
			setDisplay(true);
		}
		if (clearData != undefined) clearData();
	};

	useEffect(() => {
		format();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [clear]);

	return (
		<div className={Styles.container}>
			<div>
				<img
					alt=''
					src={createObjectURL == null ? image : createObjectURL}
					className={display ? Styles.show : Styles.hide}
				/>
				<input
					ref={fileSelector}
					type='file'
					hidden
					name='myImage'
					onChange={(e) => {
						uploadToClient(e);
					}}
					accept='image/*'
				/>
				<div
					onClick={() => fileSelector.current.click()}
					className={Styles.imageSelect}>
					<AddPhotoAlternateIcon />
					<div className={Styles.imageSelectText}>Select Image</div>
				</div>
			</div>
		</div>
	);
}
