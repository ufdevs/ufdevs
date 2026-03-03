# UFDevs Price Calculator

A customizable React price calculator component for app development projects. This component allows you to create an interactive project price calculator with customizable options.

## Installation

```bash
npm install ufdevs-ppc
```

or

```bash
yarn add ufdevs-ppc
```

## Features

- Interactive price calculator for app development projects
- Customizable project stages
- Platform selection (Web, Android, iOS, TV, etc.)
- Frontend framework options
- Backend technology options
- Project complexity settings
- Budget range selection
- Time frame options
- Industry-specific pricing
- WhatsApp integration for negotiation
- Fully responsive design with Tailwind CSS
- Modern animations with Framer Motion

## Usage

```jsx
import React from 'react';
import { PriceCalculator } from 'ufdevs-ppc';

// Include the required styles (either import directly or copy to your project)
import 'ufdevs-ppc/dist/index.css';

const App = () => {
  return (
    <div>
      <PriceCalculator 
        whatsappNumber="+917510060787"
        title="Custom Price Calculator"
        description="Estimate the cost of your project with our interactive calculator"
      />
    </div>
  );
};

export default App;
```

## Customization

The PriceCalculator component is highly customizable. You can customize:

- Project stages
- Platform options
- Frontend framework options
- Backend technology options 
- Complexity multipliers
- Budget options
- Industry options
- WhatsApp number for negotiation
- Title and description

Here's an example with custom options:

```jsx
import React from 'react';
import { PriceCalculator } from 'ufdevs-ppc';
import { FiCode, FiMonitor } from 'react-icons/fi';

const App = () => {
  // Custom project stages
  const customStages = [
    {
      id: 'design',
      title: 'UI/UX Design',
      description: 'Custom designs for your app',
      basePrice: 20000,
      baseDays: 10,
      icon: <FiMonitor className="text-2xl mb-2" />
    },
    {
      id: 'development',
      title: 'Development',
      description: 'Coding and implementation',
      basePrice: 50000,
      baseDays: 30,
      icon: <FiCode className="text-2xl mb-2" />
    }
  ];

  // Custom platform options
  const customPlatformOptions = [
    { id: 'web', label: 'Web App', icon: <FiMonitor className="text-lg mr-2" />, multiplier: 1.0 },
    { id: 'mobile', label: 'Mobile App', icon: <FiMonitor className="text-lg mr-2" />, multiplier: 1.5 }
  ];

  return (
    <div>
      <PriceCalculator 
        stages={customStages}
        platformOptions={customPlatformOptions}
        whatsappNumber="+919876543210"
      />
    </div>
  );
};

export default App;
```

## Props

| Prop | Type | Description | Default |
|------|------|-------------|---------|
| `stages` | `PriceStage[]` | List of project stages | Default stages |
| `platformOptions` | `SelectionOption[]` | List of platform options | Default platforms |
| `frontendOptions` | `SelectionOption[]` | List of frontend framework options | Default frontend frameworks |
| `backendOptions` | `SelectionOption[]` | List of backend technology options | Default backend technologies |
| `complexityMultipliers` | `Object` | Multipliers for different complexity levels | Default multipliers |
| `budgetOptions` | `SelectionOption[]` | List of budget options | Default budget options |
| `industryOptions` | `SelectionOption[]` | List of industry options | Default industry options |
| `whatsappNumber` | `string` | WhatsApp number for negotiation | "+917510060787" |
| `title` | `string` | Title for the calculator section | "Project Cost Calculator" |
| `description` | `string` | Description text for the calculator | Default description |
| `className` | `string` | CSS class name for custom styling | "" |

## Types

```typescript
// Price stage definition
interface PriceStage {
  id: string;
  title: string;
  description: string;
  basePrice: number;
  baseDays: number;
  icon: ReactNode;
}

// Selection option definition
interface SelectionOption {
  id: string;
  label: string;
  icon: ReactNode;
  multiplier: number;
}
```
## License

This project is licensed under a custom MIT-based license with a "No Selling" clause.  
See the [LICENSE](./LICENSE) file for details.
