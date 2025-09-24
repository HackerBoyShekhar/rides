window._config = {
    cognito: {
        userPoolId: 'us-east-1_HiXtxhK0j', // ✅ this is correct
        userPoolClientId: 'NEW_APP_CLIENT_ID_WITHOUT_SECRET', // 🔴 update this
        region: 'us-east-1'
    },
    api: {
        invokeUrl: '' // keep empty until API Gateway is set up
    }
};

