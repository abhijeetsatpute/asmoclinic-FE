import React from "react";

const TelegramButton = () => {
  return (
    <div className="bar_wpp">
      <a
        href="https://www.t.me/murodpulatov"
        title="Telegram чат"
        target="_blank"
      >
        <div className="icon_wpp bg-primary">
          {" "}
          <i className="bi bi-telegram" aria-hidden="true"></i>
        </div>
        <div className="txt_wpp">Telegram chat</div>
      </a>
    </div>
  );
};

export default TelegramButton;
