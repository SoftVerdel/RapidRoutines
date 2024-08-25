import { useContext, useEffect } from "react";
import { Context as ExercisesContext } from "../Context/exercisesContext";
import exercises from "../data/exercises";

const ExercisesList = () => {
    const { state, addExercise } = useContext(ExercisesContext);

    useEffect(() => {
        const firstExercise = pickRandomExercise(exercises.firstRoundExercises);
        let secondExercise = pickRandomExercise(exercises.secondRoundExercises);

        while (firstExercise === secondExercise) {
            secondExercise = pickRandomExercise(exercises.secondRoundExercises);
        }

        addExercise(firstExercise);
        addExercise(secondExercise);
        addExercise(pickRandomExercise(exercises.thirdRoundExercises));
        addExercise(pickRandomExercise(exercises.fourthRoundExercises));
        addExercise(pickRandomExercise(exercises.fifthRoundExercises));
    }, [])

    const pickRandomExercise = (list) => {
        let filteredList = list.filter(item => !state.some(exercise => exercise.title === item));
        const randomIndex = Math.floor(Math.random() * list.length);
        return filteredList[randomIndex];
    }

    return (
        <div className='exercises-container'>
            {
                state.map(exercise => (
                    <p key={exercise.id}>{exercise.title}</p>
                ))
            }
        </div>
    );
}

export default ExercisesList;