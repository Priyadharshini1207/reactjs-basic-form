const initialState = {
    users: [
        {
            key: 1,
            name: 'John Brown',
            age: 32,
            maritalStatus: "UnMarried",
            gender: 'Male',
            agree: false,
        },
        {
            key: 2,
            name: 'Jim Green',
            age: 42,
            maritalStatus: "Married",
            gender: 'Male',
            agree: true,
        },
        {
            key: 3,
            name: 'Joe Black',
            age: 32,
            maritalStatus: "Married",
            gender: 'Male',
            agree: true,
        },
    ]
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":
            action.payload['key'] = state.users.length + 1;
            // console.log("ADD_USER", action.payload);
            return {
                ...state,
                users: [...state.users, action.payload],
            };
        case "DELETE_USER": {
            // console.log("DELETE_USER", action.payload)
            const newArray = [...state.users]; //Copying state array
            let index = newArray.findIndex((result) => {
                return result.key === action.payload.key;
            });
            newArray.splice(index, 1);
            return {
                ...state,
                users: newArray //reassigning user array to new array
            }
        }
        case "UPDATE_USER": {
            // console.log("UPDATE_USER", action.payload)
            let index = [...state.users].findIndex((result) => {
                return result.key === action.payload.key;
            });
            const newArray = [...state.users]; //Copying state array

            newArray[index] = action.payload///changing value in the new array
            return {
                ...state,
                users: newArray //reassigning user array to new array
            }
        }
        default:
            return state;
    }
}

export default userReducer;