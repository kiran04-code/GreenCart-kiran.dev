import Address from "../model/adress.js"

// Add ADDRESS --path - /api/address/add
export const Addaddress = async (req, res) => {
    try {
        const { adress } = req.body
        const userId = req.user
        const Adress = await Address.create({
            ...adress, userId
        })
        req.json({
            success: true, message: "Address add!", Adress
        })
    } catch (error) {
        console.log(error.message)
        res.json({
            sucess: false,
            message: error.message
        })
    }
}

// Get -Address :/address/get

export const getAddress = async (req, res) => {
    try {
        const userId = req.user
        const getAdd = await Address.findById({ userId })
        res.json({
            success: true,
            getAdd
        })
    } catch (error) {
        console.log(error.message)
        req.json({
            success: false,
            message: error.message
        })
    }
}