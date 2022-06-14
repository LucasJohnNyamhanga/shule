import { type } from 'os';
import React from 'react';
import Styles from '../../styles/inputtext.module.scss';

type textInput = {
	name: string;
	handletext: (event: React.ChangeEvent<HTMLInputElement>) => void;
	value?: string;
	textHolder: string;
	handleEnter: () => void;
};

const InputText = ({
	name,
	handletext,
	value,
	textHolder,
	handleEnter,
}: textInput) => {
	return (
		<div className={Styles.container}>
			<input
				className={Styles.main}
				type='text'
				value={value}
				placeholder={textHolder}
				name={name}
				onChange={(event) => {
					handletext(event);
				}}
				onKeyDownCapture={handleEnter}
			/>
		</div>
	);
};

export default InputText;
