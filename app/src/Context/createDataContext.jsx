import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

const createDataContext = (reducer, actions, initialState) => {
    const Context = React.createContext();

    const Provider = ({ children }) => {
        Provider.propTypes = {
            children: PropTypes.node.isRequired
        };

        const [state, dispatch] = useReducer(reducer, initialState);

        const boundActions = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }

        return (
            <Context.Provider value={{ state, ...boundActions }}>
                {children}
            </Context.Provider>
        );
    };

    return { Context, Provider };
};

export default createDataContext;