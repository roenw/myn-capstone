"use client";

import { useEffect, useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";

export type PhysicianFormData = {
    name?: string;
    email?: string;
    license?: string;
    npi?: string;
    organization?: string;
    username?: string;
    password?: string;
    confirmPassword?: string;
    [key: string]: any;
};

export default function PhysicianSignupFlow() {
    const [step, setStep] = useState<number>(1);
    const [formData, setFormData] = useState<PhysicianFormData>({});

    // --- Load saved data ---
    useEffect(() => {
        const saved = localStorage.getItem("physicianSignupData");
        if (saved) {
            try {
                setFormData(JSON.parse(saved));
            } catch {
                console.error("Invalid JSON in physicianSignupData");
            }
        }
    }, []);

    // --- Move to next step ---
    const handleNext = (): void => {
        localStorage.setItem("physicianSignupData", JSON.stringify(formData));
        setStep(2);
    };

    // --- Final submit ---
    const handleSubmit = (): void => {
        console.log("Final physician data:", formData);
        localStorage.removeItem("physicianSignupData");
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