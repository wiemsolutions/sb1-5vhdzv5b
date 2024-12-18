import { useState } from 'react';
import { useListings } from '../../hooks/useListings';
import { Loader, Search, Filter, MoreVertical, Check, X } from 'lucide-react';
import { useApi } from '../../hooks/useApi';
import { updateListing, deleteListing } from '../../api/listings';

export default function ListingsPage() {
  const [selectedListings, setSelectedListings] = useState<string[]>([]);
  const { listings, loading, error } = useListings();
  const { execute: executeBulkAction } = useApi(updateListing);

  const handleBulkAction = async (action: 'approve' | 'reject' | 'delete') => {
    try {
      await Promise.all(
        selectedListings.map(id => {
          switch (action) {
            case 'approve':
              return executeBulkAction(id, { status: 'ACTIVE' });
            case 'reject':
              return executeBulkAction(id, { status: 'REJECTED' });
            case 'delete':
              return deleteListing(id);
          }
        })
      );
      setSelectedListings([]);
    } catch (error) {
      console.error('Error performing bulk action:', error);
    }
  };

  if (loading) return <Loader className="animate-spin" />;
  if (error) return <div>Error loading listings</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Ogłoszenia</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Szukaj ogłoszeń..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-sea-500 focus:border-sea-500"
            />
          </div>
          <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="w-5 h-5 mr-2" />
            Filtry
          </button>
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedListings.length > 0 && (
        <div className="bg-white p-4 rounded-lg shadow mb-6 flex items-center justify-between">
          <span className="text-sm text-gray-600">
            Wybrano {selectedListings.length} ogłoszeń
          </span>
          <div className="flex space-x-2">
            <button
              onClick={() => handleBulkAction('approve')}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              <Check className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleBulkAction('reject')}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              <X className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleBulkAction('delete')}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
            >
              Usuń
            </button>
          </div>
        </div>
      )}

      {/* Listings Table */}
      <div className="bg-white shadow rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedListings(listings.map(l => l.id));
                    } else {
                      setSelectedListings([]);
                    }
                  }}
                  className="rounded border-gray-300 text-sea-600 focus:ring-sea-500"
                />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tytuł
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Użytkownik
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Data
              </th>
              <th className="relative px-6 py-3">
                <span className="sr-only">Akcje</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {listings?.map((listing) => (
              <tr key={listing.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={selectedListings.includes(listing.id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedListings([...selectedListings, listing.id]);
                      } else {
                        setSelectedListings(selectedListings.filter(id => id !== listing.id));
                      }
                    }}
                    className="rounded border-gray-300 text-sea-600 focus:ring-sea-500"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {listing.title}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    listing.status === 'ACTIVE'
                      ? 'bg-green-100 text-green-800'
                      : listing.status === 'PENDING'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {listing.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {listing.user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(listing.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-gray-400 hover:text-gray-500">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}