import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/outline';

function ChatList({ onSelectChat }) {
  const chats = [
    {
      id: 1,
      name: 'Chris Smith',
      avatar: 'https://placekitten.com/40/40',
      lastMessage: 'That's awesome! Can you share a preview?',
      time: '9:43 AM',
      unread: 2,
      online: true
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      avatar: 'https://placekitten.com/41/41',
      lastMessage: 'The meeting is scheduled for tomorrow at 10 AM',
      time: '9:30 AM',
      unread: 0,
      online: true
    },
    {
      id: 3,
      name: 'Design Team',
      avatar: 'https://placekitten.com/42/42',
      lastMessage: 'Alex: Updated the latest mockups',
      time: '9:15 AM',
      unread: 5,
      online: false
    },
    {
      id: 4,
      name: 'Marketing Team',
      avatar: 'https://placekitten.com/43/43',
      lastMessage: 'Emma: Campaign results are in!',
      time: '8:45 AM',
      unread: 0,
      online: false
    }
  ];

  return (
    <div className="w-80 bg-white border-r border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Messages</h2>
          <button className="text-primary-600 hover:text-primary-700 p-2 hover:bg-primary-50 rounded-full">
            <PlusIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="relative">
          <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search messages..."
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
      </div>

      <div className="overflow-y-auto h-[calc(100vh-5rem)]">
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => onSelectChat(chat)}
            className="p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={chat.avatar}
                  alt={chat.name}
                  className="w-10 h-10 rounded-full"
                />
                {chat.online && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-medium truncate">{chat.name}</h3>
                  <span className="text-xs text-gray-500 flex-shrink-0">{chat.time}</span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                  {chat.unread > 0 && (
                    <span className="ml-2 flex-shrink-0 inline-flex items-center justify-center px-2 py-1 text-xs font-medium bg-primary-600 text-white rounded-full">
                      {chat.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatList;