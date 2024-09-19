"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "./Contact.css";

const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    description: Yup.string().required("Description is required"),
});

const Contact: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields },
    } = useForm({
        resolver: yupResolver(validationSchema),
        mode: "onBlur",
    });

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-full p-10">
            <div className="w-full max-w-md bg-color3 p-6 rounded-md">
                <h2 className="md:text-3xl text-xl  font-bold mb-4 text-center pb-8 TextShadow">
                    Contact Us
                </h2>
                <form className="space-y-10" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
                        <div className="flex-1 relative">
                            <input
                                {...register("name")}
                                type="text"
                                placeholder="Name"
                                className="w-full p-2 border-[0.2px] bg-transparent border-gray-300 rounded-md outline-none input"
                            />
                            {touchedFields.name && errors.name && (
                                <p className="absolute text-red-500 text-sm font-medium -bottom-6 left-0">
                                    {errors.name?.message}
                                </p>
                            )}
                        </div>
                        <div className="flex-1 relative">
                            <input
                                {...register("email")}
                                type="email"
                                placeholder="Email"
                                className="w-full p-2 border-[0.2px] bg-transparent border-gray-300 rounded-md outline-none input"
                            />
                            {touchedFields.email && errors.email && (
                                <p className="absolute text-red-500 text-sm font-medium -bottom-6 left-0">
                                    {errors.email?.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="relative w-full">
                        <textarea
                            {...register("description")}
                            placeholder="Your message"
                            rows={4}
                            className="w-full p-2 border-[0.2px] border-color5 rounded-md  bg-transparent resize-none outline-none input"
                        />
                        {touchedFields.description && errors.description && (
                            <p className="absolute text-red-500 text-sm font-medium -bottom-6 left-0">
                                {errors.description?.message}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="relative mt-10 w-full text-white font-bold p-2 rounded-md border-[0.5px] overflow-hidden group boxShadow"
                    >
                        <span className="relative z-10 uppercase">SUBMIT</span>
                        <div className="absolute inset-0 bg-color2 transition-all duration-700 ease-in-out group-hover:w-0"></div>
                        <div className="absolute inset-0 w-0 bg-color1 transition-all duration-700 ease-in-out group-hover:w-full "></div>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
