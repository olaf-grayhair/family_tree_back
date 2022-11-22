import User from "../User.js";


class UserController {
    async create(req, res) {
        try {
            const { name, surname, date, img } = req.body
            const user = await User.create({ name, surname, date, img })
            res.json(user)
    
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async findAll(req, res) {
        try {
            const users = await User.find()
            return res.json(users)
            
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async find(req, res) {
        try {
            const {id} = req.params
            console.log(id, 'id');
            if(!id) {
                res.status(400).json({message: 'no ID'})
            }

            const user = await User.findById(id)
            return res.json(user)
            
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async update(req, res ) {
        try {
            const user = req.body
            if(!user._id) {
                res.status(400).json({message: 'no ID'})

            }
            
            const updateUser = await User.findByIdAndUpdate(user._id, user,  {new: true})
            return res.json(updateUser)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default new UserController()