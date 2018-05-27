// 手机号码验证
const isMobile = mobileNumber => /^0?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/.test(mobileNumber);

// 身份证号验证
const isIdientify = idNumber => /^((1[1-5])|(2[1-3])|(3[1-7])|(4[1-6])|(5[0-4])|(6[1-5])|71|(8[12])|91)\d{4}((19\d{2}(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(19\d{2}(0[13578]|1[02])31)|(19\d{2}02(0[1-9]|1\d|2[0-8]))|(19([13579][26]|[2468][048]|0[48])0229))\d{3}(\d|X|x)?$/.test(idNumber);

// 密码长度验证
const checkPassword = password => password.length >= 6 && password.length <= 18;

// 更改页面 title
const setTitle = (title = 'Running Business') => {
  window.document.title = title;
};

const formatTime = (date) => {
  const y = `${date.getFullYear()}-`;
  const month = `${date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}-`;
  const d = `${date.getDate()} `;
  const h = `${date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}:`;
  const m = `${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}:`;
  const s = `${date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()}`;

  return y + month + d + h + m + s;
};

export {
  isMobile,
  isIdientify,
  checkPassword,
  setTitle,
  formatTime,
};
