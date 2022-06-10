import { useState, useRef, useEffect } from 'react';
import Styles from '../../styles/imageUpload.module.scss';
import { BsFillFileEarmarkBreakFill } from 'react-icons/bs';
import { type } from 'os';
import PdfViewer from './PdfViewer';

type dataType = {
	uploadToServer: (image: string | Blob, action: boolean) => void;
	clear?: boolean;
	clearData?: () => void;
	image: string;
	deactiveteImage?: boolean;
};

export default function PrivatePage({
	uploadToServer,
	deactiveteImage,
	image,
	clear,
	clearData,
}: dataType) {
	const [url, setUrl] = useState('');
	const [display, setDisplay] = useState(false);
	const fileSelector = useRef<HTMLInputElement>(null!);

	interface HTMLInputEvent extends Event {
		target: HTMLInputElement & EventTarget;
	}

	const uploadToClient = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files[0]) {
			const i = event.target.files[0];
			setUrl(URL.createObjectURL(i));
			uploadToServer(i, true);
			setDisplay(true);
			console.log(i.name);
		}
	};

	let format = () => {
		if (image == '') {
			setDisplay(false);
		} else {
			setUrl(image);
			setDisplay(true);
		}
	};

	useEffect(() => {
		format();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [clear]);

	return (
		<div className={Styles.container}>
			<div>
				<div>{display && <PdfViewer url={url} />}</div>
				<input
					ref={fileSelector}
					type='file'
					hidden
					name='myImage'
					onChange={(e) => {
						uploadToClient(e);
					}}
				/>
				<div
					onClick={() => fileSelector.current.click()}
					className={Styles.imageSelect}>
					<BsFillFileEarmarkBreakFill />
					<div className={Styles.imageSelectText}>Select File</div>
				</div>
			</div>
		</div>
	);
}
