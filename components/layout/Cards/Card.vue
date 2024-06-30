<template>
    <div
        v-on="$listeners"
        class="card p-6 w-full flex items-center justify-center bg-gray-800 border rounded-md border-white/10 hover:border-purple-600/70 transition-colors cursor-pointer relative"
        draggable="true"
        @dragstart="startDragging"
    >
        <span>{{ card.name }}</span>
        <button class="trash absolute top-2 right-2 w-fit h-fit" @click="deleteCard">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6 transition-colors w-[17px] h-[17px] min-w-[17px] min-h-[17px]"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
            </svg>
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Card } from '~/data/cards/cards.types';

export default defineComponent({
    props: {
        card: {
            type: Object as PropType<Card>,
            required: true,
        },
    },
    methods: {
        startDragging() {
            this.$store.commit('updateDraggedCardId', this.card.id);
            this.$store.commit('updateCurrentColumn', this.card.status);
        },
        deleteCard() {
            this.$store.commit('deleteCard', this.card.id);
        },
    },
});
</script>

<style scoped>
.trash {
    @apply transition-opacity opacity-0 pointer-events-none;
}

.card:hover .trash {
    @apply opacity-100 pointer-events-auto;
}
.trash:hover > svg {
    @apply stroke-purple-400/70;
}
</style>
