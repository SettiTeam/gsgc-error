const errors = {

    generic: {
        status: 200,
        type: 'generic',
        message: 'An unknown error has occured.'
    },

    unauthorized: function() {
        return {
            status: 401,
            type: 'generic',
            message: 'This user is not authorized to do that action.'
        };
    },

    notFound: function(data) {
        return {
            status: 404,
            type: 'generic',
            message: 'Not found.',
            raw: data
        };
    },



    // Client
    noClientHeader: function() {
        return {
            status: 401,
            type: 'client',
            message: 'Missing client header.'
        };
    },

    noClientTokenHeader: function() {
        return {
            status: 401,
            type: 'client',
            message: 'Missing client token.'
        };
    },

    invalidClient: function() {
        return {
            status: 401,
            type: 'client',
            message: 'Invalid client header.'
        };
    },

    incorrectClientToken: function() {
        return {
            status: 401,
            type: 'client',
            message: 'Incorrect client token.'
        };
    },



    // Server
    incorrectServerSecret: function() {
        return {
            status: 401,
            type: 'server',
            message: 'Incorrect server secret.'
        };
    },

    noServers: function() {
        return {
                status: 200,
                type: 'server',
                message: 'No socket servers available.'
        };
    },

    hubActionFailed: function(data) {
        return {
                status: 500,
                type: 'server',
                message: 'Hub action failed.',
                raw: data
        };
    },



    // Database
    mongo: function(data) {
        return {
                status: 500,
                type: 'database',
                message: 'Error reading/writing to database.',
                raw: data
        };
    },



    // Auth
    invalidAuthToken: function() {
        return {
            status: 401,
            type: 'auth',
            message: 'Incorrect auth token.'
        };
    },

    userMissing: function() {
        return {
            status: 401,
            type: 'auth',
            message: 'User no longer exists.'
        };
    },



    // Form
    noLogin: function() {
        return {
            status: 200,
            type: 'form',
            message: 'Please enter a username or email address.',
            input: 'login'
        };
    },

    incorrectLogin: function() {
        return {
            status: 200,
            type: 'form',
            message: 'Incorrect Username/Email or Password',
            input: 'login'
        };
    },

    noUsername: function() {
        return {
            status: 200,
            type: 'form',
            message: 'Please enter a username.',
            input: 'username'
        };
    },

    invalidUsername: function() {
        return {
            status: 200,
            type: 'form',
            message: 'Username should be between 2 and 15 characters.',
            input: 'username'
        };
    },

    noEmail: function() {
        return {
            status: 200,
            type: 'form',
            message: 'Please enter an email address.',
            input: 'email'
        };
    },

    invalidEmail: function() {
        return {
            status: 200,
            type: 'form',
            message: 'Please enter a valid email address.',
            input: 'email'
        };
    },

    noPassword: function() {
        return {
            status: 200,
            type: 'form',
            message: 'Please enter a password.',
            input: 'password'
        };
    },

    invalidPassword: function() {
        return {
            status: 200,
            type: 'form',
            message: 'Passwords must be longer than 6 characters.',
            input: 'password'
        };
    },

    taken: function() {
        return {
            status: 200,
            type: 'form',
            message: 'Value is taken.'
        };
    }

};

// var errors = {

//     generic: {
//         status: 200,
//         type: 'GENERIC',
//         message: 'An unknown error has occured.'
//     },
//
//     unauthorized: function() {
//         return {
//             status: 401,
//             type: 'GENERIC',
//             message: 'This user is not authorized to do that action.'
//         };
//     },
//
//     // AUTH
//     invalidAuthToken: function() {
//         return {
//             status: 401,
//             type: 'AUTH',
//             message: 'Incorrect auth token.'
//         };
//     },
//
//     userMissing: function() {
//         return {
//             status: 401,
//             type: 'AUTH',
//             message: 'User no longer exists.'
//         };
//     },
//
//     // FORM
//     noLogin: function() {
//         return {
//             status: 200,
//             type: 'FORM',
//             message: 'Please enter a username or email address.',
//             input: 'login'
//         };
//     },
//
//     incorrectLogin: function() {
//         return {
//             status: 200,
//             type: 'FORM',
//             message: 'Incorrect Username/Email or Password',
//             input: 'login'
//         };
//     },
//
//     noUsername: function() {
//         return {
//             status: 200,
//             type: 'FORM',
//             message: 'Please enter a username.',
//             input: 'username'
//         };
//     },
//
//     invalidUsername: function() {
//         return {
//             status: 200,
//             type: 'FORM',
//             message: 'Username should be between 2 and 15 characters.',
//             input: 'username'
//         };
//     },
//
//     noEmail: function() {
//         return {
//             status: 200,
//             type: 'FORM',
//             message: 'Please enter an email address.',
//             input: 'username'
//         };
//     },
//
//     invalidEmail: function() {
//         return {
//             status: 200,
//             type: 'FORM',
//             message: 'Please enter a valid email address.',
//             input: 'username'
//         };
//     },
//
//     noPassword: function() {
//         return {
//             status: 200,
//             type: 'FORM',
//             message: 'Please enter a password.',
//             input: 'username'
//         };
//     },
//
//     invalidPassword: function() {
//         return {
//             status: 200,
//             type: 'FORM',
//             message: 'Passwords must be longer than 6 characters.',
//             input: 'username'
//         };
//     },
//
//     // RADIER BAY FORMS
//     invalidGameName: function() {
//         return {
//             status: 200,
//             type: 'FORM',
//             message: 'Game name must be between 3 and 50 characters.',
//             input: 'name'
//         };
//     },
//
//     invalidVessel: function() {
//         return {
//             status: 200,
//             type: 'FORM',
//             message: 'Vessle name must be between 3 and 30 characters.',
//             input: 'vessel'
//         };
//     },
//
//     colorTaken: function() {
//         return {
//             status: 200,
//             type: 'FORM',
//             message: 'Color is already in use.',
//             input: 'color'
//         };
//     },
//
//     gameNotReady: function() {
//         return {
//             status: 200,
//             type: 'GAME',
//             message: 'The game is not ready to start.'
//         };
//     },
//
//     // CLIENT
//     noClientHeader: function() {
//         return {
//             status: 401,
//             type: 'CLIENT',
//             message: 'Missing client header.'
//         };
//     },
//
//     noClientTokenHeader: function() {
//         return {
//             status: 401,
//             type: 'CLIENT',
//             message: 'Missing client token.'
//         };
//     },
//
//     invalidClient: function() {
//         return {
//             status: 401,
//             type: 'CLIENT',
//             message: 'Invalid client header.'
//         };
//     },
//
//     incorrectClientToken: function() {
//         return {
//             status: 401,
//             type: 'CLIENT',
//             message: 'Incorrect client token.'
//         };
//     },
//
//     // SERVER
//     bcrypt: function(data) {
//         return {
//                 status: 500,
//                 type: 'SERVER',
//                 message: 'Error encrypting password. Please try again.',
//                 raw: data
//         };
//     },
//
//     // DATABASE
//     mongo: function(data) {
//         return {
//                 status: 500,
//                 type: 'DATABASE',
//                 message: 'Error reading/writing to database.',
//                 raw: data
//         };
//     }
//
// };

module.exports = function(errorName, data) {

    var res = { },
        error;

    if (errors[errorName]) {
        error = errors[errorName](data);
    }
    else {
        error = errors.generic;
    }

    if (error.status) res.status = error.status;
    if (error.type) res.type = error.type;
    if (error.message) res.message = error.message;
    if (error.input) res.input = error.input;
    if (error.raw) res.raw = error.raw;

    return {
        status: error.status || 200,
        response: {
            error: res
        }
    };

};
