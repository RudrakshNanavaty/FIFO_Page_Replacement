//MUI
import {
	Grid,
	Table,
	TableContainer,
	TableBody,
	TableRow,
	TableCell,
	Paper,
	TableHead,
	Typography
} from '@mui/material';
import { CheckRounded, ClearRounded } from '@mui/icons-material';
// DevExtreme
import {
	Chart,
	PieSeries,
	Legend
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
// local files
import assets from '../assets';

const Cache = props => {
	const { pages, cacheSize } = props;

	const outputs = assets.logic(cacheSize, pages);

	return (
		<Grid
			item
			container
			xs={10}
			sx={{ alignItems: 'center', justifyContent: 'center' }}
		>
			<Grid item xs={12} sx={{ mb: '12px' }}>
				{/* Cache Table */}
				<TableContainer
					component={Paper}
					sx={{
						overflow: 'scroll',
						'&::-webkit-scrollbar': { display: 'none' }
					}}
				>
					<Table>
						<TableHead>
							<TableRow
								sx={{
									'td, th': {
										borderRight: 1,
										borderBottom: 1
									}
								}}
							>
								<TableCell />
								{outputs.table[0].map((e, index) => {
									return (
										<TableCell
											align='center'
											sx={{
												'&:last-child': {
													borderRight: 0
												}
											}}
										>
											{index + 1}
										</TableCell>
									);
								})}
							</TableRow>
						</TableHead>
						<TableBody>
							{outputs.table.map((row, index) => {
								return (
									<TableRow
										sx={{
											'td, th': {
												borderBottom: 0
											}
										}}
										key={
											row[
												Math.floor(
													Math.random() *
														outputs.length
												)
											] * Math.random()
										}
									>
										<TableCell
											align='center'
											sx={{
												borderRight: '1px solid #515151'
											}}
										>
											{index + 1}
										</TableCell>
										{row.map(e => {
											return (
												<TableCell
													align='center'
													sx={{
														borderRight:
															'1px solid #515151',
														'&:last-child': {
															borderRight: 0
														}
													}}
													key={
														e *
														Math.random() *
														Math.random()
													}
												>
													{e}
												</TableCell>
											);
										})}
									</TableRow>
								);
							})}
							<TableRow sx={{ borderTop: 1 }}>
								<TableCell
									sx={{
										borderRight: '1px solid #515151'
									}}
								/>
								{outputs.status.map(e => {
									return (
										<TableCell
											align='center'
											sx={{
												borderRight:
													'1px solid #515151',
												'&:last-child': {
													borderRight: 0
												}
											}}
											key={
												e *
												Math.random() *
												Math.random()
											}
										>
											{e ? (
												<CheckRounded color='success' />
											) : (
												<ClearRounded color='error' />
											)}
										</TableCell>
									);
								})}
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
			</Grid>

			{/* Results */}
			<Grid item xs={12}>
				<Typography align='center' fontSize='large' fontWeight='bold'>
					Hits: {outputs.hits}
				</Typography>
				<Typography align='center' fontSize='large' fontWeight='bold'>
					Misses: {outputs.misses}
				</Typography>
				<Typography align='center' fontSize='large' fontWeight='bold'>
					Hit Percent:{' '}
					{outputs.hitPercent
						? `${outputs.hitPercent.toFixed(2)} %`
						: '-'}
				</Typography>
				<Typography align='center' fontSize='large' fontWeight='bold'>
					Miss Percent:{' '}
					{100 - outputs.hitPercent
						? `${(100 - outputs.hitPercent).toFixed(2)} %`
						: '-'}
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Chart
					palette={['#1976d2']}
					data={[
						{ category: 'Hits', value: outputs.hitPercent },
						{
							category: 'Misses',
							value: 100 - outputs.hitPercent
						}
					]}
				>
					<PieSeries valueField='value' argumentField='category' />
					<Legend />
					<Animation />
				</Chart>
			</Grid>
		</Grid>
	);
};

export default Cache;
