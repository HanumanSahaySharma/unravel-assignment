<template>
    <div class="progress">
        <div class="progress-bar"
            :class="progressBarBackground"
            role="progressbar"
            :style="[`width: ${progress}`]"
            :aria-valuenow="progress"
            aria-valuemin="0"
            aria-valuemax="100"></div>
            <span class="progress-count">{{progress}}</span>
    </div>
</template>
<script>
export default {
    props: ['progress', 'type'],
    computed: {
        progressBarBackground() {
            if(this.type == 'Ok') {
                return 'bg-success';
            } else if(this.type == 'Exceeded') {
                return 'bg-danger';
            } else if(this.type == 'At Risk') {
                return 'bg-warning';
            } else {
                return 'bg-dark';
            }
        }
    }
}
</script>
<style scoped lang="scss">
.progress {
    height: 22px;
    margin-bottom: 2px;
    border-radius: 0;
    background-color: #d3d7dd;
    position: relative;
    .progress-bar {
        &.bg-success {
            background-color: #2bc717 !important;
        }
        &.bg-warning {
            background-color: #ffb902 !important;
        }
        &.bg-danger {
            background-color: #d54451 !important;
        }
    }
    .progress-count {
        position: absolute;
        left: 0;
        right: 0;
        color: #fff;
        text-align: center;
    }
}
</style>
