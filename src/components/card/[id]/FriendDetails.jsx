import React from "react";
import { FaPhoneAlt, FaSms, FaVideo } from "react-icons/fa";

const FriendDetails = ({ friend }) => {
    return (
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6">

            {/* Top Section */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Profile */}
                <div className="flex items-center gap-4">
                    <img
                        src={friend.picture}
                        alt={friend.name}
                        className="w-16 h-16 rounded-full"
                    />
                    <div>
                        <h2 className="text-lg font-semibold">{friend.name}</h2>

                        <span className="text-xs bg-red-100 text-red-500 px-2 py-1 rounded-full">
                            {friend.status}
                        </span>
                        

                        <p className="text-xs text-gray-400 mt-1">
                            “{friend.email}”
                        </p>
                        
                        <p className="text-xs text-gray-400 mt-1">
                            “{friend.bio}”
                        </p>
                    </div>
                </div>

                {/* Stats */}
                <div className="flex gap-4 text-center">

                    <div className="bg-gray-100 px-5 py-3 rounded-lg">
                        <p className="text-lg font-bold">
                            {friend.days_since_contact}
                        </p>
                        <p className="text-xs text-gray-500">
                            Days Since Contact
                        </p>
                    </div>

                    <div className="bg-gray-100 px-5 py-3 rounded-lg">
                        <p className="text-lg font-bold">
                            {friend.goal}
                        </p>
                        <p className="text-xs text-gray-500">
                            Goal (Days)
                        </p>
                    </div>

                    <div className="bg-gray-100 px-5 py-3 rounded-lg">
                        <p className="text-sm font-semibold">
                            {friend.next_due_date}
                        </p>
                        <p className="text-xs text-gray-500">
                            Next Due
                        </p>
                    </div>

                </div>
            </div>

            {/* Divider */}
            <div className="border-t my-6"></div>

            {/* Middle Section */}
            <div className="grid md:grid-cols-3 gap-4">

                {/* Actions */}
                <div className="space-y-2">
                    <button className="w-full border p-2 rounded hover:bg-gray-100">
                        Snooze 2 Weeks
                    </button>
                    <button className="w-full border p-2 rounded hover:bg-gray-100">
                        Archive
                    </button>
                    <button className="w-full border p-2 rounded text-red-500 hover:bg-red-50">
                        Delete
                    </button>
                </div>

                {/* Goal */}
                <div className="md:col-span-2 bg-gray-100 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                        <h3 className="text-sm font-semibold">
                            Relationship Goal
                        </h3>
                        <button className="text-xs text-gray-500">Edit</button>
                    </div>

                    <p className="text-sm text-gray-600 mt-2">
                        Connect every {friend.goal} days
                    </p>
                </div>

            </div>

            {/* Bottom Section */}
            <div className="mt-6">
                <h3 className="text-sm font-semibold mb-3">
                    Quick Check-In
                </h3>

                <div className="flex gap-4">
                    <button className="flex-1 bg-gray-100 p-3 rounded-lg flex flex-col items-center hover:bg-gray-200">
                        <FaPhoneAlt />
                        <span className="text-xs mt-1">Call</span>
                    </button>

                    <button className="flex-1 bg-gray-100 p-3 rounded-lg flex flex-col items-center hover:bg-gray-200">
                        <FaSms />
                        <span className="text-xs mt-1">Text</span>
                    </button>

                    <button className="flex-1 bg-gray-100 p-3 rounded-lg flex flex-col items-center hover:bg-gray-200">
                        <FaVideo />
                        <span className="text-xs mt-1">Video</span>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default FriendDetails;