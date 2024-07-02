import React from "react";
import MovingGradient from "./components/animata/background/moving-gradient";

export default function App() {
    return (
        <div>
            <div>Hello</div>
            <MovingGradient className="rounded-xl shadow-md w-96">
                <div className="w-64 p-4">
                    <h4 className="text-md mb-2 flex flex-row items-center gap-2 font-bold text-orange-500">
                        <span>Priority notifications</span>
                    </h4>
                    <p className="break-words text-sm text-black/80">
                        You can set up priority notifications to be alerted on
                        your phone or computer for important emails.
                    </p>
                </div>
            </MovingGradient>
        </div>
    );
}
