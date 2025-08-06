import { useState } from 'react';
import { ChevronDown, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FilterOption {
  id: string;
  label: string;
  count: number;
}

interface FilterCategory {
  title: string;
  options: FilterOption[];
}

const filterCategories: FilterCategory[] = [
  {
    title: 'Material',
    options: [
      { id: 'sport', label: 'Sport Band', count: 12 },
      { id: 'leather', label: 'Leather', count: 8 },
      { id: 'metal', label: 'Metal', count: 6 },
      { id: 'milanese', label: 'Milanese Loop', count: 4 },
    ],
  },
  {
    title: 'Price Range',
    options: [
      { id: 'under-50', label: 'Under $50', count: 15 },
      { id: '50-100', label: '$50 - $100', count: 10 },
      { id: '100-200', label: '$100 - $200', count: 8 },
      { id: 'over-200', label: 'Over $200', count: 5 },
    ],
  },
  {
    title: 'Color',
    options: [
      { id: 'black', label: 'Black', count: 18 },
      { id: 'white', label: 'White', count: 12 },
      { id: 'blue', label: 'Blue', count: 10 },
      { id: 'red', label: 'Red', count: 8 },
    ],
  },
];

export const FilterPanel = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['Material']);

  const toggleFilter = (filterId: string) => {
    setSelectedFilters(prev => 
      prev.includes(filterId) 
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    );
  };

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev =>
      prev.includes(category)
        ? prev.filter(cat => cat !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="glass-card rounded-2xl p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-2">
        <Filter className="w-5 h-5 text-primary" />
        <h3 className="font-semibold text-lg cosmic-text">Filters</h3>
      </div>

      {/* Filter Categories */}
      {filterCategories.map((category) => (
        <div key={category.title} className="space-y-3">
          <button
            onClick={() => toggleCategory(category.title)}
            className="flex items-center justify-between w-full text-left"
          >
            <span className="font-medium text-card-foreground">
              {category.title}
            </span>
            <ChevronDown 
              className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
                expandedCategories.includes(category.title) ? 'rotate-180' : ''
              }`} 
            />
          </button>

          {expandedCategories.includes(category.title) && (
            <div className="space-y-2 pl-2 animate-accordion-down">
              {category.options.map((option) => (
                <label
                  key={option.id}
                  className="flex items-center space-x-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={selectedFilters.includes(option.id)}
                    onChange={() => toggleFilter(option.id)}
                    className="w-4 h-4 rounded border-card-border text-primary focus:ring-primary focus:ring-2"
                  />
                  <span className="text-sm text-muted-foreground group-hover:text-card-foreground transition-colors">
                    {option.label}
                  </span>
                  <span className="text-xs text-muted-foreground/60">
                    ({option.count})
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Clear Filters */}
      {selectedFilters.length > 0 && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => setSelectedFilters([])}
          className="w-full border-card-border hover:border-primary"
        >
          Clear Filters ({selectedFilters.length})
        </Button>
      )}
    </div>
  );
};