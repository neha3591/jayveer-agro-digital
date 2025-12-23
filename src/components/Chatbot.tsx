import { useState } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Welcome to Jayveer Sales! 👋 I\'m here to help you with any questions about Saktiman agricultural equipment. How can I assist you today?',
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickReplies = [
    'Product Information',
    'Get a Quote',
    'Service & Support',
    'Location & Hours',
  ];

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('product') || lowerMessage.includes('rotavator') || lowerMessage.includes('reaper') || lowerMessage.includes('tiller')) {
      return 'We offer a wide range of Saktiman products including Rotavators, Reapers, Power Tillers, Seed Drills, Cultivators, and more! You can view our full catalog at shaktimanagro.com or visit our showroom. Would you like details on any specific product?';
    }

    if (lowerMessage.includes('quote') || lowerMessage.includes('price') || lowerMessage.includes('cost')) {
      return 'I\'d be happy to help you get a quote! Please fill out our contact form with your requirements, or call us directly at +91 98765 43210. Our team will provide you with the best prices and offers.';
    }

    if (lowerMessage.includes('service') || lowerMessage.includes('support') || lowerMessage.includes('repair') || lowerMessage.includes('maintenance')) {
      return 'We provide complete after-sales support including installation, operator training, maintenance, repairs, and genuine spare parts. Our service team is available 24/7. Call +91 98765 43210 for immediate assistance!';
    }

    if (lowerMessage.includes('location') || lowerMessage.includes('address') || lowerMessage.includes('where') || lowerMessage.includes('hours') || lowerMessage.includes('timing')) {
      return 'We\'re located near Bus Stand, Main Road, Anand, Gujarat 388001. Our working hours are:\n• Mon-Sat: 9:00 AM - 7:00 PM\n• Sunday: 10:00 AM - 4:00 PM\nWe serve Anand, Umreth, and Anklav districts!';
    }

    if (lowerMessage.includes('delivery') || lowerMessage.includes('shipping')) {
      return 'Yes! We offer FREE delivery and installation across Anand, Umreth, and Anklav districts. Our technicians will set up your equipment and provide basic training at no extra cost.';
    }

    if (lowerMessage.includes('warranty') || lowerMessage.includes('guarantee')) {
      return 'All Saktiman products come with manufacturer warranty. The warranty period varies by product. Our team will explain the complete warranty terms during purchase. We also provide extended service support!';
    }

    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return 'Hello! Welcome to Jayveer Sales. How can I help you today? You can ask me about our products, pricing, services, or location.';
    }

    return 'Thank you for your message! For detailed assistance, please call us at +91 98765 43210 or fill out the contact form. Our team will get back to you shortly. Is there anything specific about our Saktiman products I can help you with?';
  };

  const handleSendMessage = (text: string = inputValue) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: text,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot typing
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(text),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-hero rounded-full shadow-hero flex items-center justify-center transition-all duration-300 hover:scale-110 animate-pulse-glow ${isOpen ? 'scale-0' : 'scale-100'}`}
      >
        <MessageCircle className="w-7 h-7 text-primary-foreground" />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] bg-card rounded-3xl shadow-hero overflow-hidden transition-all duration-300 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-hero p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
              <Bot className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-primary-foreground">
                Jayveer Assistant
              </h3>
              <p className="text-xs text-primary-foreground/70">Online • Ready to help</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
          >
            <X className="w-4 h-4 text-primary-foreground" />
          </button>
        </div>

        {/* Messages */}
        <div className="h-[350px] overflow-y-auto p-4 space-y-4 bg-gradient-subtle">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-end gap-2 ${message.isBot ? '' : 'flex-row-reverse'}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.isBot ? 'bg-primary' : 'bg-secondary'
                }`}
              >
                {message.isBot ? (
                  <Bot className="w-4 h-4 text-primary-foreground" />
                ) : (
                  <User className="w-4 h-4 text-secondary-foreground" />
                )}
              </div>
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                  message.isBot
                    ? 'bg-card shadow-soft rounded-bl-md'
                    : 'bg-primary text-primary-foreground rounded-br-md'
                }`}
              >
                <p className={`text-sm whitespace-pre-line ${message.isBot ? 'text-foreground' : ''}`}>
                  {message.text}
                </p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex items-end gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="bg-card shadow-soft rounded-2xl rounded-bl-md px-4 py-3">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Replies */}
        <div className="px-4 py-2 border-t border-border bg-card">
          <div className="flex flex-wrap gap-2">
            {quickReplies.map((reply) => (
              <button
                key={reply}
                onClick={() => handleSendMessage(reply)}
                className="px-3 py-1.5 text-xs font-medium bg-muted text-muted-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {reply}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border bg-card">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm"
            />
            <Button
              variant="golden"
              size="icon"
              onClick={() => handleSendMessage()}
              disabled={!inputValue.trim()}
              className="w-12 h-12 rounded-xl"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
