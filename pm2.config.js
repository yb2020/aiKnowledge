module.exports = {
  apps: [
    {
      name: 'aiCms',
      exec_mode: 'cluster',
      script: './server/index.js',
      log_date_format: 'YYYY-MM-DD HH:mm',
      error_file: '/home/logs/nuxt/aiCms/error.log',
      out_file: '/home/logs/nuxt/aiCms/out.log',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};
