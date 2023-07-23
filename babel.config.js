module.exports = function (api) {
    api.cache(false);
    return {
        "sourceMap": "both",
        "retainLines": true,
        "exclude": [
            /node_modules/
          ],  
        "presets": [
            [
                "@babel/preset-typescript",
            ],
            [
                "@babel/preset-env",
                {
                    "targets": {
                        "node": "current"
                    }
                }
            ]
        ],
        "plugins": [
            [
                "@babel/plugin-proposal-decorators",
                {
                    "legacy": true
                }
            ]
        ]
    }
};
