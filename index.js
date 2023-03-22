function fifoPageReplacement(frames, referenceString) {
  let pageFaults = 0;
  let hits = 0;
  let queue = [];
  let hitRatio = 0;
  let table = [];

  // initialising the table with empty strings
  for (let i = 0; i < frames; i++) {
    table.push(Array(referenceString.length).fill(""));
  }

  for (let i = 0; i < referenceString.length; i++) {
    let page = referenceString[i];
    let index = queue.indexOf(page);

    // if the page is not present in the current Queue
    if (index === -1) {
      pageFaults++;

      if (queue.length === frames) {
        // let top = (i + 1) % frames;
        queue.shift();
      }
        queue.push(page);
    }

    // Page Already present
    else {
      hits++;
    }

    for (let j = 0; j < frames; j++) {
      if (j < queue.length) {
        table[j][i] = queue[j];
      } else {
        table[j][i] = "";
      }
    }
  }

  return table;

  // hitRatio = hits / referenceString.length;

  // console.log("Reference String : " + referenceString.join(" "));
  // console.log("Number of Frames : " + frames);
  // console.log("Page Faults : " + pageFaults);
  // console.log("Hits : " + hits);
  // console.log("Hit Percentage : " + hitRatio.toFixed(2) * 100);
  // console.table(table);
}

fifoPageReplacement(3, [1, 2, 3, 4, 2, 2, 3, 3, 5, 6, 7, 8, 5]);
