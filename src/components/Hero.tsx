"use client";
import { useState } from "react";
import Image from "next/image";

interface FormValues {
  name: string;
  phone: string;
}

const Hero = () => {
  const initialValues: FormValues = { name: "", phone: "" };
  const [values, setValues] = useState<FormValues>(initialValues);
  const [emailSent, setEmailSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = {
      ...values,
    };
    const response = await fetch("/api/sendMails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (response.ok) {
      setEmailSent(true);
    } else {
      // Handle error
    }
  };

  return (
    <div className="relative min-h-[calc(60vh-70px)] w-full">
      <div className="relative w-full h-[calc(60vh-70px)]">
      <Image
        src={"/webp/hero.webp"}
        alt="Hero Background"
        fill
        className="object-cover"
        priority
      />
      </div>
      
      <div className="absolute inset-0 min-w-full flex justify-center items-center hero-content   text-center p-0  
      h-[calc(60vh-70px)]">
        <div className="w-[90%] max-w-xl bg-base-100 p-8 mx-auto">
          <h1 className="mb-5 text-4xl uppercase text-primary">
            Request a free estimate
          </h1>
          <form onSubmit={onSubmit} className="flex flex-col gap-4 w-full">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                className="input input-bordered"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="text"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                className="input input-bordered"
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary w-full uppercase">
                Submit
              </button>
            </div>
          </form>
          {emailSent && (
            <p className="mt-4 text-green-500">Email sent successfully!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
