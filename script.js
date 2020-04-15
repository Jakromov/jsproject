let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
};


function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');

        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
            a != '' && b != '' && a.length < 50) {
            console.log("done!");
            appData.expenses[a] = b;
        } else {
            i = i - 1;
        }

    };
}
chooseExpenses();

function detectBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();

    alert("Ваш бюджет на день: " + appData.moneyPerDay);
}

detectBudget();

function detectLevel(){
    if (appData.moneyPerDay < 100) {
        console.log("minimalniy uroven doxoda");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("sredniy uroven doxoda");
    } else if (appData.moneyPerDay > 2000) {
        console.log("visokiy uroven doxoda");
    } else {
        console.log("chto to ne tak!");
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("kakova summa nakopleniy ?"),
            percent = +prompt("pod kakoy protsent ?");

        appData.monthIncome = save / 100 / 12 * percent;
        alert("doxod v mesyats s vashego depozita :" + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses(){
    for (let i = 0; i < 3; i++) {
        let a = prompt("Статья необязательных расходов?", ''),
            b = +prompt("Во сколько обойдется?", '');

        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
            a != '' && b != '' && a.length < 50) {
            console.log("done!");
            appData.optionalExpenses[a] = b;
        } else {
            i = i - 2;
        }

    };
}
chooseOptExpenses();