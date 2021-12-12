export function showSpinner(data) {
    spinnerDiv.style.display = 'flex';
    dataDiv.innerText=JSON.stringify(Object.fromEntries(data));
}

export function hideSpinner() {
    spinnerDiv.style.display = 'none';
}