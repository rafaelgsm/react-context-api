import React, { Component, createContext } from 'react';

export const ThemeContext = createContext()

class ThemeContextProvider extends Component {

    state = {
        isLightTheme: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
    }

    toggleTheme = () => {
        this.setState({ isLightTheme: !this.state.isLightTheme })
    }

    render() {
        return (

            //We want this to wrap different components
            //Takes all properties and spread them out inside this value property:
            <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>

                {/* This refers to the children this component wraps! */}
                {this.props.children}

            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;