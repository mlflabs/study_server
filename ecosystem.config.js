module.exports = {
  apps : [{
    name: 'studyapi',
    script: './src/index.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '100M',
  }],
};
