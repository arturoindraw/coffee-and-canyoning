
import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../types';
import { TRADUCCIONES, CHAT_RESPUESTAS_ES, CHAT_RESPUESTAS_EN } from '../constants';

interface Message {
  text: string;
  sender: 'user' | 'bot';
  type?: 'text' | 'form';
}

const SeryeiChat: React.FC<{ lang: Language }> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const t = TRADUCCIONES[lang];
  const dictionary = lang === 'es' ? CHAT_RESPUESTAS_ES : CHAT_RESPUESTAS_EN;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    // Welcome message after 3 seconds
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowNotification(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    setShowNotification(false);
    if (messages.length === 0) {
      addBotMessage(dictionary.respuestas.saludo.texto, dictionary.respuestas.saludo.botones);
    }
  };

  const addBotMessage = (text: string, buttons: string[] = []) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { text, sender: 'bot' }]);
      if (buttons.length > 0) {
        // We handle buttons separately in the render
      }
    }, 1000);
  };

  const handleSend = (text: string = inputValue) => {
    if (!text.trim()) return;
    
    setMessages(prev => [...prev, { text, sender: 'user' }]);
    setInputValue('');
    
    // Process intent
    setIsTyping(true);
    setTimeout(() => {
      const intent = detectIntent(text);
      const resp = dictionary.respuestas[intent] || dictionary.respuestas.default;
      setIsTyping(false);
      setMessages(prev => [...prev, { text: resp.texto, sender: 'bot' }]);
    }, 1000);
  };

  const detectIntent = (text: string) => {
    const msg = text.toLowerCase();
    for (const [intent, keywords] of Object.entries(dictionary.keywords)) {
      if (keywords.some(k => msg.includes(k))) return intent;
    }
    return "default";
  };

  const handleAction = (btn: string) => {
    const action = dictionary.acciones[btn];
    
    if (action === 'whatsapp') {
      window.open(`https://wa.me/573015421123?text=Hola%20Sergio,%20vengo%20del%20chat%20con%20Seryei`, '_blank');
    } else if (action === 'email') {
      window.location.href = "mailto:sergiocastaneda.16.sc@gmail.com";
    } else if (action?.startsWith('scrollTo')) {
      const section = action.replace('scrollTo', '').toLowerCase();
      const target = document.getElementById(section === 'routes' ? 'recorridos' : section);
      target?.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    } else if (action === 'showForm') {
      setMessages(prev => [...prev, { text: "📝", sender: 'bot', type: 'form' }]);
    } else if (dictionary.respuestas[action]) {
      const resp = dictionary.respuestas[action];
      setMessages(prev => [...prev, { text: btn, sender: 'user' }]);
      addBotMessage(resp.texto);
    } else {
      handleSend(btn);
    }
  };

  return (
    <>
    {/* Chat Button - Siempre en esquina inferior derecha */}
    <div className="fixed bottom-8 right-8 z-[1001] font-sans">
      <button 
        onClick={handleOpen}
        className={`w-16 h-16 rounded-full btn-coral shadow-2xl flex items-center justify-center relative hover:scale-110 transition-transform ${showNotification ? 'animate-[shake-bell_1s_infinite]' : ''}`}
      >
        <span className="text-white font-bold text-2xl">S</span>
        {showNotification && (
          <span className="absolute -top-1 -right-1 w-6 h-6 bg-[var(--accent-gold)] text-[var(--secondary)] rounded-full text-xs flex items-center justify-center font-bold border-2 border-white animate-bounce">
            1
          </span>
        )}
      </button>
    </div>

    {/* Chat Window - Centrado en móvil, derecha en desktop */}
    <div 
      className={`
        fixed z-[1002]
        bottom-24 
        left-1/2 -translate-x-1/2
        md:left-auto md:translate-x-0 md:right-8
        w-[calc(100vw-2rem)] max-w-[350px] md:w-[380px] 
        h-[550px] 
        bg-white rounded-3xl shadow-2xl 
        overflow-hidden flex flex-col 
        transition-all duration-300 
        origin-bottom md:origin-bottom-right
        ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}
      `}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-[var(--primary-coral)] to-[var(--primary-dark)] p-5 text-white flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold border border-white">
            S
          </div>
          <div>
            <h4 className="font-bold">Sergey</h4>
            <p className="text-xs opacity-80">{t.chat_estado}</p>
          </div>
        </div>
        <button 
          onClick={() => setIsOpen(false)} 
          className="text-white hover:bg-white/10 w-8 h-8 rounded-full text-xl font-bold"
        >
          ×
        </button>
      </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-[#F8F9FA] chat-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                msg.sender === 'user' 
                  ? 'bg-[var(--primary-coral)] text-white rounded-br-none' 
                  : 'bg-white text-[var(--text-dark)] rounded-bl-none'
              }`}>
                {msg.type === 'form' ? (
                  <ChatForm lang={lang} onComplete={(data) => {
                    handleAction("📱 WhatsApp");
                  }} onCancel={() => setMessages(messages.filter(m => m.type !== 'form'))} />
                ) : (
                  msg.text.split('\n').map((line, k) => <p key={k} className={k > 0 ? 'mt-2' : ''}>{line}</p>)
                )}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white p-4 rounded-2xl shadow-sm flex items-center gap-2">
                <div className="typing-dots"><span></span><span></span><span></span></div>
              </div>
            </div>
          )}
          {/* Quick Replies for the LAST bot message */}
          {messages.length > 0 && messages[messages.length - 1].sender === 'bot' && !isTyping && !messages[messages.length-1].type && (
            <div className="flex flex-wrap gap-2 pt-2">
              {(dictionary.respuestas[detectIntent(messages[messages.length-1].text)] || dictionary.respuestas.default).botones.map((btn, idx) => (
                <button 
                  key={idx} 
                  onClick={() => handleAction(btn)}
                  className="bg-white border-2 border-[var(--primary-coral)] text-[var(--primary-coral)] px-4 py-2 rounded-full text-xs font-bold hover:bg-[var(--primary-coral)] hover:text-white transition-all shadow-sm"
                >
                  {btn}
                </button>
              ))}
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t flex gap-2">
          <input 
            type="text" 
            placeholder={t.chat_placeholder}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 bg-gray-100 border-none rounded-full px-5 py-3 text-sm focus:ring-2 focus:ring-[var(--primary-coral)] outline-none"
          />
          <button 
            onClick={() => handleSend()}
            className="w-12 h-12 btn-coral text-white rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-90"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

const ChatForm: React.FC<{ lang: Language, onComplete: (d: any) => void, onCancel: () => void }> = ({ lang, onComplete, onCancel }) => {
  const t = TRADUCCIONES[lang];
  return (
    <div className="space-y-4 text-left">
      <h5 className="font-bold text-lg">{lang === 'es' ? 'Déjanos tus datos' : 'Leave us your details'}</h5>
      <input type="text" placeholder={t.res_nombre} className="w-full p-3 bg-gray-50 border rounded-lg text-xs" />
      <input type="tel" placeholder={t.res_telefono} className="w-full p-3 bg-gray-50 border rounded-lg text-xs" />
      <div className="flex gap-2">
        <button onClick={() => onComplete({})} className="flex-1 btn-coral text-white py-2 rounded-lg text-xs font-bold">Enviar 🚀</button>
        <button onClick={onCancel} className="flex-1 border-2 border-gray-200 py-2 rounded-lg text-xs font-bold">Cerrar</button>
      </div>
    </div>
  );
};

export default SeryeiChat;
