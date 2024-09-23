"use client";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import Alert from "@/components/Alert/Alert";

const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
});

const Contact: React.FC = () => {
    const [alert, setAlert] = useState<{
        message: string;
        type: "success" | "error";
    } | null>(null);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const form = useRef<HTMLFormElement>(null);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, touchedFields },
    } = useForm({
        resolver: yupResolver(validationSchema),
        mode: "onBlur",
    });

    const onSubmit = (data: any) => {
        const serviceID = "service_ftqxrct";
        const templateID = "template_1fs0iys";
        const publicKey = "RuJagDA7kbPlP4icq";

        const emailData = {
            to_name: "Fabricio",
            from_name: data.name,
            user_email: data.email,
            message: data.message,
        };

        emailjs.send(serviceID, templateID, emailData, publicKey).then(
            () => {
                setAlert({
                    message: "Message sent successfully!",
                    type: "success",
                });
                reset();
                setFormData({ name: "", email: "", message: "" });
            },
            (error) => {
                console.error("FAILED...", error);
                setAlert({
                    message:
                        "Failed to send the message. Please try again later.",
                    type: "error",
                });
            }
        );
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-full p-10 relative">
            {alert && (
                <Alert
                    message={alert.message}
                    type={alert.type}
                    onClose={() => setAlert(null)}
                />
            )}
            <div className="w-full max-w-md bg-color3 p-6 rounded-md">
                <h2 className="md:text-3xl text-xl font-bold mb-4 text-center pb-8 TextShadow">
                    Contact Us
                </h2>
                <form
                    ref={form}
                    className="space-y-10"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="flex flex-col gap-7 sm:flex-row sm:gap-4">
                        <div className="flex-1 relative">
                            <input
                                {...register("name")}
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
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
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
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
                            {...register("message")}
                            placeholder="Your message"
                            rows={4}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-2 border-[0.2px] border-color5 rounded-md bg-transparent resize-none outline-none input"
                        />
                        {touchedFields.message && errors.message && (
                            <p className="absolute text-red-500 text-sm font-medium -bottom-6 left-0">
                                {errors.message?.message}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="relative mt-10 w-full text-white font-bold p-2 rounded-md border-[0.5px] overflow-hidden group boxShadow"
                    >
                        <span className="relative z-10 uppercase">SUBMIT</span>
                        <div className="absolute inset-0 bg-color2 transition-all duration-700 ease-in-out group-hover:w-0"></div>
                        <div className="absolute inset-0 w-0 bg-color1 transition-all duration-700 ease-in-out group-hover:w-full"></div>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
