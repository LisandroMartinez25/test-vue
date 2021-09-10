module.exports = {
    apps: [
      {
        name: 'TestApp',
        exec_mode: 'cluster',
        instances: 'max', // Or a number of instances
        script: './node_modules/nuxt/bin/nuxt.js',
        args: 'start -p 3000 -H 0.0.0.0'
      }
    ]
  }