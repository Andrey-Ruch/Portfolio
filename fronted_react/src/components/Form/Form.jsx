import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormControl from "@mui/joy/FormControl";
import FormHelperText from "@mui/joy/FormHelperText";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import { client } from "../../client";
import "./Form.scss";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
    mode: "all", // "onChange"
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    console.log(data);

    setLoading(true);

    const contact = {
      _type: "contact",
      name: data.username,
      email: data.email,
      message: data.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {!isFormSubmitted ? (
        <>
          <h2>Send me a message</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl error className="form-control">
              <input
                type="text"
                placeholder="Your Name"
                autoComplete="off"
                //   error={!!errors.username}
                {...register("username", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                })}
              />
              <FormHelperText sx={{ m: 0, mb: 1 }}>
                {errors?.username && (
                  <>
                    <InfoOutlined fontSize="small" className="icon-color" />
                    <span className="error-text">
                      {errors.username?.message}
                    </span>
                  </>
                )}
              </FormHelperText>

              <input
                // type="email"
                placeholder="Your Email"
                autoComplete="false"
                //   error={!!errors.email}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email",
                  },
                })}
              />
              <FormHelperText sx={{ m: 0, mb: 1 }}>
                {errors?.email && (
                  <>
                    <InfoOutlined fontSize="small" className="icon-color" />
                    <span className="error-text">{errors.email?.message}</span>
                  </>
                )}
              </FormHelperText>

              <textarea
                type="text"
                placeholder="Your Message"
                autoComplete="off"
                //   error={!!errors.message}
                {...register("message", {
                  required: "Message is required",
                  minLength: 1,
                })}
              />
              <FormHelperText sx={{ m: 0, mb: 1 }}>
                {errors?.message && (
                  <>
                    <InfoOutlined fontSize="small" className="icon-color" />
                    <span className="error-text">
                      {errors.message?.message}
                    </span>
                  </>
                )}
              </FormHelperText>

              <div className="button-container  app__flex">
                <button type="submit" variant="contained" color="primary">
                  {!loading ? "Send" : "Sending..."}
                </button>
              </div>
            </FormControl>
          </form>
        </>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
}
