<template>
    <input v-model="value" class="py-2 px-4 rounded-md" v-on="$listeners" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data: () => ({
        value: '',
    }),
    methods: {
        clear() {
            this.value = '';
        },
    },
});
</script>

<style scoped>
input {
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
}
</style>
