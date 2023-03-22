import { useState } from 'react';
// MUI
import { Grid, Typography } from '@mui/material';
// local files
import InputForm from './components/InputForm';
import Pages from './components/Pages';
import Cache from './components/Cache';

const AppLayout = () => {
	const [pages, setPages] = useState([]);

	const [cacheSize, setCacheSize] = useState(1);

	return (
		<Grid
			container
			sx={{
				p: '12px',
				width: '100vw',
				alignItems: 'center',
				justifyContent: 'center'
			}}
		>
			<Grid item xs={12} sx={{ mb: '12px' }}>
				<Typography variant='h4' align='center'>
					FIFO Page Replacement
				</Typography>
			</Grid>
			{/* Data Input Form */}
			<InputForm
				pages={pages}
				setPages={setPages}
				cacheSize={cacheSize}
				setCacheSize={setCacheSize}
			/>

			{/* Pages */}
			<Pages pages={pages} />

			{/* Cache */}
			<Cache pages={pages} cacheSize={cacheSize} />
		</Grid>
	);
};

export default AppLayout;
