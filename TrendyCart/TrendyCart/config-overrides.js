const { override } = require('customize-cra');

const cspHeader = (req, res, next) => {
    res.setHeader("Content-Security-Policy-Report-Only", "font-src 'self' https://js.stripe.com;");
    next();
};

module.exports = override(
    (config) => {
        config.devServer = {
            ...config.devServer,
            before: (app) => {
                app.use(cspHeader);
            },
        };
        return config;
    }
);