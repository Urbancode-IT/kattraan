import React from "react";
import growth from "@/assets/img/instructor-home/growth.jpg";
import earn from "@/assets/img/instructor-home/earn.jpg";
import innovative from "@/assets/img/instructor-home/innovative.jpg"; // Use your banner image here
import { Button } from "@/components/ui/button";

const CardSection = () => {
    return (<section>
        <h2 className="text-4xl font-bold text-red-500 my-12 text-center">Benefits with Kattraan</h2>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-4 lg:px-16 py-12 bg-white">

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div class="max-w-sm rounded overflow-hidden shadow-lg shadow-green-500/50 hover:shadow-pink-500/50 hover:shadow-lg transition">
                    <img class="w-full" src={growth} alt="Career Growth" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 text-center">Career Growth</div>
                        <p class="text-gray-700 text-base">
                            Enhance your teaching career with industry-leading exposure. Expand your skills and gain credibility in the education sector. Develop leadership qualities and explore new teaching methodologies. Gain access to professional development workshops and mentorship programs.
                        </p>
                    </div>

                </div>
                <div class="max-w-sm rounded overflow-hidden shadow-lg shadow-green-500/50 hover:shadow-pink-500/50 hover:shadow-lg transition">
                    <img class="w-full" src={earn} alt="Earn Handsomely" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 text-center">Earn Handsomely</div>
                        <p class="text-gray-700 text-base">
                            Get rewarded for your expertise with competitive pay. Secure financial stability while doing what you love. Enjoy performance-based incentives and additional perks. Benefit from referral bonuses and flexible payment options.
                        </p>
                    </div>

                </div>
                <div class="max-w-sm rounded overflow-hidden shadow-lg shadow-green-500/50 hover:shadow-pink-500/50 hover:shadow-lg transition">
                    <img class="w-full" src={innovative} alt="Sunset in the mountains" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 text-center">Innovative Teaching</div>
                        <p class="text-gray-700 text-base">
                            Utilize modern tools to create interactive learning experiences. Inspire students with creative and engaging content. Stay ahead with cutting-edge technologies and teaching strategies. Leverage AI-driven tools to enhance student learning outcomes.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </section>
    )
};

export default CardSection;