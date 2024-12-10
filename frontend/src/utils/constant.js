export const USER_API = "https://chattergig.onrender.com/api/v1/user"
export const MSG_API = "https://chattergig.onrender.com/pi/v1/message"
export const BASE_URL = "https://chattergig.onrender.com"
// utils/playNotificationSound.js
export const playNotificationSound = () => {
    const audio = new Audio('/ding.mp3');
    audio.play().catch((error) => console.error("Audio play error:", error));
};
