import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "@/services/authService";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "../context/AuthContext";


export default function Login() {
    const { setUser, setToken } = useAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "admin@gymbro.com",
        password: "password",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await login(formData);
    
            setToken(response.data.token);
            setUser(response.data.user);
            navigate("/dashboard");

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Card className="w-full max-w-md shadow-2xl border-0">
            <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-slate-950">
                    Welcome Back
                </CardTitle>

                <p className="text-slate-500">
                    Sign in to continue to Gym Bro
                </p>
            </CardHeader>
            <CardContent className="p-6">
                <div className="flex items-center">
                <form  className="w-full" onSubmit={handleSubmit}>


                    <Label className="font-medium mb-2 text-slate-950">Email</Label>
                    <Input
                        name="email"
                        type="email"
                        className="h-11 mb-3 text-slate-950"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <Label className="font-medium mb-2 text-slate-950">Password</Label>
                    <Input
                        type="password"
                        name="password"
                        className="h-11 mb-3 text-slate-950"
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <div className="flex justify-end mb-4">
                        <button
                            type="button"
                            className="text-sm text-blue-600 hover:underline"
                        >
                            Forgot Password?
                        </button>
                    </div>

                    <Button className="w-full h-11 bg-blue-600 hover:bg-blue-700">
                        Sign In
                    </Button>
                 </form>
                </div>
            </CardContent>
        </Card>
    );
}