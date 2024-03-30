
export const loginForm = () => {
    
    return (
    
            <form onSubmit={handleLoginSubmit}>
                <label>
                    Email:
                </label>
                    <input
                        type="email"
                        name="email"
                        onChange={handleLoginChange}
                    />
                
                <label>
                    Password:
                </label>
                    <input
                        type="password"
                        name="password"
                        onChange={handleLoginChange}
                    />
                
                <button type="submit">Log In</button>
            </form>
        
    )
}

export const signUpForm = () => {
    return (
        <form onSubmit={handleSignupSubmit}>
                <label>
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        onChange={handleSignupChange}
                    />
                </label>
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="lastName"
                        onChange={handleSignupChange}
                    />
                </label>
                <label>
                    Age:
                    <input
                        type="number"
                        name="age"
                        onChange={handleSignupChange}
                    />
                </label>
                <label>
                    Weight:
                    <input
                        type="number"
                        name="weight"
                        onChange={handleSignupChange}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        onChange={handleSignupChange}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        onChange={handleSignupChange}
                    />
                </label>
                <label>
                    Confirm Password:
                    <input
                        type="password"
                        name="confirmPassword"
                        onChange={handleSignupChange}
                    />
                </label>
                <button type="submit">Sign Up</button>
            </form>
    )
}
