import { useState, useRef, useEffect } from 'react';
import Styles from '../../styles/imageUpload.module.scss';
import { BsFillFileEarmarkBreakFill } from 'react-icons/bs';
import { type } from 'os';

type dataType = {
	uploadToServer: (image: string | Blob, action: boolean) => void;
	clear?: boolean;
	clearData?: () => void;
	image: string;
	deactiveteImage?: boolean;
	extension: (value: string) => void;
};

export default function PrivatePage({
	uploadToServer,
	deactiveteImage,
	image,
	clear,
	clearData,
	extension,
}: dataType) {
	const [name, setName] = useState('');
	const [display, setDisplay] = useState(false);
	const fileSelector = useRef<HTMLInputElement>(null!);

	interface HTMLInputEvent extends Event {
		target: HTMLInputElement & EventTarget;
	}

	const uploadToClient = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files[0]) {
			const i = event.target.files[0];
			setName(i.name);
			let extensionOfFile = event.target.files[0].type.replace(/(.*)\//g, '');
			extension(extensionOfFile);
			var file = new File([URL.createObjectURL(i)], 'filename');
			uploadToServer(i, true);
			setDisplay(true);
		}
	};

	let format = () => {
		if (image == '') {
			setDisplay(false);
		} else {
			setDisplay(true);
			setName(image);
		}
	};

	useEffect(() => {
		format();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [clear]);

	return (
		<div className={Styles.container}>
			<div>
				<div>{display && <div className={Styles.displayFile}>{name}</div>}</div>
				<input
					ref={fileSelector}
					type='file'
					hidden
					name='myImage'
					onChange={(e) => {
						uploadToClient(e);
					}}
					accept='application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, application/pdf'
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
