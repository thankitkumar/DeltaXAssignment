module.exports = (sequelize, DataTypes) => {

    const Rating = sequelize.define("ratings", {
        rate: {
            type: DataTypes.INTEGER
        }
    
    })

    return Rating

}