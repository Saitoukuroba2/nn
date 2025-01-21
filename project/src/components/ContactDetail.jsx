import { PhoneIcon, EnvelopeIcon, GlobeAltIcon, PlusIcon } from '@heroicons/react/24/outline';

function ContactDetail({ selectedContact }) {
  if (!selectedContact) {
    return (
      <div className="flex-1 bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Select a Contact</h3>
          <p className="text-gray-500">Choose a contact to view their details</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-white flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <img
              src={`https://placekitten.com/64/64`}
              alt={selectedContact.name}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h1 className="text-2xl font-semibold">{selectedContact.name}</h1>
              <p className="text-gray-600">{selectedContact.company}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <PhoneIcon className="w-5 h-5" />
            </button>
            <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700">
              Add note
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">Company</h3>
            <p className="text-gray-900">{selectedContact.company}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">Role</h3>
            <p className="text-gray-900">{selectedContact.role}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">Email</h3>
            <p className="text-gray-900">example@{selectedContact.company.toLowerCase()}.io</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">Website</h3>
            <p className="text-gray-900">{selectedContact.company.toLowerCase()}.io</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Notes</h2>
          <button className="text-primary-600 hover:text-primary-700">
            <PlusIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="space-y-4">
          {[1, 2].map((note) => (
            <div key={note} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <img
                  src={`https://placekitten.com/${32 + note}/${32 + note}`}
                  alt="User"
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Ruth Henderson</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-500">Today, 9:37 AM</span>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    {note === 1
                      ? 'Chris has expressed interest in upgrading to Enterprise. Could you reach out?'
                      : 'Yep I'll work on this now!'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactDetail;