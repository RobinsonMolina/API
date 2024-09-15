module.exports = {
    'findAll': async () => {
        try {
            return res.status(200).json({state:"Success", data:[{id:1}, {id:2}]})
        }catch(err){
            return resizeBy.status(500).json({state:"Error", data:null})
        }
    },
    'findById' : async (req,res) => {
        const {id} = req.params;
        try {
            return res.status(200).json({state:"Success", data:id})
        }catch(err){
            return resizeBy.status(500).json({state:"Error", data:null})
        }
    },
    'save' : async (req,res) => {
        const {id, name, numEmployees} = req.body;
        try {
            return res.status(200).json({state:"Success", data:{idD:id, nameD: name, numEmployeesD: numEmployees}})
        }catch(err){
            return resizeBy.status(500).json({state:"Error", data:null})
        }
    },
    'update' : async (req,res) => {
        const {idD} = req.params;
        const {id, name, numEmployees} = req.body;
        try {
            return res.status(200).json({state:"Success", data:{idD:idD, nameD: name, numEmployeesD: numEmployees}})
        }catch(err){
            return resizeBy.status(500).json({state:"Error", data:null})
        }
    }
}