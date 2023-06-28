let tab = function () {
    //присваиваем tabnav список элементов
    let tabNav = document.querySelectorAll(".tabs-nav__item"),
        //присваивание списка элементов соответствующего селектора
        tabContent = document.querySelectorAll(".tab"),
        tabName;
        tabNav.forEach(item => {
            item.addEventListener("click", selectTabNav)
        });
        function selectTabNav() {
            tabNav.forEach(item => {
                item.classList.remove("is-active");
            });
            this.classList.add("is-active");
            tabName = this.getAttribute("data-tab-name");
            selectTabContent(tabName);
        }
        function selectTabContent(tabName){
            tabContent.forEach(item => {
                //для эл-ов из списка tabcont проверяется содержит ли он класс указанный в переменной tabname.
                //елси да, то active, если нет, то is acrive удаляется
                item.classList.contains(tabName) ? item.classList.add("is-active") : item.classList.remove("is-active");
            })
        }
};
tab();