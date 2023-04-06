// Localhost: 8080
// const PROXY_CONFIG = [
//     {
//         context: ["/api/**"],
//         target: "http://localhost:8080",
//         secure: false,
//         logLevel: "debug",
//     }
// ]

const PROXY_CONFIG = [
    {
        "rewrites": [
            {
                "source": "/api/:path*",
                "destination": "https://csf-server-production.up.railway.app/api/:path*"
            }
        ]
    }
]

module.exports = PROXY_CONFIG;

// ng serve --proxy-config proxy.config.js