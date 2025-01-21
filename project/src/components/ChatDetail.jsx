import { PaperClipIcon, FaceSmileIcon, PhoneIcon, VideoCameraIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline';

function ChatDetail({ selectedChat }) {
  const messages = [
    {
      id: 1,
      sender: 'Chris Smith',
      content: 'Hey there! How's the project coming along?',
      time: '9:41 AM',
      isSender: false,
    },
    {
      id: 2,
      sender: 'You',
      content: 'Going great! I've just finished the main components.',
      time: '9:42 AM',
      isSender: true,
    },
    {
      id: 3,
      sender: 'Chris Smith',
      content: 'That's awesome! Can you share a preview?',
      time: '9:43 AM',
      isSender: false,
    }
  ];

  if (!selectedChat) {
    return (
      <div className="flex-1 bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Welcome to Messages</h3>
          <p className="text-gray-500">Select a conversation to start chatting</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-white flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={selectedChat.avatar}
                alt={selectedChat.name}
                className="w-10 h-10 rounded-full"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
            </div>
            <div>
              <h2 className="font-semibold">{selectedChat.name}</h2>
              <p className="text-sm text-green-500">Online</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-500 hover:text-primary-600 rounded-full hover:bg-gray-100">
              <PhoneIcon className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-primary-600 rounded-full hover:bg-gray-100">
              <VideoCameraIcon className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-primary-600 rounded-full hover:bg-gray-100">
              <EllipsisHorizontalIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isSender ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex gap-2 max-w-[70%] ${message.isSender ? 'flex-row-reverse' : 'flex-row'}`}>
              {!message.isSender && (
                <img
                  src={selectedChat.avatar}
                  alt={message.sender}
                  className="w-8 h-8 rounded-full self-end"
                />
              )}
              <div>
                <div
                  className={`rounded-2xl p-3 ${
                    message.isSender
                      ? 'bg-primary-600 text-white'
                      : 'bg-white border border-gray-200'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
                <p className={`text-xs mt-1 text-gray-500 ${message.isSender ? 'text-right' : 'text-left'}`}>
                  {message.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="flex items-center gap-2">
          <button className="p-2 text-gray-500 hover:text-primary-600 rounded-full hover:bg-gray-100">
            <PaperClipIcon className="w-5 h-5" />
          </button>
          <input
            type="text"
            placeholder="Write a message..."
            className="flex-1 px-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <button className="p-2 text-gray-500 hover:text-primary-600 rounded-full hover:bg-gray-100">
            <FaceSmileIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatDetail;