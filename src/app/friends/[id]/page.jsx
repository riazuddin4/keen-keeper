'use client';
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "@/components/button/Button";

export default function FriendDetails() {
    const { id } = useParams();
    const [friend, setFriend] = useState(null);
    useEffect(() => {
        fetch("http://localhost:3000/friends.json")
            .then(res => res.json())
            .then(data => {
                const singleFriend = data.find(f => f.id == id);
                setFriend(singleFriend);
            });
    }, [id]);

    if (!friend) return <p className="text-center mt-10">Loading...</p>;

    return (
        // <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded text-center">

        //   <img
        //     src={friend.picture}
        //     alt={friend.name}
        //     className="w-24 h-24 rounded-full mx-auto mb-4"
        //   />

        //   <h2 className="text-2xl font-bold">{friend.name}</h2>

        //   <p className="text-gray-500 mt-2">
        //     Last contacted: {friend.days_since_contact} days ago
        //   </p>

        //   <div className="mt-4 flex justify-center gap-2 flex-wrap">
        //     {friend.tags.map((tag, i) => (
        //       <span
        //         key={i}
        //         className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
        //       >
        //         {tag}
        //       </span>
        //     ))}
        //   </div>

        //   <p className="mt-4">
        //     Status: <span className="font-semibold">{friend.status}</span>
        //   </p>

        // </div>

        <div className=" max-w-4xl mx-auto bg-white rounded-xl shadow p-6 ">

            {friend && 
                <div className="flex gap-4 space-y-6">


                <div className=" flex-col md:flex-row items-center justify-between gap-6">


                    <div className="grid justify-center items-center mx-auto gap-3 ">
                        <img
                            src={friend.picture}
                            alt={friend.name}
                            className="w-24 h-24 rounded-full mx-auto "
                        />
                        <div className="mx-auto text-center space-y-2">
                            <h2 className="text-lg font-semibold">{friend.name}</h2>

                            <span className="text-xs bg-red-100 text-red-500 px-2 py-1 rounded-full">
                                {friend.status}
                            </span>
                            <br />
                            <br />
                            <span className="text-xs bg-green-100 mb-2 text-green-500 px-2 py-1 rounded-full">
                                {friend.tags}
                            </span>
                            <br />
                            <br />
                            <span className="text-xs bg-green-100 mb-2 text-green-500 px-2 py-1 rounded-full">
                                {friend.email}
                            </span>

                            <p className="text-xs text-gray-400 mt-1">
                                “{friend.bio}”
                            </p>
                        </div>
                    </div>

                    <div className="space-y-2 mt-6">
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

                </div>





                <div className="grid md:grid-cols-2 gap-4">


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


                    <div className="md:col-span-3 bg-gray-100 p-4 rounded-lg">
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

                    <div className="mt-6">
                        <h3 className="text-sm font-semibold mb-3">
                            Quick Check-In
                        </h3>

                       <Button name={friend.name} id={friend.id}/>

                    </div>
                </div>

            </div>}

        </div>

    );
}