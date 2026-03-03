import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMonitor, FiCode, FiSmartphone, FiSettings, FiCheckCircle, FiServer, FiClock, FiDollarSign, FiZap, FiAward, FiArrowRight, FiShoppingBag, FiUsers } from 'react-icons/fi';
import Button from './Button';
import { PriceCalculatorProps, PriceStage, SelectionOption } from '../types';
import '../styles.css';

const DEFAULT_STAGES: PriceStage[] = [
    {
        id: 'idea',
        title: 'Idea Validation',
        description: 'Market research, competitor analysis, and feasibility study',
        basePrice: 8000,
        baseDays: 5,
        icon: <FiCheckCircle className="text-2xl mb-2" />
    },
    {
        id: 'design',
        title: 'UI/UX Design',
        description: 'Wireframes, prototypes, and user experience design',
        basePrice: 10000,
        baseDays: 7,
        icon: <FiMonitor className="text-2xl mb-2" />
    },
    {
        id: 'development',
        title: 'Development',
        description: 'Frontend and backend development, API integration',
        basePrice: 30000,
        baseDays: 25,
        icon: <FiCode className="text-2xl mb-2" />
    },
    {
        id: 'deployment',
        title: 'Deployment',
        description: 'Testing, QA, and production deployment',
        basePrice: 15000,
        baseDays: 20,
        icon: <FiServer className="text-2xl mb-2" />
    },
    {
        id: 'growth',
        title: 'Growth Strategy',
        description: 'SEO, analytics setup, and performance optimization',
        basePrice: 12000,
        baseDays: 8,
        icon: <FiSettings className="text-2xl mb-2" />
    }
];

const DEFAULT_PLATFORM_OPTIONS: SelectionOption[] = [
    { id: 'web', label: 'Web App', icon: <FiMonitor className="text-lg mr-2" />, multiplier: 1.1 },
    { id: 'android', label: 'Android App', icon: <FiSmartphone className="text-lg mr-2" />, multiplier: 1.2 },
    { id: 'ios', label: 'iOS App', icon: <FiSmartphone className="text-lg mr-2" />, multiplier: 1.4 },
    { id: 'tv', label: 'TV App', icon: <FiSmartphone className="text-lg mr-2" />, multiplier: 1.6 },
    { id: 'all', label: 'All Platforms', icon: <FiCheckCircle className="text-lg mr-2" />, multiplier: 1.7 }
];

const DEFAULT_FRONTEND_OPTIONS: SelectionOption[] = [
    { id: 'wordpress', label: 'Wordpress', icon: <FiZap className="text-lg mr-2" />, multiplier: 1.15 },
    { id: 'html', label: 'HTML/CSS/JS', icon: <FiZap className="text-lg mr-2" />, multiplier: 1.1 },
    { id: 'react', label: 'React', icon: <FiZap className="text-lg mr-2" />, multiplier: 1.2 },
    { id: 'angular', label: 'Angular', icon: <FiZap className="text-lg mr-2" />, multiplier: 1.3 },
    { id: 'nextjs', label: 'Next.js', icon: <FiZap className="text-lg mr-2" />, multiplier: 1.5 },
    { id: 'flutter', label: 'Flutter', icon: <FiZap className="text-lg mr-2" />, multiplier: 1.6 },
    { id: 'reactnative', label: 'React Native', icon: <FiZap className="text-lg mr-2" />, multiplier: 1.7 }
];

const DEFAULT_BACKEND_OPTIONS: SelectionOption[] = [
    { id: 'none', label: 'None', icon: <FiZap className="text-lg mr-2" />, multiplier: 1.2 },
    { id: 'firebase', label: 'Firebase', icon: <FiServer className="text-lg mr-2" />, multiplier: 1.4 },
    { id: 'php', label: 'PHP', icon: <FiServer className="text-lg mr-2" />, multiplier: 1.5 },
    { id: 'node', label: 'Node.js', icon: <FiServer className="text-lg mr-2" />, multiplier: 1.6 },
    { id: 'django', label: 'Django', icon: <FiServer className="text-lg mr-2" />, multiplier: 1.8 },
    { id: 'both', label: 'Node.js + Django', icon: <FiCheckCircle className="text-lg mr-2" />, multiplier: 2.2 }
];

const DEFAULT_COMPLEXITY_MULTIPLIERS = {
    simple: 0.5,
    medium: 0.9,
    complex: 1.1
};

const DEFAULT_BUDGET_OPTIONS: SelectionOption[] = [
    { id: 'lowBudget', label: 'Budget-friendly', icon: <FiDollarSign className="text-lg mr-2" />, multiplier: 0.7 },
    { id: 'standardBudget', label: 'Standard', icon: <FiDollarSign className="text-lg mr-2" />, multiplier: 1.1 },
    { id: 'highBudget', label: 'Premium', icon: <FiAward className="text-lg mr-2" />, multiplier: 1.8 }
];

const DEFAULT_INDUSTRY_OPTIONS: SelectionOption[] = [
    { id: 'ecommerce', label: 'E-commerce', icon: <FiShoppingBag className="text-lg mr-2" />, multiplier: 1.3 },
    { id: 'healthcare', label: 'Healthcare', icon: <FiServer className="text-lg mr-2" />, multiplier: 1.4 },
    { id: 'finance', label: 'Finance', icon: <FiDollarSign className="text-lg mr-2" />, multiplier: 1.5 },
    { id: 'education', label: 'Education', icon: <FiUsers className="text-lg mr-2" />, multiplier: 1.05 },
    { id: 'technology', label: 'Technology', icon: <FiCode className="text-lg mr-2" />, multiplier: 1.1 },
    { id: 'media', label: 'Media & Entertainment', icon: <FiMonitor className="text-lg mr-2" />, multiplier: 1.15 }
];

const PriceCalculator: React.FC<PriceCalculatorProps> = ({
    stages = DEFAULT_STAGES,
    platformOptions = DEFAULT_PLATFORM_OPTIONS,
    frontendOptions = DEFAULT_FRONTEND_OPTIONS,
    backendOptions = DEFAULT_BACKEND_OPTIONS,
    complexityMultipliers = DEFAULT_COMPLEXITY_MULTIPLIERS,
    budgetOptions = DEFAULT_BUDGET_OPTIONS,
    industryOptions = DEFAULT_INDUSTRY_OPTIONS,
    whatsappNumber = "+917510060787",
    title = "Project Cost Calculator",
    description = "Estimate the cost of your project based on your specific requirements. Adjust the options below to get a custom quote.",
    className = "",
}) => {
    // State
    const [completedStages, setCompletedStages] = useState<string[]>([]);
    const [neededStages, setNeededStages] = useState<string[]>([]);
    const [complexity, setComplexity] = useState<'simple' | 'medium' | 'complex'>('medium');
    const [timeframe, setTimeframe] = useState<'standard' | 'expedited'>('standard');
    const [platforms, setPlatforms] = useState<string[]>(['web']);
    const [backend, setBackend] = useState('node');
    const [frontendFramework, setFrontendFramework] = useState('react');
    const [budget, setBudget] = useState('standardBudget');
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalDays, setTotalDays] = useState(0);
    const [industry, setIndustry] = useState('technology');

    // Timeframe multipliers
    const timeframeMultipliers = {
        standard: { cost: 1, time: 1 },
        expedited: { cost: 1.3, time: 0.7 }
    };

    // Calculate price and time estimate when selections change
    useEffect(() => {
        calculatePrice();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [completedStages, neededStages, complexity, timeframe, platforms, backend, frontendFramework, budget, industry]);

    // Toggle stage completion
    const toggleCompleted = (stageId: string) => {
        if (completedStages.includes(stageId)) {
            setCompletedStages(completedStages.filter(id => id !== stageId));
        } else {
            setCompletedStages([...completedStages, stageId]);
            // If we mark something as completed, remove it from needed
            if (neededStages.includes(stageId)) {
                setNeededStages(neededStages.filter(id => id !== stageId));
            }
        }
    };

    // Toggle stage requirement
    const toggleNeeded = (stageId: string) => {
        if (neededStages.includes(stageId)) {
            setNeededStages(neededStages.filter(id => id !== stageId));
        } else {
            setNeededStages([...neededStages, stageId]);
            // If we mark something as needed, remove it from completed
            if (completedStages.includes(stageId)) {
                setCompletedStages(completedStages.filter(id => id !== stageId));
            }
        }
    };

    // Toggle platform selection
    const togglePlatform = (platformId: string) => {
        if (platformId === 'all') {
            // If "all" is selected, remove all other platforms
            setPlatforms(['all']);
        } else if (platforms.includes(platformId)) {
            // Remove platform if already selected
            const newPlatforms = platforms.filter(id => id !== platformId);
            setPlatforms(newPlatforms.length > 0 ? newPlatforms : ['web']);
        } else {
            // Add new platform and remove 'all' if it's present
            const filteredPlatforms = platforms.filter(p => p !== 'all');
            setPlatforms([...filteredPlatforms, platformId]);
        }
    };

    // Toggle backend selection
    const toggleBackend = (backendId: string) => {
        setBackend(backendId);
    };

    // Toggle frontend framework
    const toggleFrontendFramework = (frameworkId: string) => {
        setFrontendFramework(frameworkId);
    };

    // Toggle industry selection
    const toggleIndustry = (industryId: string) => {
        setIndustry(industryId);
    };

    // Calculate price
    const calculatePrice = () => {
        let basePrice = 0;
        let baseDays = 0;

        // Calculate base price from needed stages
        neededStages.forEach(stageId => {
            // Skip if this stage is already completed
            if (!completedStages.includes(stageId)) {
                const option = stages.find(opt => opt.id === stageId);
                if (option) {
                    basePrice += option.basePrice;
                    baseDays += option.baseDays;
                }
            }
        });

        // Calculate platform multiplier
        let platformMultiplier = 1;
        if (platforms.includes('all')) {
            platformMultiplier = platformOptions.find(opt => opt.id === 'all')?.multiplier || 2.2;
        } else {
            // Start with base value of 1 if any platform is selected
            platformMultiplier = platforms.length > 0 ? 1 : 0;

            // Add additional cost for each platform beyond the first
            if (platforms.length > 1) {
                // For each platform beyond the first, add only the difference from base
                platforms.forEach((platform, index) => {
                    if (index > 0) {
                        const option = platformOptions.find(opt => opt.id === platform);
                        if (option) {
                            // Add only the additional cost (multiplier - 1) for each additional platform
                            platformMultiplier += (option.multiplier - 1);
                        }
                    }
                });
            }
        }

        // Calculate frontend framework multiplier
        const frontendMultiplier = frontendOptions.find(opt => opt.id === frontendFramework)?.multiplier || 1;

        // Calculate backend multiplier
        const backendMultiplier = backendOptions.find(opt => opt.id === backend)?.multiplier || 1;

        // Calculate industry multiplier
        const industryMultiplier = industryOptions.find(opt => opt.id === industry)?.multiplier || 1;

        // Apply complexity multiplier
        const complexityMultiplier = complexityMultipliers[complexity];

        // Apply budget option multiplier
        const budgetMultiplier = budgetOptions.find(opt => opt.id === budget)?.multiplier || 1;

        // Apply timeframe multiplier
        const timeframeMultiplier = timeframeMultipliers[timeframe];

        // Calculate total price (do not charge for completed stages)
        const calculatedPrice = basePrice * platformMultiplier * frontendMultiplier * backendMultiplier * industryMultiplier * complexityMultiplier * budgetMultiplier * timeframeMultiplier.cost;
        setTotalPrice(Math.round(calculatedPrice));

        // Calculate total days
        const calculatedDays = baseDays * platformMultiplier * complexityMultiplier * timeframeMultiplier.time;
        setTotalDays(Math.round(calculatedDays));
    };

    // Format price to INR
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(price);
    };

    // Generate WhatsApp message
    const generateWhatsAppMessage = () => {
        // Get names of needed stages
        const neededStageNames = neededStages.map(id =>
            stages.find(opt => opt.id === id)?.title || ''
        ).filter(name => name).join(", ");

        // Get names of completed stages
        const completedStageNames = completedStages.map(id =>
            stages.find(opt => opt.id === id)?.title || ''
        ).filter(name => name).join(", ");

        // Get platform names
        const platformNames = platforms.map(id =>
            platformOptions.find(opt => opt.id === id)?.label || ''
        ).filter(name => name).join(", ");

        // Get backend name
        const backendName = backendOptions.find(opt => opt.id === backend)?.label || '';

        // Get frontend framework name
        const frontendName = frontendOptions.find(opt => opt.id === frontendFramework)?.label || '';

        // Get industry name
        const industryName = industryOptions.find(opt => opt.id === industry)?.label || '';

        // Get budget name
        const budgetName = budgetOptions.find(opt => opt.id === budget)?.label || '';

        // Create message
        const message = `
Hello! I'm interested in discussing my project with the following specifications:

*Price Estimate*: ${formatPrice(totalPrice)}
*Time Estimate*: ${totalDays} days (${timeframe === 'expedited' ? 'Expedited' : 'Standard'})

*Needed Services*: ${neededStageNames || 'None'}
*Completed Services*: ${completedStageNames || 'None'}
*Platforms*: ${platformNames}
*Frontend Framework*: ${frontendName}
*Backend Technology*: ${backendName}
*Industry*: ${industryName}
*Complexity*: ${complexity.charAt(0).toUpperCase() + complexity.slice(1)}
*Budget Range*: ${budgetName}

I would like to negotiate and discuss this project further. Thank you!`;

        return encodeURIComponent(message);
    };

    // Handle negotiate button click
    const handleNegotiate = () => {
        const message = generateWhatsAppMessage();
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    };

    return (
        <section className={`py-10 bg-dark-900 text-white ${className}`}>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{title}</h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto text-center mb-12">
                    {description}
                </p>

                {/* Completed and Needed Stages Combined */}
                <div className="bg-dark-800 rounded-xl p-4 mb-4">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                        {stages.map((option) => (
                            <div key={option.id} className="bg-dark-700 rounded-lg p-3">
                                <div className="flex items-center mb-2">
                                    <div className="text-emerald-400 mr-2">
                                        {option.icon}
                                    </div>
                                    <h3 className="text-white font-medium">{option.title}</h3>
                                </div>
                                <p className="text-xs text-gray-400 mb-3">{option.description}</p>
                                <div className="flex gap-2">
                                    <button
                                        className={`text-xs flex-1 py-1 px-2 rounded transition-colors ${completedStages.includes(option.id)
                                            ? 'bg-emerald-800 text-white'
                                            : 'bg-dark-900 text-gray-300 hover:bg-dark-600'
                                            }`}
                                        onClick={() => toggleCompleted(option.id)}
                                    >
                                        Completed
                                    </button>
                                    <button
                                        className={`text-xs flex-1 py-1 px-2 rounded transition-colors ${neededStages.includes(option.id)
                                            ? 'bg-emerald-600 text-white'
                                            : 'bg-dark-900 text-gray-300 hover:bg-dark-600'
                                            } ${completedStages.includes(option.id) ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        onClick={() => !completedStages.includes(option.id) && toggleNeeded(option.id)}
                                    >
                                        Need Help
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Platform, Technologies, and Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {/* Left Column */}
                    <div className="bg-dark-800 rounded-xl p-4">
                        <h3 className="text-md font-semibold mb-3 text-white border-b border-gray-700 pb-2">Project Options</h3>

                        {/* Platforms */}
                        <div className="mb-4">
                            <h4 className="text-sm font-medium text-white mb-2">Target Platforms</h4>
                            <div className="grid grid-cols-2 gap-2">
                                {platformOptions.map((platform) => (
                                    <div
                                        key={platform.id}
                                        className={`flex items-center p-1.5 rounded-lg cursor-pointer text-xs ${platforms.includes(platform.id)
                                            ? 'bg-emerald-800/30 border border-emerald-500'
                                            : 'bg-dark-700 border border-transparent hover:border-gray-600'
                                            }`}
                                        onClick={() => togglePlatform(platform.id)}
                                    >
                                        <div className={platforms.includes(platform.id) ? 'text-emerald-400' : 'text-gray-400'}>
                                            {platform.icon}
                                        </div>
                                        <span className="ml-1 text-white">{platform.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Industry */}
                        <div className="mb-4">
                            <h4 className="text-sm font-medium text-white mb-2">Industry</h4>
                            <div className="grid grid-cols-2 gap-2">
                                {industryOptions.map((option) => (
                                    <div
                                        key={option.id}
                                        className={`flex items-center p-1.5 rounded-lg cursor-pointer text-xs ${industry === option.id
                                            ? 'bg-emerald-800/30 border border-emerald-500'
                                            : 'bg-dark-700 border border-transparent hover:border-gray-600'
                                            }`}
                                        onClick={() => toggleIndustry(option.id)}
                                    >
                                        <div className={industry === option.id ? 'text-emerald-400' : 'text-gray-400'}>
                                            {option.icon}
                                        </div>
                                        <span className="ml-1 text-white">{option.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Complexity */}
                        <div className="mb-4">
                            <h4 className="text-sm font-medium text-white mb-2">Project Complexity</h4>
                            <div className="grid grid-cols-3 gap-2">
                                {['simple', 'medium', 'complex'].map((level) => (
                                    <div
                                        key={level}
                                        className={`flex items-center p-1.5 rounded-lg cursor-pointer text-xs ${complexity === level
                                            ? 'bg-emerald-800/30 border border-emerald-500'
                                            : 'bg-dark-700 border border-transparent hover:border-gray-600'
                                            }`}
                                        onClick={() => setComplexity(level as 'simple' | 'medium' | 'complex')}
                                    >
                                        <span className="ml-1 text-white">{level.charAt(0).toUpperCase() + level.slice(1)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Timeframe */}
                        <div className="mb-4">
                            <h4 className="text-sm font-medium text-white mb-2">Time Frame</h4>
                            <div className="grid grid-cols-2 gap-2">
                                {['standard', 'expedited'].map((option) => (
                                    <div
                                        key={option}
                                        className={`flex items-center p-1.5 rounded-lg cursor-pointer text-xs ${timeframe === option
                                            ? 'bg-emerald-800/30 border border-emerald-500'
                                            : 'bg-dark-700 border border-transparent hover:border-gray-600'
                                            }`}
                                        onClick={() => setTimeframe(option as 'standard' | 'expedited')}
                                    >
                                        <span className="ml-1 text-white">{option.charAt(0).toUpperCase() + option.slice(1)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="bg-dark-800 rounded-xl p-4">
                        <h3 className="text-md font-semibold mb-3 text-white border-b border-gray-700 pb-2">Technology Stack</h3>

                        {/* Frontend Framework */}
                        <div className="mb-4">
                            <h4 className="text-sm font-medium text-white mb-2">Frontend Framework</h4>
                            <div className="grid grid-cols-2 gap-2">
                                {frontendOptions.map((framework) => (
                                    <div
                                        key={framework.id}
                                        className={`flex items-center p-1.5 rounded-lg cursor-pointer text-xs ${frontendFramework === framework.id
                                            ? 'bg-emerald-800/30 border border-emerald-500'
                                            : 'bg-dark-700 border border-transparent hover:border-gray-600'
                                            }`}
                                        onClick={() => toggleFrontendFramework(framework.id)}
                                    >
                                        <div className={frontendFramework === framework.id ? 'text-emerald-400' : 'text-gray-400'}>
                                            {framework.icon}
                                        </div>
                                        <span className="ml-1 text-white">{framework.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Backend Technology */}
                        <div className="mb-4">
                            <h4 className="text-sm font-medium text-white mb-2">Backend Technology</h4>
                            <div className="grid grid-cols-2 gap-2">
                                {backendOptions.map((backendOption) => (
                                    <div
                                        key={backendOption.id}
                                        className={`flex items-center p-1.5 rounded-lg cursor-pointer text-xs ${backend === backendOption.id
                                            ? 'bg-emerald-800/30 border border-emerald-500'
                                            : 'bg-dark-700 border border-transparent hover:border-gray-600'
                                            }`}
                                        onClick={() => toggleBackend(backendOption.id)}
                                    >
                                        <div className={backend === backendOption.id ? 'text-emerald-400' : 'text-gray-400'}>
                                            {backendOption.icon}
                                        </div>
                                        <span className="ml-1 text-white">{backendOption.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Budget Range */}
                        <div className="mb-4">
                            <h4 className="text-sm font-medium text-white mb-2">Budget Range</h4>
                            <div className="grid grid-cols-3 gap-2">
                                {budgetOptions.map((budgetOption) => (
                                    <div
                                        key={budgetOption.id}
                                        className={`flex items-center p-1.5 rounded-lg cursor-pointer text-xs ${budget === budgetOption.id
                                            ? 'bg-emerald-800/30 border border-emerald-500'
                                            : 'bg-dark-700 border border-transparent hover:border-gray-600'
                                            }`}
                                        onClick={() => setBudget(budgetOption.id)}
                                    >
                                        <div className={budget === budgetOption.id ? 'text-emerald-400' : 'text-gray-400'}>
                                            {budgetOption.icon}
                                        </div>
                                        <span className="ml-1 text-white">{budgetOption.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Price and Duration Result */}
                <div className="bg-dark-800 rounded-xl p-6 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Estimated Price</h3>
                            <div className="text-3xl font-bold text-emerald-400">{formatPrice(totalPrice)}</div>
                            <p className="text-sm text-gray-400 mt-1">Based on the options you've selected</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Estimated Duration</h3>
                            <div className="text-3xl font-bold text-emerald-400">{totalDays} days</div>
                            <p className="text-sm text-gray-400 mt-1">Approximate timeline for completion</p>
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <Button
                            variant="gradient"
                            size="lg"
                            animate={true}
                            icon={<FiArrowRight />}
                            onClick={handleNegotiate}
                        >
                            Negotiate Now
                        </Button>
                        <p className="text-xs text-gray-400 mt-2">
                            Click to discuss your project and get a custom quote via WhatsApp
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { PriceCalculator }; 