// MUI
import { Grid, Card, Typography } from '@mui/material';

const Pages = props => {
	const { pages } = props;

	return (
		<Grid
			item
			container
			xs={12}
			sx={{
				mb: '12px',
				alignItems: 'center',
				justifyContent: 'center'
			}}
		>
			{/* Pages */}
			{pages.map(page => {
				return (
					<Grid
						item
						component={Card}
						sx={{
							m: '6px',
							p: '8px',
							width: '5rem',
							backgroundColor: 'primary.main',
							overflow: 'clip'
						}}
						key={page + Math.random()}
					>
						<Typography
							align='center'
							color='background.default'
							fontWeight='bold'
						>
							{page}
						</Typography>
					</Grid>
				);
			})}
		</Grid>
	);
};

export default Pages;
