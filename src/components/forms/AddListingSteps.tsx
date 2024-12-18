import { Check } from 'lucide-react';

interface AddListingStepsProps {
  currentStep: number;
  totalSteps: number;
}

export default function AddListingSteps({ currentStep, totalSteps }: AddListingStepsProps) {
  const steps = [
    'Informacje o firmie',
    'Finanse',
    'Aktywa i wsparcie',
    'Media i kontakt'
  ];

  return (
    <div className="flex justify-between">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;

        return (
          <div key={step} className="flex-1">
            <div className="relative flex items-center justify-center">
              <div
                className={`w-full h-1 absolute top-1/2 ${
                  index === 0 ? 'hidden' : ''
                } ${
                  isCompleted ? 'bg-sea-600' : 'bg-gray-200'
                }`}
              />
              <div
                className={`
                  w-8 h-8 rounded-full flex items-center justify-center relative z-10
                  ${isActive ? 'bg-sea-600 text-white' : ''}
                  ${isCompleted ? 'bg-sea-600 text-white' : 'bg-gray-200 text-gray-600'}
                `}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5" />
                ) : (
                  stepNumber
                )}
              </div>
            </div>
            <div className="text-xs text-center mt-2">{step}</div>
          </div>
        );
      })}
    </div>
  );
}