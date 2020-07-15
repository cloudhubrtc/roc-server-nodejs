const Client = require('./roc/Client.js')

let authKey = 'Wbyk*****Q8pwd3'
let secretKey = '234****3sdfsfs'
let channelName = '1234****9qiushao'
let userId = '15947****766-101726'
let expireTime = 1594704891

/**
 * Demo Only
 * 请使用自己的 AuthKey 和 SecretKey
 * AuthKey: WbykCN****8pwd3
 * SecretKey: 23423****dfsfs
 * ChannelName: 1234567****shao
 * UserId: 159****91766-10**26
 * ExpireTime: 1594704891
 * AuthToken: eyJ0b2tlbiI6ImZlNTdkNzUzMDI1ZDIwMzdlNGZjMDdhMmRkYTBhZmMxIiwidGltZXN0YW1wIjoxNTk0NzA0ODkxLCJ1c2VyYWNjb3VudCI6InJlc2VydmUiLCJyb2xlIjoicmVzZXJ2ZSJ9lADPXbcGTTuoSBvn
 */


let client = new Client(authKey, secretKey)
let token = client.getToken(channelName, userId, expireTime)

console.log(token)