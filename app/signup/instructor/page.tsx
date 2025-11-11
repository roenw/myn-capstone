"use client";

import { useEffect, useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";

export type InstructorFormData = {
    name?: string;
    speciality?: string;
    email?: string;
    location?: string;
    sessionType?: string;
    yearsExperience?: string;
    availability?: string;
    pricing?: string;
    qualification?: string;
    certificates?: string;
    username?: string;
    password?: string;
    confirmPassword?: string;
    [key: string]: any;
};

export default function InstructorSignupFlow() {
    const [step, setStep] = useState<number>(1);
    const [formData, setFormData] = useState<InstructorFormData>({});

    // --- Load saved data ---
    useEffect(() => {
        const saved = localStorage.getItem("instructorSignupData");
        if (saved) {
            try {
                setFormData(JSON.parse(saved));
            } catch {
                console.error("Invalid JSON in instructorSignupData");
            }
        }
    }, []);

    // --- Move to next step ---
    const handleNext = (): void => {
        localStorage.setItem("instructorSignupData", JSON.stringify(formData));
        setStep((prev) => Math.min(prev + 1, 2));
    };

    // --- Final submit ---
    const handleSubmit = (): void => {
        console.log("Final instructor data:", formData);
        localStorage.removeItem("instructorSignupData");
        setStep(2);
    };

    // --- Step routing ---
    switch (step) {
        case 1:
            return (
                <Step1
                    nextStep={handleSubmit}
                    formData={formData}
                    setFormData={setFormData}
                />
            );
        case 2:
            return <Step2 />;
        default:
            return null;
    }
}