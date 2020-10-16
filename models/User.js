const mongoose = require('mongoose');

const userSchema = mongoose.Schema( {
  name: {
    type: String,
    maxLength: 50
  },
  email: {
    type: String,
    trim: true,  // 이메일 중간에 공백이 있을때 그 공백 제거
    unique: 1  // 유일함을 체크
  },
  password: {
    type: String,
    minLength: 5
  },
  lastname: {
    type: String,
    maxLength: 50
  },
  role: {  // 관리자, 일반사용자 등 역할
    type: Number,
    default: 0
  },
  image: String,
  token: {  // 식별자 역할, 유효성 체크
    type: String
  },
  tokenExp: { // 토큰 유효기간
    type: Number
  }
});
// mongoose.model(모델이름, 스키마이름);
const User = mongoose.model('User', userSchema);

// 다른 파일에서도 사용할 수 있게 export
module.exports = { User };