"use client"

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Form = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState<boolean>(false);
    const [submit, setSubmit] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmit(true);
        try {
            setLoading(true);
            const response = await fetch('/react-form/api', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                router.push('/products-db');
            } else {
                const errorData = await response.json();
                setError(errorData?.message || "Submission failed!");
            }
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("An unknown error occurred!");
            }
        } finally {
            setLoading(false);
        }
    };

    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <div className="w-1/2 bg-white text-black p-6 mx-auto my-6 rounded-2xl">
            <form onSubmit={handleSubmit}>
                <div className="w-[100%] flex flex-row mb-8">
                    <div className="w-1/3 p-2">
                        <label>Title</label>
                    </div>
                    <input
                        type="text"
                        placeholder="Title"
                        className="w-2/3 bg-slate-900 text-gray-100 p-2"
                        onChange={(e) => setData({ ...data, title: e.target.value })}
                    />
                </div>
                <div className="w-[100%] flex flex-row mb-8">
                    <div className="w-1/3 p-2">
                        <label>Description</label>
                    </div>
                    <textarea
                        cols={30}
                        rows={5}
                        placeholder="Description"
                        className="w-2/3 bg-slate-900 text-gray-100 p-2"
                        onChange={(e) => setData({ ...data, description: e.target.value })}
                    />
                </div>
                <div className="w-[100%] flex flex-row mb-8">
                    <div className="w-1/3 p-2">
                        <label>Price</label>
                    </div>
                    <input
                        type="text"
                        placeholder="Price"
                        className="w-2/3 bg-slate-900 text-gray-100 p-2"
                        onChange={(e) => setData({ ...data, price: e.target.value })}
                    />
                </div>
                {loading ? (
                    <h1>Loading...</h1>
                ) : (
                    <button
                    type="submit"
                    disabled={submit}
                    className="bg-amber-600 rounded-sm p-2 w-full hover:cursor-pointer"
                >
                    {submit ? "Submitting..." : "Submit"}
                </button>
                )}
            </form>
        </div>
    );
};

export default Form;
