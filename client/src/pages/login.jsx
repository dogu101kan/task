import { useState } from "react";
import { setCurrentAccount } from "../store/auth/actions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    let url =
      "/api/auth/login";

    let headers = new Headers();

    headers.append("Content-Type", "application/json");

    fetch(url, { method: "POST", headers: headers, body: JSON.stringify(formData) })
      .then((response) => response.json())
      .then((json) => {setCurrentAccount(json); navigate("/table");})
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="form">
      <label className="w-full flex flex-col gap-2">
        <p className="ml-3">Kullanıcı Adı</p>
        <input
          id="username"
          type="username"
          placeholder="kullanici adi"
          onChange={handleChange}
        />
      </label>
      <label className="w-full flex flex-col gap-2">
        <p className="ml-3">Şifre</p>
        <input
          id="password"
          type="password"
          placeholder="*******"
          onChange={handleChange}
        />
      </label>
      <button onClick={handleSubmit}>Giriş Yap</button>
    </div>
  );
};

export default Login;
