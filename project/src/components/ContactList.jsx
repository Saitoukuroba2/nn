import { useState } from 'react';
import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';

function ContactList({ onSelectContact }) {
  const [filter, setFilter] = useState('');
  
  const contacts = [
    {
      id: 1,
      name: 'Chris Smith',
      company: 'Icecap',
      role: 'Project Manager',
      time: 'Last: 11:54:17:38',
      status: 'Customer'
    },
    {
      id: 2,
      name: 'Alan Benjamin',
      company: 'TechCorp',
      role: 'Developer',
      time: '8:54 AM',
      status: 'Lead'
    },
    {
      id: 3,
      name: 'Dan, Lisa',
      company: 'DesignCo',
      role: 'Designer',
      time: '8:31 AM',
      status: 'Customer'
    }
  ];

  return (
    <div className="w-[400px] bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Open</h2>
          <div className="flex items-center gap-2">
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md">
              <FunnelIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="relative">
          <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search conversations..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            onClick={() => onSelectContact(contact)}
            className="p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-200"
          >
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <span className="font-medium">{contact.name}</span>
                <span className="text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded">
                  {contact.status}
                </span>
              </div>
              <span className="text-xs text-gray-500">{contact.time}</span>
            </div>
            <div className="text-sm text-gray-600">
              {contact.company} • {contact.role}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactList;