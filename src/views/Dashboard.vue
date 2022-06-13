<template>
    <div class="container">
        <h1>Dashboard</h1>
        <div class="dashboard-top-panel">
            <v-button title="New Budget" variant="info" v-on:onClick="newBudget"/>
            <v-search-bar placeholder="Search..." />
        </div>
        <div class="dashboard-panel">
            <div class="dashboard-panel-heading">
                <h2>
                    Active
                    <span
                        class="text-muted"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Tooltip text goes here">
                        <font-awesome-icon :icon="['fas', 'circle-info']"/>
                    </span>
                </h2>
            </div>
            <div class="table-responsive">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Type</th>
                        <th>Period</th>
                        <th>Start</th>
                        <th>End</th>
                        <th>Scope</th>
                        <th colspan="2">Budget Status <span
                            class="text-muted"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Tooltip text goes here">
                            <font-awesome-icon :icon="['fas', 'circle-info']"/>
                        </span></th>
                        <th colspan="2">Actions</th>
                    </tr>
                    <tr v-for="data in budgetData" key="data.id">
                        <td>{{ data.name }}</td>
                        <td>{{ data.description }}</td>
                        <td>{{ data.type }}</td>
                        <td>{{ data.period }}</td>
                        <td>{{ data.startDate}}</td>
                        <td>{{ data.endDate}}</td>
                        <td>
                            <p class="mb-0"><strong>{{ data.scope.type}}</strong></p>
                            <p class="mb-0">{{ data.scope.number}}</p>
                        </td>
                        <td>
                            <v-progressbar :progress="data.budgetStatus.progress" :type="data.budgetStatus.type" />
                            <p class="mb-0">Cost: {{ data.budgetStatus.cost }}</p>
                            <p class="mb-0">Budget: {{ data.budgetStatus.budget }}</p>
                        </td>
                        <td>
                            <p class="mb-0"><strong>{{ data.budgetStatus.type }}</strong></p>
                            <p class="mb-0">{{ data.budgetStatus.description }}</p>
                        </td>
                        <td>
                            <v-button title="Trends" variant="dark" size="small" style="circled" class="mb-1" />
                            <v-button title="Chargeback" variant="dark" size="small" style="circled" class="mb-1" />
                            <v-button title="krishan" variant="dark" size="small" style="circled" class="mb-1" />
                        </td>
                        <td>
                            <div class="action-icons">
                                <v-button iconName="pencil" v-on:onClick="edit" />
                                <v-button iconName="trash" v-on:onClick="remove" />
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import jsonData from '@/db/db.json';

/* Import Custom components */
import Searchbar from "@/components/Searchbar/Searchbar.vue";
import Button from "@/components/Button/Button.vue";
import Progressbar from "@/components/Progressbar/Progressbar.vue";

export default {
    components: {
        vSearchBar: Searchbar,
        vButton: Button,
        vProgressbar: Progressbar
    },
    mounted() {
        this.getBudgetData();
    },
    data() {
        return {
            budgetData: jsonData.data
        }
    },
    methods: {
        /* Method for get all budget data */
        getBudgetData() {
            console.log(this.budgetData);
        },
        /* Method for add new budget */
        newBudget() {
            alert('Yes! You can add more budget here.')
        },
        /* Method for edit budget */
        edit() {
            alert('You can edit now!')
        },
        /* Method for remove budget */
        remove() {
            alert('You can delete now!')
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/base/variables';
.dashboard-top-panel {
    margin-bottom: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .form-group {
        margin-left: 20px;
        flex-grow: 1;
        max-width: 380px;
    }
}
.dashboard-panel {
    background-color: $default-light;
    padding: 15px;
    border-top: 1px solid $default-borderColor;
    h2 {
        font-weight: normal;
        margin-bottom: 10px;
        svg {
            width: 15px;
        }
    }
    .action-icons {
        display: flex;
        align-items: center;
        padding-right: 10px;
        padding-left: 10px;
        .btn {
            padding: 5px 10px;
            &:hover {
                color: $default-info;
            }
        }
        svg {
            width: 18px;
            height: 18px;
        }
    }
}
</style>
