<template>
    <div class="form-group">
        <input type="text" :placeholder="placeholder" class="form-control" />
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    props: ['placeholder']
}
</script>
