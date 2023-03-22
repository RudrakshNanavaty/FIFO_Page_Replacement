import { useState } from 'react';
// MUI
import { Grid, TextField, Button } from '@mui/material';

const InputForm = props => {
	const { pages, setPages, setCacheSize } = props;

	const [pageFieldValue, setPageFieldValue] = useState('');
	const [cacheSizeFieldValue, setCacheSizeFieldValue] = useState('');

	const updatePages = () => {
		setPageFieldValue('');
		setPages([...pages, pageFieldValue ]);
	};

	const updateCacheSize = () => {
		setCacheSizeFieldValue('');
		setCacheSize(parseFloat(cacheSizeFieldValue));
	};

	return (
		// Data Input Form
		<Grid
			item
			container
			xs={6}
			columnSpacing='12px'
			sx={{ mb: '12px', alignItems: 'center', justifyContent: 'center' }}
		>
			{/* Cache Size Controls */}
			<Grid
				item
				container
				xs={6}
				sx={{
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column'
				}}
			>
				{/* Cache size input field */}
				<TextField
					label='Enter Cache Size'
					value={cacheSizeFieldValue}
					onChange={e => setCacheSizeFieldValue(e.target.value)}
					sx={{
						m: '12px',
						backgroundColor: 'background.paper',
						borderRadius: '12px'
					}}
				/>

				{/* Update cache size button */}
				<Button variant='contained' onClick={updateCacheSize}>
					UPDATE CACHE SIZE
				</Button>
			</Grid>

			{/* Page Controls */}
			<Grid
				item
				container
				xs={6}
				sx={{
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column'
				}}
			>
				{/* Page input field */}
				<TextField
					autoFocus
					label='Enter Page Value'
					value={pageFieldValue}
					onChange={e => setPageFieldValue(e.target.value)}
					sx={{
						m: '12px',
						backgroundColor: 'background.paper',
						borderRadius: '12px'
					}}
				/>

				{/* Add page button */}
				<Button
					variant='contained'
					onClick={updatePages}
					sx={{ height: 'inherit' }}
				>
					ADD PAGE
				</Button>
			</Grid>
		</Grid>
	);
};

export default InputForm;
