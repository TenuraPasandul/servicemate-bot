// ============================================
// CONFIGURATION - DEVELOPER SETTINGS
// ============================================
const CHATBOT_CONFIG = {
    apiKey: 'YOUR_API_KEY_HERE',  // Replace with your API key
    apiEndpoint: 'https://api.example.com/chat',  // Replace with your endpoint
    cssUrl: 'https://cdn.jsdelivr.net/gh/TenuraPasandul/servicemate-bot/bot.css'  // CSS file URL
};

// Load CSS
(function() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = CHATBOT_CONFIG.cssUrl;
    document.head.appendChild(link);
})();

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChatbot);
} else {
    initChatbot();
}

function initChatbot() {
    // Create chatbot HTML structure
    const chatbotHTML = `
        <div class="chatbot-container">
            <button class="chat-button" id="chatBtn">
                <svg viewBox="0 0 24 24">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
                    <circle cx="9" cy="10" r="1.5"/>
                    <circle cx="15" cy="10" r="1.5"/>
                </svg>
            </button>
            <div class="chat-window" id="chatWin">
                <div class="chat-header">
                    <div class="chat-header-content">
                        <div class="bot-avatar">
                            <svg viewBox="0 0 24 24">
                                <path d="M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3zM7.5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S9.83 13 9 13s-1.5-.67-1.5-1.5zM16 17H8v-2h8v2zm-.5-4c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                            </svg>
                        </div>
                        <div class="chat-header-text">
                            <h3>AI Assistant</h3>
                            <p>Online</p>
                        </div>
                    </div>
                    <button class="icon-btn" id="themeBtn" title="Toggle theme">
                        <svg viewBox="0 0 24 24">
                            <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/>
                        </svg>
                    </button>
                </div>
                <div class="chat-messages" id="chatMsg">
                    <div class="message bot">
                        <div class="message-avatar">
                            <svg viewBox="0 0 24 24">
                                <path d="M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3zM7.5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S9.83 13 9 13s-1.5-.67-1.5-1.5zM16 17H8v-2h8v2zm-.5-4c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                            </svg>
                        </div>
                        <div class="message-content">👋 Hello! I'm your AI assistant. How can I help you today?</div>
                    </div>
                    <div class="message bot">
                        <div class="message-avatar">
                            <svg viewBox="0 0 24 24">
                                <path d="M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3zM7.5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S9.83 13 9 13s-1.5-.67-1.5-1.5zM16 17H8v-2h8v2zm-.5-4c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                            </svg>
                        </div>
                        <div class="typing-indicator" id="typing">
                            <div class="typing-dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="chat-input-container">
                    <div class="chat-input-wrapper">
                        <input type="text" class="chat-input" id="chatInp" placeholder="Type your message...">
                        <button class="send-btn" id="sendBtn">
                            <svg viewBox="0 0 24 24">
                                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Inject chatbot into body
    document.body.insertAdjacentHTML('beforeend', chatbotHTML);

    // Initialize functionality
    const chatBtn = document.getElementById('chatBtn');
    const chatWin = document.getElementById('chatWin');
    const chatMsg = document.getElementById('chatMsg');
    const chatInp = document.getElementById('chatInp');
    const sendBtn = document.getElementById('sendBtn');
    const themeBtn = document.getElementById('themeBtn');
    const typing = document.getElementById('typing');

    // Cookie functions
    function setCookie(name, value, days) {
        const d = new Date();
        d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = name + '=' + value + ';expires=' + d.toUTCString() + ';path=/';
    }

    function getCookie(name) {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let c = cookies[i];
            while (c.charAt(0) === ' ') c = c.substring(1);
            if (c.indexOf(name + '=') === 0) return c.substring(name.length + 1);
        }
        return null;
    }

    // Load theme from cookie
    if (getCookie('chatbot-theme') === 'dark') {
        chatWin.classList.add('dark');
    }

    // Toggle chat window
    chatBtn.onclick = () => {
        chatWin.classList.toggle('active');
        chatBtn.classList.toggle('active');
        if (chatWin.classList.contains('active')) chatInp.focus();
    };

    // Toggle theme
    themeBtn.onclick = () => {
        chatWin.classList.toggle('dark');
        setCookie('chatbot-theme', chatWin.classList.contains('dark') ? 'dark' : 'light', 365);
    };

    // Add message function
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message ' + sender;
        
        const avatarSvg = (sender === 'bot' || sender === 'error') 
            ? '<svg viewBox="0 0 24 24"><path d="M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3zM7.5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S9.83 13 9 13s-1.5-.67-1.5-1.5zM16 17H8v-2h8v2zm-.5-4c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>'
            : '<svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>';
        
        messageDiv.innerHTML = '<div class="message-avatar">' + avatarSvg + '</div><div class="message-content">' + text + '</div>';
        chatMsg.insertBefore(messageDiv, typing.parentElement);
        chatMsg.scrollTop = chatMsg.scrollHeight;
    }

    // Send message function
    function sendMessage() {
        const message = chatInp.value.trim();
        
        if (!message) return;
        
        // Validate API configuration
        if (!CHATBOT_CONFIG.apiKey || CHATBOT_CONFIG.apiKey === 'YOUR_API_KEY_HERE') {
            addMessage('⚠️ Error: API key is not configured. Please contact the website administrator.', 'error');
            return;
        }
        
        if (!CHATBOT_CONFIG.apiEndpoint) {
            addMessage('⚠️ Error: API endpoint is not configured. Please contact the website administrator.', 'error');
            return;
        }
        
        // Add user message
        addMessage(message, 'user');
        chatInp.value = '';
        
        // Show typing indicator
        typing.classList.add('active');
        sendBtn.disabled = true;
        chatMsg.scrollTop = chatMsg.scrollHeight;
        
        // Make API request
        fetch(CHATBOT_CONFIG.apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + CHATBOT_CONFIG.apiKey
            },
            body: JSON.stringify({
                message: message
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('API request failed with status ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            typing.classList.remove('active');
            sendBtn.disabled = false;
            
            // Extract response from various possible fields
            const botResponse = data.response || data.message || data.reply || data.text || 'No response received';
            addMessage(botResponse, 'bot');
        })
        .catch(error => {
            typing.classList.remove('active');
            sendBtn.disabled = false;
            addMessage('⚠️ Error: ' + error.message + '. Please try again later.', 'error');
            console.error('Chatbot API Error:', error);
        });
    }

    // Event listeners
    sendBtn.onclick = sendMessage;
    chatInp.onkeypress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };
}
