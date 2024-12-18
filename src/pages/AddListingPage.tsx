import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddListingForm from '../components/forms/AddListingForm';
import AddListingSteps from '../components/forms/AddListingSteps';

export default function AddListingPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const handleSubmit = (formData: any) => {
    console.log('Form submitted:', formData);
    // Here you would typically make an API call to save the listing
    navigate('/listings');
  };

  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Dodaj swoją firmę
          </h1>
          <p className="text-gray-600">
            Wypełnij poniższy formularz, aby wystawić swoją firmę na sprzedaż
          </p>
        </div>

        <AddListingSteps currentStep={currentStep} totalSteps={totalSteps} />
        
        <div className="bg-white rounded-lg shadow-sm p-6 mt-8">
          <AddListingForm 
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            totalSteps={totalSteps}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}