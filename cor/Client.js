const crypto = require('crypto')
const md5 = (content) => {
    return crypto.createHash('md5').update(content).digest('hex')
}

class Client {
    constructor(authKey, secretKey) {
        this._authKey = authKey
        this._secretKey = secretKey
    }

    getToken(channelName, userId, expireTime) {
        let bodyStr = this._authKey + "authkey" + this._authKey + "channame" + channelName + "timestamp" + expireTime + "userid" + userId;
        let encodeStr = md5(md5(bodyStr) + md5(this._secretKey))
        let token = {
            token: encodeStr,
            timestamp: expireTime,
            'useraccount': 'reserve',
            'role': 'reserve'
        }
        let tokenBase64 = Buffer.from(JSON.stringify(token)).toString('base64')
        let randomStr = tokenBase64.substr(0, 16).split('').sort(() => {
            return Math.random() > 0.5 ? 1 : -1;
        }).join('')
        return tokenBase64 + randomStr
    }
}

module.exports = Client