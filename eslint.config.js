// eslint.config.js
module.exports = [
  {
    ignores: ['node_modules/**'], // Ignora la carpeta node_modules
  },
  {
    languageOptions: {
      ecmaVersion: 2018, // Define ECMAScript 2018
      globals: {
        // Permite el uso de console.log
        console: true,
      },
    },
    rules: {
      'no-console': 'warn', // Muestra una advertencia si se usa console.log
      // Otras reglas que quieras agregar
    },
  },
  // Configuración recomendada de ESLint
  {
    rules: {
      'no-console': 'warn', // Permitir las advertencias de console.log
      // Otras reglas que consideres necesarias
    },
  },
];
