
import './App.css';
import CategorySelector from './components/CategorySelector';
import LikeButton from './components/LikeButton';
import QuoteDisplay from './components/QuoteDisplay';

const App = () => {
  const categories = ['Inspirerande citat', 'Motiverande citat', 'Humoristiska citat', 'Filsofiska citat', 'Kärlekscitat'];

  return (
    <div>
      <QuoteDisplay />
      <LikeButton />
    </div>
  );
};

export default App;
