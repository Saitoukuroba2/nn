import { 
  MagnifyingGlassIcon,
  ChartBarIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  InboxIcon,
  BellIcon
} from '@heroicons/react/24/outline';

function Sidebar() {
  return (
    <div className="w-[240px] bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4">
        <div className="flex items-center gap-2">
          <img
            src="https://placekitten.com/32/32"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <div className="flex items-center gap-1">
            <span className="font-medium">Amy Smith</span>
            <span className="text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded">⚡</span>
          </div>
        </div>
      </div>

      <div className="px-3">
        <div className="bg-gray-100 p-2 rounded-md">
          <div className="flex items-center gap-2">
            <MagnifyingGlassIcon className="w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent border-none outline-none text-sm w-full"
            />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-3 py-4">
        <div className="space-y-1">
          <div className="text-xs font-medium text-gray-500 px-3 py-2">Inboxes</div>
          <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 flex items-center justify-center">🚀</span>
              <span>Customer support</span>
            </div>
            <span className="ml-auto text-xs text-gray-500">(123) 456-7891</span>
          </button>
          <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 flex items-center justify-center">🌉</span>
              <span>San Francisco</span>
            </div>
            <span className="ml-auto text-xs text-gray-500">(415) 555-0123</span>
          </button>
          <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 flex items-center justify-center">🌵</span>
              <span>Phoenix</span>
            </div>
            <span className="ml-auto text-xs text-gray-500">(602) 555-0123</span>
          </button>
        </div>

        <div className="mt-6 space-y-1">
          <div className="text-xs font-medium text-gray-500 px-3 py-2">Your team</div>
          {[
            { name: 'Amy Smith', status: '⚡' },
            { name: 'Robert Mendez', status: '🌱' },
            { name: 'Kimberly Woods', status: '' },
            { name: 'Ruth Henderson', status: '😊' },
            { name: 'Gregory Medina', status: '' },
            { name: 'Betty Cooper', status: '' },
            { name: 'Stephanie Patel', status: '' },
            { name: 'Frances Powell', status: '📞' }
          ].map((member, index) => (
            <button
              key={index}
              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
            >
              <img
                src={`https://placekitten.com/${32 + index}/${32 + index}`}
                alt={member.name}
                className="w-6 h-6 rounded-full"
              />
              <span>{member.name}</span>
              {member.status && (
                <span className="ml-auto">{member.status}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-auto p-3">
        <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-primary-600 bg-primary-50 hover:bg-primary-100 rounded-md">
          <UserGroupIcon className="w-5 h-5" />
          <span>Invite your team</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;