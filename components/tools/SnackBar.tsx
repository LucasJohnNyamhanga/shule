import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { type } from 'os';

type typeData = {
	textMessage: string;
	opener: boolean;
	handleClearToast: () => void;
};

export default function SimpleSnackbar({
	textMessage,
	opener,
	handleClearToast,
}: typeData) {
	const [open, setOpen] = React.useState(false);

	React.useEffect(() => {
		setOpen(opener);
	}, [opener]);

	const handleClose = (
		event: React.SyntheticEvent | Event,
		reason?: string
	) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
		handleClearToast();
	};

	const action = (
		<React.Fragment>
			{/* <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button> */}
			<IconButton
				size='small'
				aria-label='close'
				color='inherit'
				onClick={handleClose}>
				<CloseIcon fontSize='small' />
			</IconButton>
		</React.Fragment>
	);

	return (
		<div>
			<Snackbar
				open={open}
				autoHideDuration={6000}
				onClose={handleClose}
				message={textMessage}
				action={action}
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
			/>
		</div>
	);
}
