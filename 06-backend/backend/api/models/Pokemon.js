/**
 * Pokemon.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre:{
      type: 'string',
      required: true, // Por defecto es false
    },
    // Relaciones
    // Pokemon <- Usuario - Muchos a Uno
    usuario: { // Nombre FK
      model: 'Usuario', // Modelo con el cual relacionamos
      required: true, // Requerida 1 - N
      //false // Opcional  0 - N (por defecto)
    },
    batallas: {
      collection: 'Batalla',
      via: 'pokemon'
    }
  },

};

