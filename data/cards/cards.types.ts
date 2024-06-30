export type CardStatus = 'todo' | 'in-process' | 'ready';

export type Card = {
    id: string;
    name: string;
    status: CardStatus;
};
