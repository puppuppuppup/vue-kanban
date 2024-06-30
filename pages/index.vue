<template>
    <div class="flex flex-col">
        <UiContainer class="w-full py-8 border-b border-white/10">
            <h1 class="text-4xl font-semibold">Your plans</h1>
        </UiContainer>
        <UiContainer class="flex flex-col">
            <div class="py-4 w-full flex justify-end gap-4">
                <UiInput ref="newCardInput" />
                <UiButton icon="/icons/btn/plus.svg" @click="addNewCard">Add new card</UiButton>
            </div>
            <LayoutCards :cards="cards" />
        </UiContainer>
    </div>
</template>

<script lang="ts">
export default {
    computed: {
        cards() {
            return this.$store.state.cards;
        },
        newCardName(): string {
            return (this.$refs?.newCardInput as { value: string } | undefined)?.value || '';
        },
    },
    methods: {
        addNewCard() {
            this.$store.commit('addCard', { name: this.newCardName });
            this.$refs?.newCardInput?.clear();
        },
    },
};
</script>

<style>
*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    @apply bg-gray-900 text-white;
    min-width: 320px;
    min-height: 100vh;
}

button,
input {
    border: none;
    background: none;
    outline: none;
    font-size: inherit;
    color: inherit;
    font-family: inherit;
}
</style>
