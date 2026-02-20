"use client";

import { useEffect, useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";

export type TherapistFormData = {
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
    [key: string]: any;
};

export default function TherapistSignupFlow() {
    const [step, setStep] = useState<number>(1);
    const [formData, setFormData] = useState<TherapistFormData>({});

    // --- Load saved data ---
    useEffect(() => {
        const saved = localStorage.getItem("therapistSignupData");
        if (saved) {
            try {
                setFormData(JSON.parse(saved));
            } catch {
                console.error("Invalid JSON in therapistSignupData");
            }
        }
    }, []);

    // --- Move to next step ---
    const handleNext = (): void => {
        localStorage.setItem("therapistSignupData", JSON.stringify(formData));
        setStep((prev) => Math.min(prev + 1, 2));
    };

    // --- Final submit ---
    const handleSubmit = (): void => {
        console.log("Final therapist data:", formData);
        
        // Save data to localStorage before Auth0 redirect
        localStorage.setItem("therapistSignupData", JSON.stringify(formData));
        localStorage.setItem("signupType", "therapist");
        
        // Redirect to Auth0 signup
        window.location.href = '/auth/login?screen_hint=signup&returnTo=/signup/complete';
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