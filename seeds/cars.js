exports.seed = async function(knex) {
    await knex("cars").truncate()
    await knex("car-dealer").insert([
       {VIN: 123234434565677678878909, make: "Toyota", model: "Carolla", mileage: 214365} 
    ])
}