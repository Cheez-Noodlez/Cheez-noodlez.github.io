function copyLink() {
    const siteLink = "cheez-noodlez.online";
    navigator.clipboard.writeText(siteLink);
    alert("Link copied! Now go paste it on Discord! 🧀");
}
const questions = [
        { q: "Pick a Friday night activity:", a: ["Cozy blanket", "Loud club", "Pranking friends", "Organizing socks"], types: ["A", "B", "C", "D"] },
        { q: "What’s your favorite type of noodle?", a: ["Bowtie", "Elbow Macaroni", "Spirals", "Spaghetti"], types: ["A", "B", "C", "D"] },
        { q: "A Rat Animation appears on screen. You:", a: ["Give it a hat", "Close the tab", "Click it 100 times", "Study the code"], types: ["A", "B", "C", "D"] },
        { q: "Pick a smell:", a: ["Honey", "Fresh bread", "Spices", "Old books"], types: ["A", "B", "C", "D"] },
        { q: "Ketchup on Mac and Cheese?", a: ["Maybe...", "Never!", "I've done worse", "Technically possible"], types: ["A", "B", "C", "D"] },
        { q: "Your superpower is:", a: ["Calming people", "Reliability", "Making laughs", "Random facts"], types: ["A", "B", "C", "D"] },
        { q: "Choose a weather:", a: ["Foggy", "Sunny", "Stormy", "Cold/Crisp"], types: ["A", "B", "C", "D"] },
        { q: "Pick a website vibe:", a: ["Aesthetic", "Simple", "Total chaos", "Organized"], types: ["A", "B", "C", "D"] },
        { q: "How do you like melted cheese?", a: ["Gooey", "Stretchy", "Burnt", "Grated"], types: ["A", "B", "C", "D"] },
        { q: "Are you actually a noodle?", a: ["In my heart", "No, I'm human", "Sentient Macaroni", "Impossible"], types: ["A", "B", "C", "D"] }
    ];

    let currentQ = 0;
    let scores = { A: 0, B: 0, C: 0, D: 0 };

    function loadQuestion() {
        const qText = document.getElementById("quiz-question");
        const oBox = document.getElementById("quiz-options");
        
        if (currentQ < questions.length) {
            let data = questions[currentQ];
            qText.innerText = data.q;
            oBox.innerHTML = "";
            
            data.a.forEach((option, index) => {
                let btn = document.createElement("button");
                btn.innerText = option;
                btn.style = "display: block; width: 100%; margin: 10px 0; padding: 10px; background: white; border: 2px solid #ffcc00; border-radius: 10px; cursor: pointer; font-size: 16px;";
                btn.onclick = () => selectOption(data.types[index]);
                oBox.appendChild(btn);
            });
        } else {
            showResult();
        }
    }

    function selectOption(type) {
        scores[type]++;
        currentQ++;
        loadQuestion();
    }

    function showResult() {
        const quizBox = document.getElementById("quiz-box");
        let winner = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
        
        let results = {
            A: { name: "BRIE", desc: "You are sophisticated, soft-hearted, and cozy. The fancy choice!" },
            B: { name: "SHARP CHEDDAR", desc: "You are a reliable classic. Everyone likes you and you're the backbone of Mac and Cheese." },
            C: { name: "PEPPER JACK", desc: "You are SPICY and UNHINGED! You're the life of the party and a bit unpredictable." },
            D: { name: "PARMESAN", desc: "You are sharp, smart, and a bit salty. A perfectionist who makes everything better." }
        };

        quizBox.innerHTML = `<h2 style="color: #e67e22;">You are ${results[winner].name}!</h2>
                             <p style="font-size: 18px;">${results[winner].desc}</p>
                             <button onclick="location.reload()" style="padding: 10px 20px; background: #ffcc00; border: none; border-radius: 5px; cursor: pointer;">Try Again</button>`;
    }

    loadQuestion();