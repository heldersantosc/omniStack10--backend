module.exports = function parseStringAsArray(arrayAsString){
    /** Remove as virgulas
     *  Remove espaços em branco
     */
    return arrayAsString.split(',').map(tech => tech.trim());
}