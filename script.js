let container = document.getElementsByClassName("container")[0];
let close = document.getElementsByClassName("close")[0];
let modal = document.getElementsByClassName("modal")[0];
// let newChannel = document.getElementsByClassName("newChannel")[0];

close.onclick = () => {
    modal.style.transform = "translateY(-100%)"
}


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
                        <tr class="calculationRow">
                            <td>Яндекс.Директ</td>
                            <td><input type="number" value=3000 onchange="refreshOpportunityTable(event)" class="clicksInput"></td>
                            <td><input type="number" onchange="refreshOpportunityTable(event)" class="clickPriceInput"></td>
                            <td><input type="number" onchange="refreshOpportunityTable(event)" class="conversionInput"></td>
                            <td class="leadCell">0</td>
                            <td class="leadPriceCell">0</td>
                            <td class="channelCostCell">0</td>
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
                                <button class="newChannel" type="button">НОВЫЙ КАНАЛ</button>
                            </td>
                            <td colspan="3">
                                Лиды (звонки и заявки)
                            </td>
                            <td class="leadSumCell">60</td>
                            <td class="leadPriceSumCell">1500₽</td>
                            <td class="channelCostSumCell">90 000 ₽</td>
                        </tr>
                        <tr>
                            <td colspan="4">
                                Конверсия лидов в продажи, %
                            </td>
                            <td>
                                <input type="number" onchange="refreshOpportunityTable(event)" class="resultLeadsInput">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="4">Продажи</td>
                            <td class="resultLeadsCell">5</td>
                            <td class="resultLeadPriceCell">18 000 ₽</td>
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
                            <td>0</td>
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
                                <button class="newChannel" type="button">НОВЫЙ КАНАЛ</button>
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
    newChannelOnclick();
}

function toggleTable(event, t) {
    for (let table of event.target.parentElement.getElementsByTagName("table")) {
        table.style.display = "none";
    }
    event.target.parentElement.getElementsByClassName(t)[0].style.display = "block";
}

function newChannelOnclick() {
    for (let b of document.getElementsByClassName("newChannel")) {
        b.onclick = () => {
            modal.style.transform = "translateY(0)"
        }
    }
}

function refreshOpportunityTable(event) {
    let parentRow = event.target.parentElement.parentElement
    let parentTable = parentRow.parentElement.parentElement

    // inputs
    // let clicksInput = parentRow.getElementsByClassName("clicksInput")[0];
    // let clickPriceInput = parentRow.getElementsByClassName("clickPriceInput")[0];
    // let conversionInput = parentRow.getElementsByClassName("conversionInput")[0];
    // let resultLeadsInput = parentRow.getElementsByClassName("resultLeadsInput")[0];
    
    
    // formula cells
    let leadSumCell = parentTable.getElementsByClassName("leadSumCell")[0];
    let leadPriceSumCell = parentTable.getElementsByClassName("leadPriceSumCell")[0];
    let channelCostSumCell = parentTable.getElementsByClassName("channelCostSumCell")[0];

    let resultLeadsCell = parentTable.getElementsByClassName("resultLeadsCell")[0];
    let resultLeadPriceCell = parentTable.getElementsByClassName("resultLeadPriceCell")[0];
    // let channelCostCell = parentRow.getElementsByClassName("channelCostCell")[0];
    // let channelCostCell = parentRow.getElementsByClassName("channelCostCell")[0];
    // let channelCostCell = parentRow.getElementsByClassName("channelCostCell")[0];


    // let channelCostCell = parentRow.getElementsByClassName("channelCostCell")[0];
    // let channelCostCell = parentRow.getElementsByClassName("channelCostCell")[0];

    // channelCostCell.innerHTML = event.target.value * 
    // console.log(parentRow, parentTable, parentTable.getElementsByClassName("calculationRow"));

    for (r of parentTable.getElementsByClassName("calculationRow")) {
        let clicksInput = r.getElementsByClassName("clicksInput")[0];
        let clickPriceInput = r.getElementsByClassName("clickPriceInput")[0];
        let conversionInput = r.getElementsByClassName("conversionInput")[0];
        
        let leadCell = r.getElementsByClassName("leadCell")[0];
        let leadPriceCell = r.getElementsByClassName("leadPriceCell")[0];
        let channelCostCell = r.getElementsByClassName("channelCostCell")[0];
        
        console.log(channelCostCell.innerHTML, parseInt(leadPriceCell.innerHTML));
        leadPriceCell.innerHTML = (clickPriceInput.value * 100 / conversionInput.value).toFixed(2);
        leadCell.innerHTML = parseInt(channelCostCell.innerHTML) / parseInt(leadPriceCell.innerHTML);
        channelCostCell.innerHTML = clicksInput.value * clickPriceInput.value;

        // console.log(parseInt(leadSumCell.innerHTML), leadCell.innerHTML);
        leadSumCell.innerHTML = parseInt(leadSumCell.innerHTML) + parseInt(leadCell.innerHTML)
        leadPriceSumCell.innerHTML = parseInt(leadPriceSumCell.innerHTML) + parseInt(leadPriceCell.innerHTML)
        channelCostSumCell.innerHTML = parseInt(channelCostSumCell.innerHTML) + parseInt(channelCostCell.innerHTML)
    }

    // resultLeadsCell.innerHTML = 
}