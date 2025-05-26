// Temp File Detection
const tempInput = document.getElementById('fileInput');
const tempOutput = document.getElementById('tempFilesList');

if (tempInput) {
  tempInput.addEventListener('change', (event) => {
    const files = event.target.files;
    tempOutput.innerHTML = '';
    const tempPatterns = [/\.tmp$/, /\.bak$/, /~$/, /^~\$/];

    Array.from(files).forEach(file => {
      if (tempPatterns.some(p => p.test(file.name))) {
        const li = document.createElement('li');
        li.textContent = file.webkitRelativePath || file.name;
        tempOutput.appendChild(li);
      }
    });

    if (!tempOutput.children.length) {
      const li = document.createElement('li');
      li.textContent = '✅ No temporary files found!';
      li.style.borderLeft = '4px solid #22c55e';
      tempOutput.appendChild(li);
    }
  });
}

// Large File Detection
const largeInput = document.getElementById('largeFileInput');
const largeOutput = document.getElementById('largeFilesList');

if (largeInput) {
  largeInput.addEventListener('change', (event) => {
    const files = event.target.files;
    largeOutput.innerHTML = '';

    Array.from(files).forEach(file => {
      const sizeInMB = file.size / (1024 * 1024);
      if (sizeInMB > 100) {
        const li = document.createElement('li');
        li.textContent = `${file.webkitRelativePath || file.name} - ${sizeInMB.toFixed(2)} MB`;
        largeOutput.appendChild(li);
      }
    });

    if (!largeOutput.children.length) {
      const li = document.createElement('li');
      li.textContent = '✅ No large files found!';
      li.style.borderLeft = '4px solid #22c55e';
      largeOutput.appendChild(li);
    }
  });
}
