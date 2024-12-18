import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BusinessInfoStep from './steps/BusinessInfoStep';
import FinancialInfoStep from './steps/FinancialInfoStep';
import AssetsAndSupportStep from './steps/AssetsAndSupportStep';
import MediaAndContactStep from './steps/MediaAndContactStep';
import PaymentGateway from '../payment/PaymentGateway';

interface AddListingFormProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  totalSteps: number;
  onSubmit: (data: any) => void;
}

export default function AddListingForm({ 
  currentStep, 
  setCurrentStep, 
  totalSteps,
  onSubmit 
}: AddListingFormProps) {
  const navigate = useNavigate();
  const [showPayment, setShowPayment] = useState(false);
  const [formData, setFormData] = useState({
    // ... existing form data ...
  });

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Show payment gateway when form is complete
      setShowPayment(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePaymentSuccess = () => {
    // Submit the form data
    onSubmit(formData);
    // Redirect to success page or user panel
    navigate('/user-panel');
  };

  const handlePaymentCancel = () => {
    setShowPayment(false);
  };

  if (showPayment) {
    return (
      <PaymentGateway
        amount={299.99} // Your listing fee
        onSuccess={handlePaymentSuccess}
        onCancel={handlePaymentCancel}
      />
    );
  }

  return (
    <div>
      {currentStep === 1 && (
        <BusinessInfoStep 
          data={formData} 
          updateData={updateFormData} 
        />
      )}
      
      {currentStep === 2 && (
        <FinancialInfoStep 
          data={formData} 
          updateData={updateFormData} 
        />
      )}
      
      {currentStep === 3 && (
        <AssetsAndSupportStep 
          data={formData} 
          updateData={updateFormData} 
        />
      )}
      
      {currentStep === 4 && (
        <MediaAndContactStep 
          data={formData} 
          updateData={updateFormData} 
        />
      )}

      <div className="flex justify-between mt-8 pt-6 border-t">
        {currentStep > 1 ? (
          <button
            onClick={handleBack}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
          >
            Wstecz
          </button>
        ) : (
          <div></div>
        )}
        
        <button
          onClick={handleNext}
          className="px-6 py-2 bg-sea-600 text-white rounded-lg hover:bg-sea-700"
        >
          {currentStep === totalSteps ? 'Przejdź do płatności' : 'Dalej'}
        </button>
      </div>
    </div>
  );
}