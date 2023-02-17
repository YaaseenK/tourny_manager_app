const { User } = require('../models');


    module.exports = {
    // Getting All Users
        async getUsers ({req}, res) {
            await User.find()
                .sort({_id: -1})
                .select('-__v')
                .then((allUsers) => res.json(allUsers))
                .catch((err) => res.status(500).json(err));
        },
    
    // Getting Single User
        getSingleUser(req, res) {
            User.findOne({ _id: req.params.id})
                .select('-__v')
                .then((singleUser) =>
                    !singleUser
                        ? res.status(404).json({message: 'Error: User ID not found'})
                        : res.json(singleUser)
                )
                .catch((err) => res.status(500).json(err));
        },
    
    // Creating a User
        createUser( req, res) {
            User.create(req.body).then((createUser) => res.json(createUser))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
        },
    
    // Updating a Current User
        updateUser({ params, body }, res) {
            User.findOneAndUpdate (
                { _id: params.id },
                body, { new : true, runValidator: true},
            )
                .then((updateUser) =>
                    !updateUser
                        ? res.status(404).json({message: 'Error: User ID not found'})
                        : res.json(updateUser)
                )
                .catch((err) => res.status(500).json(err));
        },
    
    //Deleting a User
        deleteUser(req, res) {
            User.findOneAndDelete ({ _id: req.params.id})
                .then((deleteUser) =>
                    !deleteUser
                        ? res.status(404).json({message: 'Error: User ID not found'})
                        : Thought.deleteMany ({ _id: {$in: deleteUser.thoughts}})
                )
                .then(() => res.json({message: 'Success! User and user thoughts have been deleted! '}))
                .catch((err) => res.status(500).json(err));
        },
    
    };