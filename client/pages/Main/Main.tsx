import React from "react";
import { Link } from "react-router-dom";
import { CloudLink, Button, BUTTON_STYLE, Symbol } from "atoms";
import devices from "../../data/devicesLinks.json";
import "./style.scss";

export const Main = () => {
  const services = ["Перейти в PINK", "Интернет-магазин", "PINK ТВ", "Сервисы"];

  return (
    <div className="main-page">
      <div className="main-page__links">
        ДЛЯ
        <ul className="devices">
          {devices.map(
            ({ title, url }: { title: string, url: string }, index) => {
              return (
                <li>
                  <CloudLink to={url} title={title} />
                </li>
              );
            }
          )}
        </ul>
        <ul className="services">
          {services.map((service) => {
            return (
              <li>
                <Link to="/">{service}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="main-page__order">
        <div className="order-text">
          С PINK POWER интернет будет с вами везде и всегда
        </div>
        <div className="order-button">
          <Button
            style={BUTTON_STYLE.WHITE}
            title="Заказать SIM-карту"
            redirect="/order"
          />
        </div>
      </div>
    </div>
  );
};
