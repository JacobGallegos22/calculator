import './App.css';
import ButtonContainer from './ButtonContainer';
import ValueContainer from './ValueContainer/ValueContainer';
import { useAddCharacter } from './hooks'

function App() {
  const [currentOperand, onAddCharacter] = useAddCharacter()

  return (
    <div className='parent'>
      <div className='child'>
        <div className='value-container'>
          <ValueContainer value={currentOperand} />
        </div>
        <ButtonContainer setValue={(value) => onAddCharacter(value)} />
      </div>
    </div>
  );
}

export default App;
