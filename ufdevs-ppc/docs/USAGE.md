# UFDevs Price Calculator - Usage Guide

This document provides detailed instructions on how to use and customize the UFDevs Price Calculator component in your React applications.

## Basic Usage

To use the price calculator with default settings:

```jsx
import React from 'react';
import { PriceCalculator } from 'ufdevs-ppc';
import 'ufdevs-ppc/dist/index.css'; // Import styles

const App = () => {
  return (
    <div>
      <PriceCalculator />
    </div>
  );
};

export default App;
```

## Customizing the Calculator

### 1. Basic Customization

You can customize the title, description, and WhatsApp number:

```jsx
<PriceCalculator 
  title="Custom Project Calculator" 
  description="Calculate the cost of your custom project with our interactive tool" 
  whatsappNumber="+919876543210" 
/>
```

### 2. Customizing Project Stages

You can provide your own project stages:

```jsx
import { FiCheckCircle, FiMonitor, FiCode } from 'react-icons/fi';

// Custom project stages
const customStages = [
  {
    id: 'research',
    title: 'Market Research',
    description: 'Analyze market trends and competition',
    basePrice: 5000,
    baseDays: 5,
    icon: <FiCheckCircle className="text-2xl mb-2" />
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description: 'Create beautiful user interfaces',
    basePrice: 15000,
    baseDays: 10,
    icon: <FiMonitor className="text-2xl mb-2" />
  },
  {
    id: 'development',
    title: 'Development',
    description: 'Build the application',
    basePrice: 40000,
    baseDays: 20,
    icon: <FiCode className="text-2xl mb-2" />
  }
];

// Use custom stages
<PriceCalculator stages={customStages} />
```

### 3. Customizing Platform Options

You can define your own platform options:

```jsx
import { FiMonitor, FiSmartphone } from 'react-icons/fi';

// Custom platform options
const customPlatformOptions = [
  { id: 'web', label: 'Web Application', icon: <FiMonitor className="text-lg mr-2" />, multiplier: 1.0 },
  { id: 'mobile', label: 'Mobile App', icon: <FiSmartphone className="text-lg mr-2" />, multiplier: 1.5 },
  { id: 'both', label: 'Web + Mobile', icon: <FiSmartphone className="text-lg mr-2" />, multiplier: 2.0 }
];

// Use custom platforms
<PriceCalculator platformOptions={customPlatformOptions} />
```

### 4. Customizing Frontend Options

```jsx
import { FiZap } from 'react-icons/fi';

// Custom frontend options
const customFrontendOptions = [
  { id: 'react', label: 'React', icon: <FiZap className="text-lg mr-2" />, multiplier: 1.0 },
  { id: 'vue', label: 'Vue.js', icon: <FiZap className="text-lg mr-2" />, multiplier: 1.1 },
  { id: 'angular', label: 'Angular', icon: <FiZap className="text-lg mr-2" />, multiplier: 1.2 }
];

// Use custom frontend options
<PriceCalculator frontendOptions={customFrontendOptions} />
```

### 5. Customizing Backend Options

```jsx
import { FiServer } from 'react-icons/fi';

// Custom backend options
const customBackendOptions = [
  { id: 'node', label: 'Node.js', icon: <FiServer className="text-lg mr-2" />, multiplier: 1.0 },
  { id: 'php', label: 'PHP', icon: <FiServer className="text-lg mr-2" />, multiplier: 0.9 },
  { id: 'java', label: 'Java', icon: <FiServer className="text-lg mr-2" />, multiplier: 1.3 }
];

// Use custom backend options
<PriceCalculator backendOptions={customBackendOptions} />
```

### 6. Customizing Complexity Multipliers

```jsx
// Custom complexity multipliers
const customComplexityMultipliers = {
  simple: 0.7,
  medium: 1.0,
  complex: 1.5
};

// Use custom complexity multipliers
<PriceCalculator complexityMultipliers={customComplexityMultipliers} />
```

### 7. Customizing Budget Options

```jsx
import { FiDollarSign } from 'react-icons/fi';

// Custom budget options
const customBudgetOptions = [
  { id: 'economy', label: 'Economy', icon: <FiDollarSign className="text-lg mr-2" />, multiplier: 0.8 },
  { id: 'standard', label: 'Standard', icon: <FiDollarSign className="text-lg mr-2" />, multiplier: 1.0 },
  { id: 'premium', label: 'Premium', icon: <FiDollarSign className="text-lg mr-2" />, multiplier: 1.5 }
];

// Use custom budget options
<PriceCalculator budgetOptions={customBudgetOptions} />
```

### 8. Customizing Industry Options

```jsx
import { FiShoppingBag, FiUsers, FiDollarSign } from 'react-icons/fi';

// Custom industry options
const customIndustryOptions = [
  { id: 'ecommerce', label: 'E-commerce', icon: <FiShoppingBag className="text-lg mr-2" />, multiplier: 1.2 },
  { id: 'education', label: 'Education', icon: <FiUsers className="text-lg mr-2" />, multiplier: 1.0 },
  { id: 'finance', label: 'Finance', icon: <FiDollarSign className="text-lg mr-2" />, multiplier: 1.3 }
];

// Use custom industry options
<PriceCalculator industryOptions={customIndustryOptions} />
```

## Full Customization Example

Here's an example with all customizations applied:

```jsx
import React from 'react';
import { PriceCalculator } from 'ufdevs-ppc';
import { FiCheckCircle, FiMonitor, FiCode, FiSmartphone, FiZap, FiServer, FiDollarSign, FiShoppingBag, FiUsers } from 'react-icons/fi';
import 'ufdevs-ppc/dist/index.css';

const App = () => {
  // Define all custom options
  const customStages = [
    {
      id: 'research',
      title: 'Market Research',
      description: 'Analyze market trends and competition',
      basePrice: 5000,
      baseDays: 5,
      icon: <FiCheckCircle className="text-2xl mb-2" />
    },
    {
      id: 'design',
      title: 'UI/UX Design',
      description: 'Create beautiful user interfaces',
      basePrice: 15000,
      baseDays: 10,
      icon: <FiMonitor className="text-2xl mb-2" />
    },
    {
      id: 'development',
      title: 'Development',
      description: 'Build the application',
      basePrice: 40000,
      baseDays: 20,
      icon: <FiCode className="text-2xl mb-2" />
    }
  ];

  const customPlatformOptions = [
    { id: 'web', label: 'Web Application', icon: <FiMonitor className="text-lg mr-2" />, multiplier: 1.0 },
    { id: 'mobile', label: 'Mobile App', icon: <FiSmartphone className="text-lg mr-2" />, multiplier: 1.5 },
    { id: 'both', label: 'Web + Mobile', icon: <FiSmartphone className="text-lg mr-2" />, multiplier: 2.0 }
  ];

  const customFrontendOptions = [
    { id: 'react', label: 'React', icon: <FiZap className="text-lg mr-2" />, multiplier: 1.0 },
    { id: 'vue', label: 'Vue.js', icon: <FiZap className="text-lg mr-2" />, multiplier: 1.1 },
    { id: 'angular', label: 'Angular', icon: <FiZap className="text-lg mr-2" />, multiplier: 1.2 }
  ];

  const customBackendOptions = [
    { id: 'node', label: 'Node.js', icon: <FiServer className="text-lg mr-2" />, multiplier: 1.0 },
    { id: 'php', label: 'PHP', icon: <FiServer className="text-lg mr-2" />, multiplier: 0.9 },
    { id: 'java', label: 'Java', icon: <FiServer className="text-lg mr-2" />, multiplier: 1.3 }
  ];

  const customComplexityMultipliers = {
    simple: 0.7,
    medium: 1.0,
    complex: 1.5
  };

  const customBudgetOptions = [
    { id: 'economy', label: 'Economy', icon: <FiDollarSign className="text-lg mr-2" />, multiplier: 0.8 },
    { id: 'standard', label: 'Standard', icon: <FiDollarSign className="text-lg mr-2" />, multiplier: 1.0 },
    { id: 'premium', label: 'Premium', icon: <FiDollarSign className="text-lg mr-2" />, multiplier: 1.5 }
  ];

  const customIndustryOptions = [
    { id: 'ecommerce', label: 'E-commerce', icon: <FiShoppingBag className="text-lg mr-2" />, multiplier: 1.2 },
    { id: 'education', label: 'Education', icon: <FiUsers className="text-lg mr-2" />, multiplier: 1.0 },
    { id: 'finance', label: 'Finance', icon: <FiDollarSign className="text-lg mr-2" />, multiplier: 1.3 }
  ];

  return (
    <div>
      <PriceCalculator 
        title="Custom Project Calculator" 
        description="Calculate the cost of your custom project with our interactive tool" 
        whatsappNumber="+919876543210" 
        stages={customStages}
        platformOptions={customPlatformOptions}
        frontendOptions={customFrontendOptions}
        backendOptions={customBackendOptions}
        complexityMultipliers={customComplexityMultipliers}
        budgetOptions={customBudgetOptions}
        industryOptions={customIndustryOptions}
        className="my-custom-calculator"
      />
    </div>
  );
};

export default App;
```

## Styling

The component uses Tailwind CSS for styling. You can customize the appearance by:

1. Using the `className` prop to add custom classes
2. Using CSS to override the default styles
3. Wrapping the component in a styled container

Example with custom styling:

```jsx
<div className="custom-calculator-wrapper">
  <PriceCalculator 
    className="bg-blue-900 shadow-xl"
  />
</div>
```

## WhatsApp Integration

The calculator includes a "Negotiate Now" button that opens WhatsApp with a pre-filled message containing the selected options and price estimate. You can customize the WhatsApp number using the `whatsappNumber` prop:

```jsx
<PriceCalculator whatsappNumber="+919876543210" />
```

## Advanced Usage

For advanced usage scenarios, you might want to integrate the calculator with your own state management or backend. You can achieve this by creating a wrapper component that manages the state and passes it to the PriceCalculator.

Example with custom state management:

```jsx
import React, { useState, useEffect } from 'react';
import { PriceCalculator } from 'ufdevs-ppc';

const CustomPriceCalculator = () => {
  // Your custom state
  const [selectedOptions, setSelectedOptions] = useState({});
  
  // Your custom handlers
  const handleCalculationComplete = (price, days) => {
    console.log('Calculated price:', price);
    console.log('Estimated days:', days);
    
    // Send to your backend or state management
    // saveQuote({ price, days, ...selectedOptions });
  };
  
  return (
    <div>
      <PriceCalculator 
        // Pass your custom props
        onCalculationComplete={handleCalculationComplete}
      />
    </div>
  );
};

export default CustomPriceCalculator;
```

## Troubleshooting

If you encounter any issues with the calculator:

1. Make sure you've imported the styles correctly: `import 'ufdevs-ppc/dist/index.css'`
2. Check that you're using React 17 or 18
3. Ensure you've installed the required peer dependencies
4. If customizing, make sure all your custom options follow the correct format

For more help, please refer to the [GitHub repository](https://github.com/ufdevs/ufdevs-ppc) or open an issue. 