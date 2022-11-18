import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string().required("Zorunlu alan"),
  lastName: Yup.string().required("Zorunlu alan"),
  email: Yup.string().email("Geçersiz e-mail adresi").required("Zorunlu alan"),
  password: Yup.string()
    .min(8, "en az 8")
    .max(16, "en fazla 16")
    .required("Zorunlu alan"),
});

const LoginFormik = () => {
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="form-wrapper bg-gray-600">
      <h1>{`React form management with Formik & Yup`}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="Ad"
          onChange={handleChange}
          values={values.firstName}
        />
        <span>{errors.firstName ? errors.firstName : null}</span>
        <input
          type="text"
          name="lastName"
          placeholder="Soyad"
          onChange={handleChange}
          values={values.lastName}
        />
        <span>{errors.lastName ? errors.lastName : null}</span>
        <input
          type="text"
          name="email"
          placeholder="E-mail"
          onChange={handleChange}
          values={values.email}
        />
        <span>{errors.email ? errors.email : null}</span>
        <button type="submit">Kayıt Ol</button>
      </form>
    </div>
  );
};

export default LoginFormik;
