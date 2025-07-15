
async function verstuur() {
  const input = document.getElementById("input").value;
  const chat = document.getElementById("chat");
  chat.innerHTML += `<p><strong>Jij:</strong> ${input}</p>`;
  const response = await fetch("https://miauwke-demo-proxy.vercel.app/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: input })
  });
  const data = await response.json();
  chat.innerHTML += `<p><strong>Miauwke:</strong> ${data.reply}</p>`;
  document.getElementById("input").value = "";
}
