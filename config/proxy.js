module.exports = {
  '/cloud_data': {
    target: 'http://172.16.0.31:18081',
    pathRewrite: {'^/colud_data': '/colud_data'},
    changeOrigin: true,
  },
};

