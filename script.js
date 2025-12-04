document.getElementById("citySelect").addEventListener("change", function () {
    const file = this.value;
    if (!file) return;

    fetch("data/" + file)
        .then(response => response.json())
        .then(data => updateTable(data))
        .catch(err => console.error("Error loading JSON", err));
});

function updateTable(data) {
    document.getElementById("times").classList.remove("hidden");
    document.getElementById("cityName").textContent = data.city;

    const tableBody = document.getElementById("prayerTable");
    tableBody.innerHTML = "";

    data.timings.forEach(item => {
        const row = `
            <tr>
                <td>${item.prayer}</td>
                <td>${item.azan}</td>
                <td>${item.iqama}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}
