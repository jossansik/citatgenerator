
import './App.css';
import CategorySelector from './components/CategorySelector';
import QuoteDisplay from './components/QuoteDisplay';

const App = () => {
  const categories = ['Inspirerande citat', 'Motiverande citat', 'Humoristiska citat', 'Filsofiska citat', 'Kärlekscitat'];

  const handleCategorySelection = (selectedCategory) => {
  };

  return (
    <div>
      <CategorySelector categories={categories} onSelectCategory={handleCategorySelection} />
      <QuoteDisplay />
    </div>
  );
};

export default App;
