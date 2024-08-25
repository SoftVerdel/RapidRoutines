import createDataContext from "./createDataContext";

const exercisesReducer = (state, action) => {
    // state === [{ title: 'Exercise 1', id: 1 }, { title: 'Exercise 2', id: 2 }]
    // action === { type: 'add_exercise', payload: 'Exercise 3' }

    switch (action.type) {
        case 'add_exercise':
            return [...state, { title: action.payload, id: state.length + 1 }];
        default:
            return state;
    }
};

const addExercise = dispatch => {
    return (title, callback) => {
        dispatch({ type: 'add_exercise', payload: title });

        if (callback) {
            callback();
        }
    };
}

export const { Context, Provider } = createDataContext(
    exercisesReducer,
    { addExercise },
    []
);