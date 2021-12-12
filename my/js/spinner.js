export function showSpinner(data) {
    spinnerEl.style.display = 'flex';
    dataEl.innerText=JSON.stringify(Object.fromEntries(data));
}

export function hideSpinner() {
    spinnerEl.style.display = 'none';
}