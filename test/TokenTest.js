let assert = require('assert')
const Client = require('../roc/Client.js')

describe('TokenTest', function () {
    describe('@getToken', function () {
        it('验证签名是否匹配', function () {

            let authKey = 'testAuthKey'
            let secretKey = 'testSecretKey'
            let channelName = 'testChannelName'
            let userId = 'testUserId'
            let expireTime = 1594704891

            let client = new Client(authKey, secretKey)
            let token = client.getToken(channelName, userId, expireTime)

            // console.log(token)
            // 删除掩码
            token = token.substring(0, token.length - 16)

            assert.equal(token, 'eyJ0b2tlbiI6IjBiNDkzZTVjN2FjMjM2OThkOWNkYTJhZmMzNGUyMTQyIiwidGltZXN0YW1wIjoxNTk0NzA0ODkxfQ==')
        })
    })
})