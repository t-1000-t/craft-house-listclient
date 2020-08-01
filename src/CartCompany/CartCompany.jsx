import React, {Component} from 'react';
import stylish from "./CartCompany.module.css";

class CartCompany extends Component {
    state = {
        isOpen: false
    };

    toggleBtn = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    render() {
        const {isOpen} = this.state;
        const {item} = this.props;
        return (
            <>
                <div type="Button" onClick={this.toggleBtn} className={stylish.boxNameCell}>
                    <b>Имя заявителя: </b>{item.initialValue.nameCompany} <b>Анкета
                    Подана: </b> {item.initialValue.date}
                </div>
                {isOpen && <ul>
                    <li>Группа товаров/услуг и название: {item.initialValue.products}</li>
                    <li>Оборудование, мощность и т.д.: {item.initialValue.equipment}</li>
                    <li>Площадь аренды (кв.м.): от {item.initialValue.areaStart} до {item.initialValue.areaFinish}</li>
                    <li>Вода {item.initialValue.subscriptionWater === "yes" ? "ДА" : "НЕТ"}</li>
                    <li>Канализация {item.initialValue.subscriptionSewerage === "yes" ? "ДА" : "НЕТ"}</li>
                    <li>Вытяжка {item.initialValue.subscriptionHood === "yes" ? "ДА" : "НЕТ"}</li>
                    <li>Склад {item.initialValue.subscriptionStock === "yes" ? "ДА" : "НЕТ"}</li>
                    <li>Контакт для связи: {item.initialValue.phoneNumber}</li>
                </ul>}
            </>
        );
    }
}

export default CartCompany;