import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import AppLayout from './AppLayout';
import assets from './assets';

function App() {
	return (
		<ThemeProvider theme={createTheme(assets.theme)}>
			<CssBaseline />

			{/* Layout */}
			<AppLayout />
		</ThemeProvider>
	);
}

export default App;
