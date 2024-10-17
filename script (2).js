function calculateLove() {
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();
    if (name1 === "" || name2 === "") {
        animateText("loveScore", "❌ Please enter both names!");
        animateText("loveMessage", "");
        return;
    }
    
    // Generating a random love percentage for fun
    const lovePercentage = Math.floor(Math.random() * 101);
    
    // Fun messages based on the percentage
    let message = "";
    if (lovePercentage > 80) {
        message = "🌹 You two are a perfect match! 💍";
    } else if (lovePercentage > 50) {
        message = "💖 There's a beautiful bond between you! 💖";
    } else if (lovePercentage > 30) {
        message = "💞 There's potential, keep it growing! 💞";
    } else {
        message = "💔 Love might need a little more work. 💔";
    }
    
    animateText("loveScore", `💘 ${lovePercentage}% 💘`);
    animateText("loveMessage", message);
}

// Function to animate the result text
function animateText(id, text) {
    const element = document.getElementById(id);
    element.style.opacity = "0";
    setTimeout(() => {
        element.innerHTML = text;
        element.style.opacity = "1";
        element.style.transition = "opacity 0.8s ease, transform 0.5s ease";
        element.style.transform = "translateY(0)";
    }, 200);
}
