const body = document.querySelector('body');
const containerDiv = document.createElement('div').classList('container');
const gridDiv = document.createElement('div');
gridDiv.style.display = 'grid';
gridDiv.style.width = gridDiv.style.height = '16px';
gridDiv.textContent = 'appended';
body.appendChild(containerDiv.appendChild(gridDiv));