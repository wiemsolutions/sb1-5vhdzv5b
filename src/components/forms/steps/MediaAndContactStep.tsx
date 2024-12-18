interface MediaAndContactStepProps {
  data: any;
  updateData: (data: any) => void;
}

export default function MediaAndContactStep({ data, updateData }: MediaAndContactStepProps) {
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    // Here you would typically handle file upload to a server
    // For now, we'll just store the file names
    updateData({ images: files.map(file => file.name) });
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Zdjęcia firmy
        </label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
          <div className="space-y-1 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex text-sm text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer bg-white rounded-md font-medium text-sea-600 hover:text-sea-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-sea-500"
              >
                <span>Dodaj zdjęcia</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>
              <p className="pl-1">lub przeciągnij i upuść</p>
            </div>
            <p className="text-xs text-gray-500">
              PNG, JPG do 10MB
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Imię i nazwisko
          </label>
          <input
            type="text"
            value={data.contactName}
            onChange={(e) => updateData({ contactName: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-sea-500 focus:border-sea-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            value={data.contactEmail}
            onChange={(e) => updateData({ contactEmail: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-sea-500 focus:border-sea-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Telefon
        </label>
        <input
          type="tel"
          value={data.contactPhone}
          onChange={(e) => updateData({ contactPhone: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-sea-500 focus:border-sea-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Preferowana forma kontaktu
        </label>
        <select
          value={data.preferredContact}
          onChange={(e) => updateData({ preferredContact: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-sea-500 focus:border-sea-500"
        >
          <option value="email">Email</option>
          <option value="phone">Telefon</option>
          <option value="both">Email i telefon</option>
        </select>
      </div>
    </div>
  );
}