const express = require('express')

const {ValidatorInserData} = require("../validators/users.js")

// Exporta todos los metodos desde controllers/user 
const controller = require('../controllers/users.js')

const router = express.Router()

// const path = 'user'

// router.get(
//     `${path}/`,
    // Esta logica ↓ hacerla desde otra dependencia
    // (req, res) => {
    //     res.send({a: 1})    
    // }
// )

// router.get(
//     `/${path}`, controller.getData // Con la configuracion de index, ya no es necesario dejar el path
// )

/**
 * Ruta: /user GET
 */
router.get(
    `/`, controller.getData
)

/**
 * Ruta: /user GET
 */
 router.get(
    `/:id`, controller.getDataByID
)

router.post(
    `/`, ValidatorInserData, controller.inserData
)

router.post(
    `/bulk`, controller.inserManyData
)

router.put(
    `/:id`, controller.updateSingle
)

router.delete(
    `/:id`, controller.deleteSingle
)

module.exports = router