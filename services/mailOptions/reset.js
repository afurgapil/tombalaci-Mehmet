module.exports = function resetPassword(email, code) {
  const resetCheckURL = "http://localhost:3001/reset-check";

  const mailOptions = {
    from: "apicookbook@gmail.com",
    to: email,
    subject: "Şifre Sıfırlama İsteği",
    html: `
      <p>Merhaba,</p>
      <p>Şifrenizi sıfırlamak için <a href="${resetCheckURL}?mail=${email}">buraya tıklayınız</a> veya aşağıdaki kodu kullanabilirsiniz:</p>
      <p style="display: inline-block; padding: 10px 20px; background-color: #007BFF; color: #fff; text-decoration: none; border-radius: 5px;">${code}</p>
      <p>Eğer şifre sıfırlama isteği yapmadıysanız, bu e-postayı görmezden gelebilirsiniz.</p>
      <p>İyi günler dileriz.</p>
    `,
  };
  return mailOptions;
};
