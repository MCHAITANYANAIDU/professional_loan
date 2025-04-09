import { toast } from 'react-toastify';

export const roast = (type = 'login', who = 'user') => {
  const messages = {
    login: {
      admin: "Ah yes, Admin logs in like a boss... and breaks things in production.",
      user: "User login? Welcome back, fellow bug generator!"
    },
    register: {
      user: "You just registered. Congrats! Now forget your password like the rest of us."
    },
    logout: {
      any: "Logged out? Fine. Go touch grass 🌱."
    }
  };

  const msg = messages[type]?.[who] || messages[type]?.any || "React Roast incoming 🔥";
  toast(msg, { type: 'info' });
};
