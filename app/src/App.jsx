import { Provider as ExercisesProvider } from './Context/exercisesContext';
import ExercisesList from './Components/ExercisesList';

function App() {
  return (
    <ExercisesProvider>
      <ExercisesList />
    </ExercisesProvider>
  )
}

export default App
