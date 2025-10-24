(function() {
  // Inject CSS dynamically if not already linked
  if (!document.getElementById('chatbot-style')) {
    const link = document.createElement('link');
    link.id = 'chatbot-style';
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/gh/yourusername/chatbot-widget/bot.css';
    document.head.appendChild(link);
  }

  // Create chatbot button
  const toggleButton = document.createElement('button');
  toggleButton.id = 'chatbot-toggle';
  toggleButton.textContent = '💬';
  document.body.appendChild(toggleButton);

  // Create chatbot container
  const chatContainer = document.createElement('div');
  chatContainer.id = 'chatbot-container';
  chatContainer.innerHTML = `
    <div id="chatbot-header">AI Assistant</div>
    <div id="chatbot-messages">
      <p>👋 Hi there! How can I help you today?</p>
    </div>
    <input type="text" id="chatbot-input" placeholder="Type a message...">
  `;
  document.body.appendChild(chatContainer);

  // Toggle open/close
  toggleButton.addEventListener('click', () => {
    chatContainer.style.display =
      chatContainer.style.display === 'flex' ? 'none' : 'flex';
  });

  // Simple chat reply system
  const input = chatContainer.querySelector('#chatbot-input');
  const messages = chatContainer.querySelector('#chatbot-messages');

  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && input.value.trim() !== '') {
      const userMsg = document.createElement('p');
      userMsg.textContent = '🧑 ' + input.value;
      messages.appendChild(userMsg);

      const botMsg = document.createElement('p');
      botMsg.textContent = '🤖 ' + 'You said: ' + input.value;
      messages.appendChild(botMsg);

      input.value = '';
      messages.scrollTop = messages.scrollHeight;
    }
  });
})();
