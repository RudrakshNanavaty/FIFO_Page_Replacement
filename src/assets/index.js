const assets = {
	theme: {
		palette: {
			mode: 'light',
			background: { paper: '#a5c8ff', default: '#d4e3ff' }
		},
		shape: { borderRadius: 12 }
	},
	logic: (cacheSize, pages) => {
		let pageFaults = 0;
		let hits = 0;
		let queue = [];
		let hitRatio = 0;
		let table = [];

		// initialising the table
		for (let i = 0; i < cacheSize; i++)
			table.push(Array(pages.length).fill(''));

		for (let i = 0; i < pages.length; i++) {
			let page = pages[i];
			let index = queue.indexOf(page);

			// if the page is not present in the current Queue
			if (index === -1) {
				pageFaults++;

				if (queue.length === cacheSize) queue.shift();

				queue.push(page);
			}

			// Page Already present
			else hits++;

			for (let j = 0; j < cacheSize; j++)
				// if current frame index < total cache size
				table[j][i] = j < queue.length ? queue[j] : '-';
		}

		hitRatio = hits / pages.length;

		return {
			table,
			pageFaults,
			hits,
			hitPercent: hitRatio.toFixed(2) * 100
		};
	}
};

export default assets;
