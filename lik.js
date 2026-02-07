// 1. Data Handling (Arrays) - Shuruud qasab ah
let history = [];

function convert() {
    // 2. DOM Selection
    const usd = document.getElementById('usdAmount').value;
    const feedback = document.getElementById('feedback');
    const result = document.getElementById('result');
    const list = document.getElementById('historyList');
    const rate = 26000; // Qiimaha doolarka

    // 3. Input Validation (6 Marks)
    // Waxaan hubinaynaa inaan foomka madhan la gudbin ama tiro khaldan
    if (usd === "" || usd <= 0) {
        feedback.innerHTML = "Fadlan geli tiroyin ka weyn eber!";
        feedback.style.color = "red";
        result.innerHTML = "";
        return; 
    }

    // 4. Logic & Calculation
    const total = usd * rate;

    // 5. DOM Manipulation & Feedback (6 Marks)
    feedback.innerHTML = "Si guul leh ayaa loo beddelay!";
    feedback.style.color = "black";
    result.innerHTML = `${usd} USD = ${total.toLocaleString()} SOS`;

    // Kaydinta xogta (Array of Objects/Strings)
    history.push(`${usd} USD -> ${total.toLocaleString()} SOS`);

    // Cusboonaysiinta liiska si toos ah (Dynamic Update)
    list.innerHTML = "";
    history.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });
}