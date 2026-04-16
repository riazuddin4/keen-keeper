'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const FriendCard = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch('/friends.json')
            .then(res => res.json())
            .then(data => setFriends(data));
    }, []);

    if (!friends.length) return <p className="text-center mt-10">Loading...</p>;
    // if (!friends.length) return <p className="text-center mt-10"><loading></loading></p>;

    return (
        <div className="bg-gray-100 py-10">
            <div className="max-w-6xl mx-auto px-4">

                <h2 className="text-xl font-semibold mb-6">Your Friends</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {friends.map((friend) => {

                        const statusColor =
                            friend.status === "overdue"
                                ? "bg-red-500"
                                : friend.status === "almost due"
                                    ? "bg-yellow-500"
                                    : "bg-green-500";

                        return (
                            <Link key={friend.id} href={`/friends/${friend.id}`}>
                                <div
                                    key={friend.id}
                                    className="bg-white rounded-lg shadow-sm p-5 text-center hover:shadow-md transition"
                                >
                                    
                                    <Image
                                        src={friend.picture}
                                        alt={friend.name}
                                        width={64}
                                        height={64}
                                        className="w-16 h-16 rounded-full mx-auto mb-3"
                                    />

                                    
                                    <h3 className="font-semibold text-gray-800">
                                        {friend.name}
                                    </h3>

                                    {/* Days */}
                                    <p className="text-xs text-gray-400 mb-2">
                                        {friend.days_since_contact} days ago
                                    </p>

                                    {/* Tags */}
                                    <div className="flex justify-center gap-2 mb-2 flex-wrap">
                                        {friend.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    
                                    <span
                                        className={`text-xs text-white px-3 py-1 rounded-full ${statusColor}`}
                                    >
                                        {friend.status}
                                    </span>
                                </div>

                            </Link>
                                );
                    })}     

                            </div>
            </div>
            </div>
            );
};

            export default FriendCard;