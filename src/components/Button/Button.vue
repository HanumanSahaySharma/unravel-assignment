<template>
    <button class="btn" :class="[variant ? `btn-${variant}`:``, size ? `btn-${size}` : ``, style ? `btn-circled` : ``]" @click="this.$emit(`onClick`)">
        <template v-if="title">{{ title }}</template>
        <template v-if="iconName">
            <font-awesome-icon :icon="['fas', `${iconName}`]" />
        </template>
    </button>
</template>
<script>
export default {
    name: 'Button',
    props: ['iconName', 'title', 'variant', 'size', 'style', `onClick`],
}
</script>
