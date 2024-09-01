function splitList() {
    const input = document.getElementById('inputList').value;
    const items = input.split('\n').filter(item => item.trim() !== '');
    const half = Math.ceil(items.length / 2);

    const firstHalf = items.slice(0, half);
    const secondHalf = items.slice(half);

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <h3>First Half</h3>
        <ul>${firstHalf.map(item => `<li>${item}</li>`).join('')}</ul>
        <h3>Second Half</h3>
        <ul>${secondHalf.map(item => `<li>${item}</li>`).join('')}</ul>
    `;
}
