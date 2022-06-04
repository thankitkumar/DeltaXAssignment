module.exports = (sequelize, DataTypes) => {

    const Song = sequelize.define("song", {
        image: {
            type: DataTypes.STRING
        },
        song: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dateOfRelease: {
            type: DataTypes.DATE
        },
        artists: {
            type: DataTypes.TEXT
        },
    })

    return Song

}