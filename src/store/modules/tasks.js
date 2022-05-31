import { v4 as uuidv4 } from 'uuid';

export default {
    state: {
        tabStatus: "All",
        tasks: [{
                title: "Task1",
                author: "g",
                id: uuidv4(),
                isChecked: true,
            },
            {
                title: "Task2",
                author: "gf",
                id: uuidv4(),
                isChecked: false,
            },
            {
                title: "Task3",
                author: "fff",
                id: uuidv4(),
                isChecked: false,
            },
        ],
        tabs: [{
                tabTitle: 'All',
                isChecked: true,
            },
            {
                tabTitle: 'Active',
                isChecked: false,
            },
            {
                tabTitle: 'Completed',
                isChecked: false,
            },
        ],


    },
    getters: {


        getTasks(state) {
            return state.tasks;
        },
        getTasksCount(state) {
            return state.tasks.length;
        },
        getTasksFiltered(state, getters) {

            switch (state.tabStatus) {
                case "Active":
                    return getters.getActive;
                case "Completed":
                    return state.tasks.filter((task) => (task.isChecked == true));
                default:
                    return getters.getTasks;
            }

        },
        getActive(state) {
            return state.tasks.filter((task) => (task.isChecked == false));
        },


        getTabs(state) {
            return state.tabs;
        },



    },
    mutations: {
        addTask(state, text, text2) {
            state.tasks.push({
                id: uuidv4(),
                title: text,
                author: text2,
                isChecked: false,
            });
            localStorage.setItem("tasks", JSON.stringify(state.tasks));
        },
        removeTask(state, id) {
            state.tasks = state.tasks.filter(task => task.id !== id);
            localStorage.setItem("tasks", JSON.stringify(state.tasks));
        },
        changeCompleted(state, id) {
            state.tasks.forEach(task => {
                if (task.id === id) {
                    task.isChecked = !task.isChecked;
                }
            });
            localStorage.setItem("tasks", JSON.stringify(state.tasks));
        },
        filterTasks(state, tabTitle) {
            state.filter = tabTitle;
        },
        changeTabText(state, text) {
            state.tabs.map((tab) => {
                if (tab.tabTitle == text) {
                    state.tabStatus = tab.tabTitle;
                }
            })
        },
        checkLocalStorage(state) {
            state.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        }
    },
    actions: {


        checkLocalStorage(context) {
            context.commit("checkLocalStorage");
        },


    },
};