"use client";

import { useEffect, useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";

// --- Shared type for all form data fields ---
export type ClientFormData = {
    firstName?: string;
    lastName?: string;
    preferredName?: string;
    dob?: string;
    email?: string;
    phone?: string;
    location?: string;
    referral?: string;
    username?: string;
    password?: string;
    confirmPassword?: string;
    interests?: string[];
    otherInterest?: string;
    yogaBefore?: string;
    practiceFrequency?: string;
    sessionType?: string;
    [key: string]: any; // allow dynamic keys for later steps
};

export default function ClientSignupFlow() {
    // --- Track current step ---
    const [step, setStep] = useState<number>(1);

    // --- Global form data shared across steps ---
    const [formData, setFormData] = useState<ClientFormData>({});

    // --- Load from localStorage on mount ---
    useEffect(() => {
        const saved = localStorage.getItem("clientSignupData");
        if (saved) {
            try {
                setFormData(JSON.parse(saved));
            } catch {
                console.error("Invalid JSON in localStorage");
            }
        }
    }, []);

    // --- Move to next step and save data ---
    const handleNext = (): void => {
        localStorage.setItem("clientSignupData", JSON.stringify(formData));
        setStep((prev) => Math.min(prev + 1, 6));
    };

    // --- Submit final data ---
    const handleSubmit = (): void => {
        console.log("Final submitted data:", formData);
        // TODO: connect API submission here
        localStorage.removeItem("clientSignupData");
        setStep(6); // show confirmation screen
    };

    // --- Render step based on step number ---
    switch (step) {
        case 1:
            return (
                <Step1
                    nextStep={handleNext}
                    formData={formData}
                    setFormData={setFormData}
                />
            );
        case 2:
            return (
                <Step2
                    nextStep={handleNext}
                    formData={formData}
                    setFormData={setFormData}
                />
            );
        case 3:
            return (
                <Step3
                    nextStep={handleNext}
                    formData={formData}
                    setFormData={setFormData}
                />
            );
        case 4:
            return (
                <Step4
                    nextStep={handleNext}
                    formData={formData}
                    setFormData={setFormData}
                />
            );
        case 5:
            return (
                <Step5
                    nextStep={handleSubmit}
                    formData={formData}
                    setFormData={setFormData}
                />
            );
        case 6:
            return <Step6 />;
        default:
            return null;
    }
}