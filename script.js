let container = document.getElementsByClassName("container")[0];
let calcForm = `
<form action="">
                <button type="button">
                    <svg version="1.1" meta="vk-icons-close" width="20" height="20" viewBox="0 0 20 20">
                        <path fill="none" stroke="#000" stroke-width="1.06" d="M16,16 L4,4"></path>
                        <path fill="none" stroke="#000" stroke-width="1.06" d="M16,4 L4,16"></path>
                    </svg>
                </button>
                <input type="text" placeholder="Название варианта расчёта">
                <input type="text" placeholder="Описание расчёта">
                <button type="button" onclick="toggleTable(event, 'opportunityTable')">ОТ ВОЗМОЖНОСТЕЙ</button>
                <button type="button" onclick="toggleTable(event, 'budgetTable')">ОТ БЮДЖЕТА</button>
                <p>Посчитайте, сколько лидов и продаж можно получить при отсутствии ограничений по бюджету. Введите
                    предельное для данной тематики количество кликов по каналам, среднюю цену клика, текущую (или
                    среднюю для тематики) конверсию сайта и текущую конверсию из лидов в продажи.</p>
                <table class="opportunityTable">
                    <thead>
                        <tr>
                            <th>КАНАЛ</th>
                            <th>КЛИКОВ</th>
                            <th>ЦЕНА КЛИКА</th>
                            <th>КОНВЕРСИЯ</th>
                            <th>ЛИДЫ</th>
                            <th>ЦЕНА ЛИДА</th>
                            <th>РАСХОДЫ НА КАНАЛ, РУБ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Яндекс.Директ</td>
                            <td><input type="number" value=3000></td>
                            <td><input type="number"></td>
                            <td><input type="number"></td>
                            <td>0</td>
                            <td>- ₽</td>
                            <td>₽</td>
                            <td>
                                <button>
                                    <svg version="1.1" meta="vk-icons-close" width="20" height="20" viewBox="0 0 20 20">
                                        <path fill="none" stroke="#000" stroke-width="1.06" d="M16,16 L4,4"></path>
                                        <path fill="none" stroke="#000" stroke-width="1.06" d="M16,4 L4,16"></path>
                                    </svg>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button>НОВЫЙ КАНАЛ</button>
                            </td>
                            <td colspan="3">
                                Лиды (звонки и заявки)
                            </td>
                            <td>60</td>
                            <td>1500₽</td>
                            <td>90 000 ₽</td>
                        </tr>
                        <tr>
                            <td colspan="4">
                                Конверсия лидов в продажи, %
                            </td>
                            <td>
                                <input type="number">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="4">Продажи</td>
                            <td>5</td>
                            <td>18 000 ₽</td>
                        </tr>
                    </tbody>

                </table>
                <table class="budgetTable" style="display: none;">
                    <thead>
                        <tr>
                            <th>КАНАЛ</th>
                            <th>КЛИКОВ</th>
                            <th>ЦЕНА КЛИКА</th>
                            <th>КОНВЕРСИЯ</th>
                            <th>ЛИДЫ</th>
                            <th>ЦЕНА ЛИДА</th>
                            <th>РАСХОДЫ НА КАНАЛ, РУБ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Яндекс.Директ</td>
                            <td>-</td>
                            <td><input type="number"></td>
                            <td><input type="number"></td>
                            <td>0</td>
                            <td>- ₽</td>
                            <td><input type="number"></td>
                            <td>
                                <button>
                                    <svg version="1.1" meta="vk-icons-close" width="20" height="20" viewBox="0 0 20 20">
                                        <path fill="none" stroke="#000" stroke-width="1.06" d="M16,16 L4,4"></path>
                                        <path fill="none" stroke="#000" stroke-width="1.06" d="M16,4 L4,16"></path>
                                    </svg>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button>НОВЫЙ КАНАЛ</button>
                            </td>
                            <td colspan="3">
                                Лиды (звонки и заявки)
                            </td>
                            <td>60</td>
                            <td>1500₽</td>
                            <td>90 000 ₽</td>
                        </tr>
                        <tr>
                            <td colspan="4">
                                Конверсия лидов в продажи, %
                            </td>
                            <td>
                                <input type="number">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="4">Продажи</td>
                            <td>5</td>
                            <td>18 000 ₽</td>
                        </tr>
                    </tbody>

                </table>
            </form>
`;
let addFormButton = document.getElementsByClassName("addFormButton")[0];

addFormButton.onclick = () => {
    container.innerHTML = container.innerHTML + calcForm;
}

function toggleTable(event, t) {
    for (let table of event.target.parentElement.getElementsByTagName("table")) {
        table.style.display = "none";
    }
    event.target.parentElement.getElementsByClassName(t)[0].style.display = "block";
}