"use client";

import Link from "next/link";
import React, { useState } from "react"; 

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { api } from "@/lib/api";           
import { useRouter } from "next/navigation"; 
const Page = () => {
  let router = useRouter(); 

  
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  
  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/api/auth/register", formData);
      router.push("/login");
    } catch (error) {
      console.error("Register error:", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md rounded-2xl border shadow-xl">
        <CardContent className="p-8">

          {/* Heading */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-foreground">
              Create Account
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Register your new account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5"> 

            {/* Name */}
            <div className="space-y-2">
              <Label>Name</Label>
              <Input
                name="name"             
                onChange={handleChange} 
                type="text"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label>Email</Label>
              <Input
                name="email"            
                onChange={handleChange} 
                type="email"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label>Password</Label>
              <Input
                name="password"         
                onChange={handleChange} 
                type="password"
                placeholder="Create password"
              />
            </div>

            {/* Button */}
            <Button className="w-full rounded-xl">
              Register
            </Button>
          </form>

          {/* Footer */}
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-primary hover:underline">
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;